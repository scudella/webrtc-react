import FormInput from '../components/form/FormInput'
import {SubmitButton} from '@/components/form/Buttons'
import {Form} from 'react-router-dom'
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function Login() {
  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-full max-w-sm shadow-lg'>
        <CardHeader>
          <CardTitle className='text-3xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form method='post'>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <FormInput
                  label='email'
                  name='email'
                  type='email'
                  placeholder='m@example.com'
                />
              </div>
              <div className='grid gap-2'>
                <FormInput label='password' name='password' type='password' />
              </div>
            </div>
            <CardFooter className='flex-col gap-2'>
              <SubmitButton text='Login' className='w-full' />
              <Button variant='outline' className='w-full'>
                Login with Google
              </Button>
            </CardFooter>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}
export default Login
