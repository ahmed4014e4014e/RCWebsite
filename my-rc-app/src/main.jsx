/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Routes
import Root from "./routes/Root";
import Home from "./routes/home";
import About from "./routes/about";
import Services from "./routes/services";
import Contact from "./routes/contact";
import LoginForm from './routes/loginForm';

// Create a Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "loginForm",
        element: <LoginForm />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
