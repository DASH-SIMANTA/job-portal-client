import React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import './index.css'
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);