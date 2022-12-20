import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./views/DefaultLayout";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./views/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                //element: <Navigate to="/users" />,
                element: <Users/>,
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
            },
            {
                path: '/users',
                element: <Users/>,
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signup',
                element: <Signup/>,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>,
    }
]);

export default router;