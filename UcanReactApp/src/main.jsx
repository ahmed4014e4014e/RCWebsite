/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
//Routes
import Root from "./routes/Root";
import Home from "./routes/home";
import About from "./routes/about";
import Services from "./routes/services";
import Contact from "./routes/contact";
import TutorAccess from "./routes/tutorAccess";
import StudentAccess from "./routes/studentAccess";
import AdminAccess from "./routes/adminAccess";
import Account from "./routes/account";
import StudentDashboard from "./routes/studentDashboard";
import TutorDashboard from "./routes/tutorDashboard";
import AdminDashboard from "./routes/adminDashboard";

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
        path: "tutor-access",
        element: <TutorAccess />,
      },
      {
        path: "admin-access",
        element: <AdminAccess />,
      },
      {
        path: "student-access",
        element: <StudentAccess />,
      },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: "student-dashboard",
        element: (
          <RoleProtectedRoute allowedRole="student">
            <StudentDashboard />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "tutor-dashboard",
        element: (
          <RoleProtectedRoute allowedRole="tutor">
            <TutorDashboard />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "admin-dashboard",
        element: (
          <RoleProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </RoleProtectedRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
