import { createBrowserRouter } from "react-router-dom";
import { Login, Task } from "../pages";
import { MainLayout } from "../components";
import ProtectedRoute from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Task />
          </ProtectedRoute>
        )
      }
    ],
  },
]);
