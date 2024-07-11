import ErrorPage from "./ErrorPage";
import { RouteObject } from 'react-router-dom'
import App from '../App'
import Components from '../pages/Components'
import Hooks from '../pages/Hooks'
import About from '../pages/About'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: '/components',
    element: <Components />,
  },
  {
    path: '/hooks',
    element: <Hooks />,
  },
  {
    path: '/about',
    element: <About/>,
  }
]