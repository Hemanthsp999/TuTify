import { Link } from "react-router-dom"

function SignUp(){
        return(
            <>
            <div className=" grid grid-cols-2 gap-4">
                <div className=" bg-blue-600 my-40 mx-64 w-48 px-2 py-2 text-5xl rounded-2xl font-bold">
                    <Link  className=" ">Student</Link>
                </div>
                <div className=" bg-blue-600 my-40 mx-64 w-48 px-2 py-2 text-5xl rounded-2xl font-bold">
                    <Link  className=" ">Teacher</Link>
                </div>
            </div>
            </>
        )
}
export default SignUp