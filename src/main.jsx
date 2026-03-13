import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLay from './MainLay/Mainlay';
import Home from './Pages/Home/Home';
import AllTouristsSpot from './Pages/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './Pages/AddTouristsSpot/AddTouristsSpot';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MyList from './Pages/MyList/MyList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/allTouristSpot',
        element: <AllTouristsSpot /> ,
        loader: () => fetch('http://localhost:5000/places') 
      },
      {
        path: '/addTouristSpot',
        element: <AddTouristsSpot />
      },
      {
        path: '/myList',
        element: <MyList />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
