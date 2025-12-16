import {redirect} from 'react-router-dom'
import {customFetch} from '@/utils/axios'

export const publicOnlyLoader = async () => {
  try {
    await customFetch.get('/users/showMe')
    return redirect('/dashboard')
  } catch {
    return null
  }
}
