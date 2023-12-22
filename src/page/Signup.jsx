import { Link } from "react-router-dom"

function SignUp() {

    return (
        <>
            <div className=" bg-[url('./ra.jpg')] bg-cover bg-center py-10">
                <div className=" grid grid-cols-2 gap-4">
                    <div className=" my-52 mx-64 text-5xl font-bold text-white hover:text-blue-500">
                        <Link to="/student">As Student</Link>
                    </div>
                    <div className=" my-52 mx-64 text-5xl text-white font-bold hover:text-blue-500">
                        <Link to="/teacher" >As Teacher</Link>
                    </div>
                </div>
                <p className=" mx-96 my-40 text-3xl italic font-bold text-white justify-items-center">"Elevate Your Education Journey with Tutify: Tailored Tutoring, Infinite Possibilities!</p>
            </div>
        </>
    )
}
export default SignUp