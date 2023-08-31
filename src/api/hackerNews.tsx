import { type AxiosResponse } from 'axios'
import client from './hackerNewsClient'
import type IStory from '../interfaces/IStory'

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

export default { getStoryIds, getStory }
