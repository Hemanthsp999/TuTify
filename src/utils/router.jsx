import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/Navbar";
import ToDo from "../page/todolist";


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
    ],
)
export { router}