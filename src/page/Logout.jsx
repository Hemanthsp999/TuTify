import { Link } from "react-router-dom"

function Logout(){
    return(
        <>
        <Link to="/login">
            <button className=" my-96 bg-blue-600 text-9xl h-40 py-4 px-2 rounded-3xl font-bold hover:bg-red-500 hover:text-white">Logout</button>
        </Link>
        </>
    )
}
export default Logout