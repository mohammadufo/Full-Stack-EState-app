import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import {
  HomePage,
  ListPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  SinglePage,
} from './routes'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/register',
          element: <RegisterPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
