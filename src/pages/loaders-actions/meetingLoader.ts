import {redirect} from 'react-router-dom'
import {customFetch} from '@/utils/axios'
import {AxiosError} from 'axios'

export const meetingLoader = async () => {
  try {
    const {data} = await customFetch.get('/meeting/get-rooms')
    return data
  } catch (err) {
    const error = err as AxiosError
    console.log('meeting loader error', error)
    return redirect('/')
  }
}
