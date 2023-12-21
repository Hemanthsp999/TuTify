import { Link } from "react-router-dom"

function Start() {
    return (
        <>
            <div className=" w-full flex justify-around text-3xl py-6 gap-2 bg-blue-300" >     
                    <h1 className=" font-bold text-black grid grid-flow-col text-3xl">
                    <img src="./logo1.jpg" alt="logo" className=" h-12" />Tutify</h1>
                <div className=" mx-10">
                    <Link to="/login" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Login</Link>
                    <Link to="/signup" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">SignUp</Link>
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-4">
                <div>
                    <img src="./123.jpg" alt="image" className=" my-28 mx-10" />
                </div>
                <div>
                    <p className=" my-40 mx-24 text-4xl italic hover:text-red-700 font-semibold">Unlock your full learning potential with our One-to-One online tutoring services. Experience personalized guidance tailored to your unique needs, ensuring accelerated understanding and mastery of subjects. Break free from traditional constraints and embrace a dynamic, flexible, and impactful learning journey with our expert tutors.</p>
                </div>
            </div>
        </>
    )
}
export default Start