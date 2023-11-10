import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/Navbar";
import ToDo from "../page/todolist";
import Login from "../page/Login";
import About from "../page/About";
import Logout from "../page/Logout";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Navbar/>,
        },
        {
            path:"/todolist",
            element:<ToDo/>,
        },
        {
            path:"/login",
            element:<Login/>,
        },
        {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/logout",
            element:<Logout/>,
        },

    ],
)
export { router}