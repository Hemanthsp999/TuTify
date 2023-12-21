import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/Navbar";
import ToDo from "../page/todolist";
import Login from "../page/Login";
import About from "../page/About";
import Logout from "../page/Logout";
import Start from "../page/Start";
import SignUp from "../page/Signup";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Start/>
        },
        {
            path:"/home",
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
            path:"/signup",
            element:<SignUp/>
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