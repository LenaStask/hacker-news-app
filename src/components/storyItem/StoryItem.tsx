import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getStory } from "../../store/slices/storySlice";
import { useParams } from "react-router-dom";
import Title from "antd/es/typography/Title";
import { Button, Space, Spin, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./style.css";
import CommentList from "../commentList/CommentList";

const { Link, Text } = Typography;

function StoryItem(): JSX.Element {
  const { id } = useParams();
  const { story } = useAppSelector((state) => state.story);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStory(Number(id)))
      .then(() => {})
      .catch(() => {});
  }, [getStory]);

  if (story !== null) {
    return (
      <>
        <Space direction="vertical">
          <Button href="/" className="custom_button">
            <ArrowLeftOutlined />
            Back
          </Button>
          <Title level={2}>{story.title}</Title>
          <Link href={story.url}>{story.url}</Link>
          <Text className="story_author">Written by: {story.by}</Text>
          <Text className="story_date">
            {new Date(story.time * 1000).toUTCString()}
          </Text>
          <Text className="story_total-comments">
            Total comments: {story.descendants}
          </Text>
        </Space>
        <div className="story_comments">
          <CommentList story={story}/>
        </div>
      </>        
    );
  }
  return (
    <div className="example">
      <Spin size="large" />
    </div>
  );
}

export default StoryItem;
