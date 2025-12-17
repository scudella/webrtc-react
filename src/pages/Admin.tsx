import StatItem from '@/components/StatItem'
import {ShieldPlus, ShieldUser, ShieldOff, Trash2} from 'lucide-react'
import {useLoaderData, useRevalidator} from 'react-router-dom'
import {customFetch} from '@/utils/axios'

function Admin() {
  const {users, admin, nonVerifiedUsers} = useLoaderData()
  const {revalidate} = useRevalidator()

  const handleNonVerified = async () => {
    try {
      await customFetch.delete('/users/delete-non-verified')
      revalidate()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='grid gap-y-8 md:grid-cols-2 md:gap-x-4 xl:grid-cols-3'>
      <StatItem
        count={admin}
        title='admin'
        icon={<ShieldPlus />}
        color='text-green-500'
        bgColor='bg-green-100 dark:bg-green-900/30'
      />
      <StatItem
        count={users}
        title='users'
        icon={<ShieldUser />}
        color='text-blue-500'
        bgColor='bg-blue-100 dark:bg-blue-900/30'
      />
      <StatItem
        count={nonVerifiedUsers}
        title='Non-Verified Users'
        icon={<ShieldOff />}
        color='text-red-500'
        bgColor='bg-red-100 dark:bg-red-900/30'
        utilityIcon={<Trash2 />}
        onUtilityClick={handleNonVerified}
      />
    </section>
  )
}
export default Admin
