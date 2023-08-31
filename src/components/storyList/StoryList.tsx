import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { Space, Spin } from 'antd'
import { getStories } from '../../store/slices/storiesSlice'
import './style.css'
import StoryListItem from '../storyListItem/StoryListItem'

function StoryList (): JSX.Element {
  const dispatch = useAppDispatch()
  const { loading, story } = useAppSelector(state => state.stories)

  useEffect(() => {
    dispatch(getStories())
      .then(() => {})
      .catch(() => {})
  }, [])
  if (loading) {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    )
  }
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      {story.map(story => <StoryListItem key={story.id} story={story}/>) }
    </Space>
  )
}

export default StoryList
