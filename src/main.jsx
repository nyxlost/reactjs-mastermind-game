import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import App from './App'
import DecimalFinder from './page/DecimalFinder'
import AdvenceSearch from './page/AdvenceSearch'
import DetailCar from './page/DetailCar'
import Answer from './page/Answer'
import MasterMind from './page/MasterMind'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MasterMind /> },
      { path: "/detailcar", element: <DetailCar /> },
      { path: "/decimalfinder", element: <DecimalFinder /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
