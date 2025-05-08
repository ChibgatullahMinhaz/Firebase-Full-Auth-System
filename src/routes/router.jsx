import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home";
import ErrorLayout from "../layouts/ErrorLayout";
import SingUp from "../features/Auth/Pages/SingUp";
import Login from "../features/Auth/Pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
            ,
            {
                path: "/SingUp",
                element: <SingUp></SingUp>
            }
            
        ]
    }
    ,
    {
        path: "*",
        element: <ErrorLayout></ErrorLayout>,
    }
])