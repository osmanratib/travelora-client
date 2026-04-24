import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import MainLay from './MainLay/Mainlay';
import Home from './Pages/Home/Home';
import AllTouristsSpot from './Pages/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './Pages/AddTouristsSpot/AddTouristsSpot';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MyList from './Pages/MyList/MyList';
import PlaceDetails from './Pages/PlaceDetails/PlaceDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdatePlaces from './Pages/UpdatePlaces/UpdatePlaces';
import Countries from './Components/Countries/Countries';
import CountriesDetails from './Pages/CountriesDetails/CountriesDetails';
import MainLay from './MainLay/MainLay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://travelora-server.vercel.app/places')
      },
      {
        path: '/allTouristSpot',
        element: <AllTouristsSpot />,
        loader: () => fetch('https://travelora-server.vercel.app/places')
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoute>
          <AddTouristsSpot />
        </PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute>
          <MyList />
        </PrivateRoute>
      },
      {
        path: '/updatePlace/:id',
        element: <PrivateRoute>
          <UpdatePlaces />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://travelora-server.vercel.app/places/${params.id}`)
      },
      {
        path: "places/:id",
        element: <PrivateRoute>
          <PlaceDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://travelora-server.vercel.app/places/${params.id}`)
      },
      {
        path: '/countries',
        element: <Countries />
      },
      {
        path: 'country/:countryName',
        element: <CountriesDetails />,
        loader: ({ params }) =>
          fetch(`https://travelora-server.vercel.app/places?countryName=${params.countryName}`)
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
