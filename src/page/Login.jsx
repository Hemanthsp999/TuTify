import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    function onClickSubmit() {
        console.log("email", email);
        console.log("password", showPassword);
    }
    return (
        <>
            <div className=" grid grid-cols-2 gap-4">
                <div>
                    <img src="./98.jpg" alt="login" className=" my-20 mx-40 " />
                </div>
                <div className=" mx-64 my-80 bg-blue-600 w-96 h-96 rounded-3xl py-4 px-4">
                    <h1 className=" mx-6 my-5 font-bold text-6xl">Welcome</h1>
                    <form id="login-form" method="post" onSubmit={(e)=>onClickSubmit(e)} >
                        <h1 className=" mx-5 text-2xl font-bold">email</h1>
                        <input className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5" type="text" placeholder="enter email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                        <h2 className=" mx-5 my-1 text-2xl font-bold">password</h2>
                        <div className="relative">
                            <input
                                className="mx-3 w-80 text-xl rounded-xl font-bold px-5"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="enter password..."
                                value={showPassword}
                                onChange={(e) => setShowPassword(e.target.value)}
                            />
                            <span
                                className=" absolute top-1 right-4 cursor-pointer "
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? '👁️' : '👁️'}
                            </span>
                        </div>
                        <Link to="/signup" className=" my-2 mx-20 text-2xl font-bold hover:text-green-500">new user</Link>
                        <button className=" my-2 mx-20 text-3xl font-bold bg-red-500 h-14 px-2 py-2 rounded-2xl hover:bg-blue-800 hover:text-white" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login