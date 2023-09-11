import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { Button, Space, Spin } from 'antd'
import { getStories } from '../../store/slices/storiesSlice'
import './style.css'
import StoryListItem from '../storyListItem/StoryListItem'

function StoryList (): JSX.Element {
  const dispatch = useAppDispatch()
  const { loading, story } = useAppSelector(state => state.stories)
  const [fresh, setFresh] = useState(0)

  const refresh = (): void => {
    setFresh(fresh + 1)
  }

  console.log(fresh)

  useEffect(() => {
    dispatch(getStories())
      .then(() => {})
      .catch(() => {})
  }, [fresh])

  if (loading) {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    )
  }
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Button className='custom_button' onClick={() => { refresh() }}>Update news</Button>
      <Space direction="vertical" size="middle" style={{ display: 'flex', width: '100%' }}>
        {story.map(story => <StoryListItem key={story.id} story={story}/>) }
      </Space>
    </Space>
  )
}

export default StoryList
