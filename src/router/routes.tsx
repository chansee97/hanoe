import ErrorPage from "./ErrorPage";
import { RouteObject } from 'react-router-dom'
import App from '../App'
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
    path: '/about',
    element: <About/>,
  }
]