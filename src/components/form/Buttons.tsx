import {useFormStatus} from 'react-dom'
import {Button} from '@/components/ui/button'
import {RotateCcw} from 'lucide-react'
import {cn} from '@/lib/utils'

type BtnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: BtnSize
}

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const {pending} = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <RotateCcw className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}
