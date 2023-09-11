import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { getStory } from '../../store/slices/storySlice'
import { useParams } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import { Anchor, Space, Typography } from 'antd'

const { Link, Text } = Typography

function StoryItem (): JSX.Element {
  const { id } = useParams()
  console.log(id)
  const story = useAppSelector((state) => state.story)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStory(Number(id)))
      .then(() => {})
      .catch(() => {})
  }, [getStory])

  return (
    <Space direction="vertical">
      <Title level={2}>{story.story.title}</Title>
      <Anchor>
        <Link href={story.story.url}>{story.story.url}</Link>
      </Anchor>
      <Text>Written by: {story.story.by}</Text>
      <Text>{new Date(story.story.time).toUTCString()}</Text>
      <Text>Total comments: {story.story.descendants}</Text>
    </Space>
  )
}

export default StoryItem
