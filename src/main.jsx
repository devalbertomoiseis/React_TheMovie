import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Sobre from './components/Sobre/Sobre'
import DetailsItem from './components/DetailsItem/DetailsItem';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
    
  },

  {
    path: "/Sobre",
    element: <Sobre />
  },
  
  {
    path: "/Contact",
    element: <Contact/>
  },
  
  {
    path: "/Home",
    element: <Home />
  },
  
  {
    path: "/DetailsItem/:id",
    element:<DetailsItem />

  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
  <RouterProvider router = {router} />
</React.StrictMode>,
) 