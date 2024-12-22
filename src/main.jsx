import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './DesingsFile/Root.jsx';
import FirstNavBar from './DesingsFile/FirstNavBar.jsx';
import SecondNavBar from './DesingsFile/SecondNavBar.jsx';
import ThirdNavBar from './DesingsFile/ThirdNavBar.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <FirstNavBar></FirstNavBar>
      },
      {
        path: '/secondNavbar',
        element: <SecondNavBar></SecondNavBar>
      },
      {
        path: '/thirdNavbar',
        element:  <ThirdNavBar></ThirdNavBar>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
