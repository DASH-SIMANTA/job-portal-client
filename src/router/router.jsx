import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import MainLayout from "../layout/MainLayout";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        }
    ]
  },
]);
export default router