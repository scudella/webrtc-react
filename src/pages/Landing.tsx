import {useDashboardContext} from '@/components/context/use-dashboard-context'
import Hero from '@/components/Hero'
import {Navigate} from 'react-router-dom'

function Landing() {
  const {user} = useDashboardContext()

  if (user) {
    return <Navigate to='/dashboard' replace />
  }

  return <Hero />
}
export default Landing
