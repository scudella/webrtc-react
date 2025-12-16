import {type FC} from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {ChevronDown, User} from 'lucide-react'
import {useDashboardContext} from './context/use-dashboard-context'

const LogoutContainer: FC = () => {
  const {user, logoutUser} = useDashboardContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex items-center gap-2 px-2'>
          <Avatar>
            {user?.picture ? (
              <AvatarImage src={user.picture} alt={user.name} />
            ) : (
              <AvatarFallback>
                <User className='h-4 w-4' />
              </AvatarFallback>
            )}
          </Avatar>

          <span className='text-sm font-medium'>{user?.name}</span>
          <ChevronDown className='h-4 w-4 opacity-70' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='w-40'>
        <DropdownMenuItem onClick={logoutUser} className='cursor-pointer'>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LogoutContainer
