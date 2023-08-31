import React from 'react'
import { Card, Col, Row, Space } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import type IStory from '../../interfaces/IStory'

function StoryListItem ({ story }: { story: IStory }): JSX.Element {
  const IconText = ({ icon, text }: { icon: React.FC, text: string }): JSX.Element => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  return (
    <Card hoverable onClick={() => { console.log('CLICK') }} size="small" title={story.title} style={{ width: 600 }}>
    <Row gutter={16}>
      <Col>{story.by}</Col>
      <Col>{story.time}</Col>
      <Col><IconText icon={StarOutlined} text={story.score.toString()} key="list-vertical-star-o" /></Col>
    </Row>
  </Card>
  )
}

export default StoryListItem
