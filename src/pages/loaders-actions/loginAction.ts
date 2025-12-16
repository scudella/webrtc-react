import {customFetch} from '@/utils/axios'
import {toast} from 'sonner'
import {redirect, type ActionFunctionArgs} from 'react-router-dom'
import {AxiosError} from 'axios'

export const loginAction = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/login', data)
    toast.success('Login successful')
    return redirect('/dashboard')
  } catch (err) {
    const error = err as AxiosError<{msg?: string}>
    toast.error(error?.response?.data?.msg ?? 'Login failed')
    return error
  }
}
