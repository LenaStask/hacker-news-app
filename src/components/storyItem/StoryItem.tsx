import React, { useEffect } from 'react'
import { Card, Space, Row, Col } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { getStory } from '../../store/slices/storySlice'

function StoryItem ({ id }: { id: number }): JSX.Element {
  const IconText = ({ icon, text }: { icon: React.FC, text: string }): JSX.Element => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  const story = useAppSelector(state => state.story)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStory(id))
      .then(() => {})
      .catch(() => {})
  }, [getStory])

  return (
    <Card hoverable onClick={() => { console.log('CLICK') }} size="small" title={story.story.title} style={{ width: 600 }}>
      <Row gutter={16}>
        <Col>{story.story.by}</Col>
        <Col>{story.story.time}</Col>
        <Col><IconText icon={StarOutlined} text={story.story.score.toString()} key="list-vertical-star-o" /></Col>
      </Row>
    </Card>
  )
}

export default StoryItem
