import { type AxiosResponse } from 'axios'
import client from './hackerNewsClient'

interface NewStory {
  by: string
  descendants: number
  id: number
  kids: number[]
  time: Date
  title: string
  type: string
  url: string
}

const getStoryIds = async (): Promise<number[]> => {
  const response: AxiosResponse<number[]> = await client.get<number[]>('newstories.json', {
    params: {
      print: 'pretty'
    }
  })

  return response.data
}

const getStories = async (): Promise<NewStory> => {
  const ids = await getStoryIds()
  console.log(ids)
  const response: AxiosResponse<NewStory> = await client.get<NewStory>(`item/${ids[0]}.json`, {
    params: {
      print: 'pretty'
    }
  })
  console.log(response.data)
  return response.data
}
export default { getStoryIds, getStories }
