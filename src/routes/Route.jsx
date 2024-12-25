import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import CarAddPage from "../pages/CarAddPage";
import CarAvailablePage from "../pages/CarAvailablePage";
import CarDetailsPage from "../pages/CarDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyBookingPage from "../pages/MyBookingPage";
import MyCarPage from "../pages/MyCarPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/carAdd",
        element: (
          <PrivateRoute>
            <CarAddPage />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/car-available",
        element: <CarAvailablePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/details/:id",
        errorElement: <ErrorPage />,
        element: <CarDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/car-details/${params.id}`),
      },
      {
        path: "/my-car",
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <MyCarPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-booking",
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <MyBookingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
