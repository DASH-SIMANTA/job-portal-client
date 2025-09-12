import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import MainLayout from "../layout/MainLayout";
import {
  createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

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
        },
        {
            path:'/jobs/:id',
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)

        }
    ]
  },
]);
export default router