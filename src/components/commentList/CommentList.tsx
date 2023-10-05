import React, { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../store/hook'
import { getComments } from '../../store/slices/commentSlice'
import CommentTree from '../commentTree/CommentTree'

const story = {
  by: 'dhouston',
  descendants: 71,
  id: 8863,
  kids: [
    9224,
    8917,
    8884,
    8887,
    8952,
    8869,
    8873,
    8958,
    8940,
    8908,
    9005,
    9671,
    9067,
    9055,
    8865,
    8881,
    8872,
    8955,
    10403,
    8903,
    8928,
    9125,
    8998,
    8901,
    8902,
    8907,
    8894,
    8870,
    8878,
    8980,
    8934,
    8943,
    8876],
  score: 111,
  time: 1175714200,
  title: 'My YC app: Dropbox - Throw away your USB drive',
  type: 'story',
  url: 'http://www.getdropbox.com/u/2/screencast.html'
}

function CommentList (): JSX.Element {
  // const { story } = useAppSelector(state => state.story)
  const dispatch = useAppDispatch()
  const loadCommentsRef = useRef(true)

  useEffect(() => {
    if (loadCommentsRef.current) {
      loadCommentsRef.current = false

      dispatch(getComments(story.kids))
        .then(() => {})
        .catch(() => {})
    }
  }, [])

  return (
    <CommentTree parentId={story.id} level={0}/>
  )
}

export default CommentList
