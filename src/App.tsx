import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {
  Error,
  HomeLayout,
  Landing,
  About,
  Login,
  Admin,
  Dashboard,
} from './pages'
import {ThemeProvider} from '@/components/ThemeProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
])

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
