import { StrictMode } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import AuthProvider from "./authProvider/AuthProvider";
import router from "./routes/Route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
