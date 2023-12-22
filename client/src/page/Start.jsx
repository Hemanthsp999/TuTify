import { Link } from "react-router-dom"

function Start() {
    return (
        <>
            <div className=" w-full flex justify-around text-3xl py-6 gap-2 bg-blue-300" >     
                    <h1 className=" font-bold text-black grid grid-flow-col text-3xl">
                    <img src="./logo1.jpg" alt="logo" className=" h-12" />Tutify</h1>
                <div className=" mx-10">
                    <Link to="/login" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-semibold">Login</Link>
                    <Link to="/signup" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-semibold">SignUp</Link>
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-4">
                <div>
                    <img src="./123.jpg" alt="image" className=" my-28 mx-10" />
                </div>
                <div>
                    <p className=" my-40 mx-24 text-4xl italic hover:text-red-700 font-semibold">Your Learning Potential with Tutify: where knowledge meets personalized Guidance!</p>
                </div>
            </div>
        </>
    )
}
export default Start
