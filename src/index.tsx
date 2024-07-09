import ReactDOM from 'react-dom/client';
import './style/index.css';
import { router } from './router/index';
import {
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);
