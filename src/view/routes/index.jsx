import {createHashRouter} from 'react-router-dom'
import { Layout } from "../Components/Layout/Layout";
import { Home } from "../pages/home/home";

export const router = createHashRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '',
          Component: Home
        }
      ],
    }
  ])