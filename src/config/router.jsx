import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "@layouts/Identity";
import Login from "@components/Login";
import Register from "@components/Register";
import Home from "@pages/Home";
import Profile from "@pages/Profile";
import NotFound from "@pages/NotFound";


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
                errorElement: <Login />,
            },
            {
                path: "register",
                element: <Register />,
                errorElement: <Register />,
            },
        ],
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router