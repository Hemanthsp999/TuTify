import { useState } from "react";

function Teacher() {
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
            <div className=" bg-[url('./signup.jpg')] bg-cover flex flex-col ">
                <div className=" my-64 mx-52 w-48 px-2 py-2 text-6xl rounded-2xl font-bold text-white">
                    Teacher
                </div>
                <div className=" mx-40">
                    <h1 className=" mx-5 text-2xl font-bold text-white">Name</h1>
                    <input className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5" type="text" placeholder="enter name..." />
                    <h1 className=" mx-5 text-2xl font-bold text-white">Email</h1>
                    <input className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5" type="text" placeholder="enter email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h2 className=" mx-5 my-1 text-2xl font-bold text-white">Password</h2>
                    <div className="">
                        <input
                            className="mx-3 w-80 text-xl rounded-xl font-bold px-5"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="enter password..."
                            value={showPassword}
                            onChange={(e) => setShowPassword(e.target.value)}
                        />
                        <span
                            className=" top-1 right-4 cursor-pointer "
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? '👁️' : '👁️'}
                        </span>
                    </div>
                    <h3 className=" mx-5 my-1 text-2xl font-bold text-white">Confirm Password</h3>
                    <input
                        className="mx-3 w-80 text-xl rounded-xl font-bold px-5"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="re-enter password..."
                        value={showPassword}
                        onChange={(e) => setShowPassword(e.target.value)}
                    />
                    <span
                        className=" top-1 right-4 cursor-pointer "
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? '👁️' : '👁️'}
                    </span>
                    <h4 className=" mx-5 my-1 text-2xl font-bold text-white">Id</h4>
                    <input className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5" type="text" placeholder="enter id..." />
                    <h5 className=" mx-5 my-1 text-2xl font-bold text-white">Mobile Number</h5>
                    <input className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5" type="text" placeholder="enter number..." />
                </div>
                <div>
                    <button className=" mx-52 my-10 text-5xl font-bold text-white bg-blue-500 px-2 py-2 rounded-2xl hover:bg-red-500 hover:text-black">
                        SUBMIT
                    </button>
                </div>
            </div>
        </>
    )
}
export default Teacher