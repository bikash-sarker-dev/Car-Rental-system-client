import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import CarAddPage from "../pages/CarAddPage";
import CarAvailablePage from "../pages/CarAvailablePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/carAdd",
        element: <CarAddPage />,
      },
      {
        path: "/car-available",
        element: <CarAvailablePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
