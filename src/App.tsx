import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {
  Error,
  HomeLayout,
  Landing,
  About,
  Login,
  Admin,
  DashboardLayout,
  AppLayout,
} from './pages'
import {ThemeProvider} from '@/components/context/ThemeProvider'
import {Toaster} from '@/components/ui/sonner'
import {loginAction} from './pages/loaders-actions/loginAction'
import {authLoader} from './pages/loaders-actions/authLoader'
import {publicOnlyLoader} from './pages/loaders-actions/publicOnlyLoader'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {index: true, element: <Landing />},
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'login',
            element: <Login />,
            action: loginAction,
            loader: publicOnlyLoader,
          },
        ],
      },

      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: authLoader,
        children: [
          {
            index: true,
            element: <Admin />,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
    <>
      <Toaster />
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
