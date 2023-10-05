import { type AxiosResponse } from 'axios'
import client from './hackerNewsClient'
import type IStory from '../interfaces/IStory'
import type IComment from '../interfaces/IComment'

const getStoryIds = async (): Promise<number[]> => {
  const response: AxiosResponse<number[]> = await client.get<number[]>('newstories.json', {
    params: {
      print: 'pretty'
    }
  })

  return response.data
}

const getStory = async (id: number): Promise<IStory> => {
  const response: AxiosResponse<IStory> = await client.get<IStory>(`item/${id}.json`, {
    params: {
      print: 'pretty'
    }
  })

  return response.data
}

const getComment = async (id: number): Promise<IComment> => {
  const response: AxiosResponse<IComment> = await client.get<IComment>(`item/${id}.json`, {
    params: {
      print: 'pretty'
    }
  })
  return response.data
}

export default { getStoryIds, getStory, getComment }
