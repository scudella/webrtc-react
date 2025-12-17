import {redirect} from 'react-router-dom'
import {customFetch} from '@/utils/axios'
import {AxiosError} from 'axios'

export const userCountLoader = async () => {
  try {
    const {data} = await customFetch.get('/users/count')
    return data
  } catch (err) {
    const error = err as AxiosError
    console.log('authLoader error', error)
    return redirect('/')
  }
}
