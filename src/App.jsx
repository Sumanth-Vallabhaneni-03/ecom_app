import React from 'react';
import './index.css'; 
import RootLayout from './RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import About from './components/about/About';
import RoutingError from './RoutingError';
import UserProfile from './components/user-profile/UserProfile';
function App() {
  const browserRouter=createBrowserRouter([
    {
      path:'',
      element:<RootLayout></RootLayout>,
      errorElement:<RoutingError></RoutingError>,
      children:[
          {
            path:'',
            element:<Home></Home>
          },
          {
            path:'register',
            element:<Register></Register>
          },
          {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'about',
            element:<About></About>
          },
          {
            path:'user-profile',
            element:<UserProfile />
          }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
