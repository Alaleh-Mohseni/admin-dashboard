import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "../layouts/Identity";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
                // action: loginAction,
                errorElement: <Login />,
            },
            {
                path: "register",
                element: <Register />,
                // action: registerAction,
                errorElement: <Register />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router