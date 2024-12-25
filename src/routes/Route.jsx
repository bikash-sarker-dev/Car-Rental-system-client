import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import CarAddPage from "../pages/CarAddPage";
import CarAvailablePage from "../pages/CarAvailablePage";
import CarDetailsPage from "../pages/CarDetailsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyBookingPage from "../pages/MyBookingPage";
import MyCarPage from "../pages/MyCarPage";
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
        path: "/details/:id",
        element: <CarDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/car-details/${params.id}`),
      },
      {
        path: "/my-car",
        element: <MyCarPage />,
      },
      {
        path: "/my-booking",
        element: <MyBookingPage />,
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
