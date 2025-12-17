import {Card, CardContent} from '@/components/ui/card'
import {type ReactNode} from 'react'

interface StatItemProps {
  count: number | string
  title: string
  icon: ReactNode
  color: string
  bgColor: string
  utilityIcon?: ReactNode
  onUtilityClick?: () => void
}

const StatItem = ({
  count,
  title,
  icon,
  color,
  bgColor,
  utilityIcon,
  onUtilityClick,
}: StatItemProps) => {
  return (
    <Card className={`border-b-4 ${color.replace('text', 'border')}`}>
      <CardContent className='p-6'>
        <header className='flex justify-between items-stretch'>
          {/* Count */}
          <span className={`text-5xl font-bold leading-tight ${color}`}>
            {count}
          </span>

          {/* Icon column */}
          <div className='flex flex-col items-center justify-center gap-5 h-full'>
            {/* Main icon */}
            <div
              className={`flex h-14 w-16 items-center justify-center rounded-lg ${bgColor}`}
            >
              <span className={`text-2xl ${color}`}>{icon}</span>
            </div>

            {/* Utility button */}
            {utilityIcon && (
              <button
                type='button'
                onClick={onUtilityClick}
                className={`inline-flex items-center justify-center rounded-md p-1 transition
                  hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 ${color}`}
                aria-label='Utility action'
              >
                {utilityIcon}
              </button>
            )}
          </div>
        </header>

        <h5 className='mt-2 text-lg font-medium capitalize tracking-wide'>
          {title}
        </h5>
      </CardContent>
    </Card>
  )
}

export default StatItem
