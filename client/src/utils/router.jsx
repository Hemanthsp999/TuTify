import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/Navbar";
import Login from "../page/Login";
import Start from "../page/Start";
import SignUp from "../page/Signup";
import Student from "../page/sudent";
import Teacher from "../page/teacher";
import Profile from "../page/Profile";
import Notification from "../page/Notification";


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
            path:"/notification",
            element:<Notification/>,
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
            path:"/profile",
            element:<Profile/>,
        },
        {
            path:"/student",
            element:<Student/>
        },
        {
            path:"/teacher",
            element:<Teacher/>
        },
    ],
)
export { router}
