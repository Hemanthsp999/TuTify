import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <div className=" my-80 bg-blue-600 h-96 rounded-3xl py-4 px-4">
                <h1 className=" mx-6 my-5 font-bold text-6xl">Welcome</h1>
                <h1 className=" mx-5 text-2xl font-bold">email</h1>
                <input className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5" type="text" placeholder="enter email..." />
                <h2 className=" mx-5 my-1 text-2xl font-bold">password</h2>
                <div className="relative">
                    <input
                        className="mx-3 w-80 text-xl rounded-xl font-bold px-5"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="enter password..."
                    />
                    <span
                        className=" absolute top-1 right-4 cursor-pointer "
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? '👁️' : '👁️'}
                    </span>
                </div>
                <Link to="/">
                    <button className=" my-10 mx-20 text-6xl font-bold bg-red-500 h-20 px-2 py-2 rounded-2xl hover:bg-blue-800 hover:text-white" >Login</button>
                </Link>
            </div>
        </>
    )
}
export default Login