import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import { StarOutlined } from "@ant-design/icons";
import type IStory from "../../interfaces/IStory";
import "./style.css";

const { Link } = Typography;

function StoryListItem({ story }: { story: IStory }): JSX.Element {
  const IconText = ({
    icon,
    text,
  }: {
    icon: React.FC;
    text: string;
  }): JSX.Element => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Link className="story-container" href={`/story/${story.id}`}>
      <Card hoverable title={story.title} style={{ width: 600 }}>
        <Row gutter={16}>
          <Col>{story.by}</Col>
          <Col>{new Date(story.time * 1000).toUTCString()}</Col>
          <Col>
            <IconText
              icon={StarOutlined}
              text={story.score.toString()}
              key="list-vertical-star-o"
            />
          </Col>
        </Row>
      </Card>
    </Link>
  );
}

export default StoryListItem;
