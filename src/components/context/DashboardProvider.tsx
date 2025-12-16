import {useNavigate} from 'react-router-dom'
import {customFetch} from '@/utils/axios'
import {toast} from 'sonner'
import {
  DashboardContext,
  type User,
} from '@/components/context/dashboard-context'
import {useState, type PropsWithChildren} from 'react'

type DashboardProviderProps = PropsWithChildren<{
  storageKey?: string
}>

const DashboardProvider = ({
  children,
  storageKey = 'dashboard-user',
}: DashboardProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  const logoutUser = async () => {
    try {
      await customFetch.delete('/auth/logout')
      setUser(null)
      localStorage.removeItem(storageKey)
      toast.success('Logging out...')
      navigate('/')
    } catch (err) {
      toast.error('Logout failed')
      console.log(err)
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        logoutUser,
        setUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
