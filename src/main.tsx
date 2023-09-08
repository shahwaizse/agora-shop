import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Home from './components/Home.tsx';
import Shop from './components/Shop.tsx';
import App from './App.tsx';
import Cart from './components/Cart.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
