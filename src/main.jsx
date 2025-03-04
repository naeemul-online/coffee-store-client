import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './AddCoffee';
import App from './App';
import CoffeeCard from './CoffeeCard';
import UpdateCoffee from './UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
   
  },
 
  {
    path: '/coffee-card',
    element:<CoffeeCard></CoffeeCard>
  },
  {
    path: '/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
