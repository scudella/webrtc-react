import {Outlet} from 'react-router-dom'

function HomeLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1 bg-muted/80'>
        <section className='align-element py-20 bg-muted bg-accent-foreground"'>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
export default HomeLayout
