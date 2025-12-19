import StatItem from '@/components/StatItem'
import {Group, Trash2} from 'lucide-react'
import {useLoaderData, useRevalidator} from 'react-router-dom'
import {customFetch} from '@/utils/axios'

function Room() {
  const {totalRooms, orphanedRooms} = useLoaderData()
  const {revalidate} = useRevalidator()

  const handleOrphanRoom = async () => {
    try {
      await customFetch.delete('/meeting/delete-orphan-rooms')
      revalidate()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='grid gap-y-8 md:grid-cols-2 md:gap-x-4 xl:grid-cols-3'>
      <StatItem
        count={totalRooms}
        title='total rooms'
        icon={<Group />}
        color='text-green-500'
        bgColor='bg-green-100 dark:bg-green-900/30'
      />
      <StatItem
        count={orphanedRooms}
        title='orphaned rooms'
        icon={<Group />}
        color='text-red-500'
        bgColor='bg-red-100 dark:bg-red-900/30'
        utilityIcon={<Trash2 />}
        onUtilityClick={handleOrphanRoom}
      />
    </section>
  )
}
export default Room
