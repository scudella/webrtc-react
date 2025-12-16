import {Outlet, useLoaderData, useNavigation} from 'react-router-dom'
import LoadingContainer from '@/components/LoadingContainer'
import type {User} from '@/components/context/dashboard-context'
import {useDashboardContext} from '@/components/context/use-dashboard-context'
import {useEffect} from 'react'

const DashboardLayout = () => {
  const {user} = useLoaderData() as {user: User}
  const {setUser} = useDashboardContext()
  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'

  useEffect(() => {
    setUser(user)
  }, [user, setUser])

  return (
    <main className='flex-1 bg-muted/80'>
      <section className='align-element py-20 bg-muted bg-accent-foreground"'>
        {isLoading ? <LoadingContainer /> : <Outlet context={user} />}
      </section>
    </main>
  )
}

export default DashboardLayout
