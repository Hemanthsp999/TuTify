import { useState } from "react";
import { flushSync } from "react-dom";
import { json, useNavigate } from "react-router-dom";

function Student() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [usn, setUsn] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setShowPassword] = useState(false);
    const [rePass, setRePass] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!password);
    };

    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const jsonObj = {
            name: name,
            email: email,
            pass: password,
            rePass: rePass,
            usn: usn,
            phoneNumber: phoneNumber,
        };
        const dataCont = jsonObj;
        console.log(dataCont);
        var dataObj = JSON.stringify(dataCont);
        fetch("http://localhost:4040/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: dataObj,
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                if (data >= "400" || data <= "500") {
                    console.error("error");
                } else {
                    navigate("/login");
                }
            });
    };
    return (
        <>
            <div className=" bg-[url('./signup.jpg')] bg-cover flex flex-col">
                <div className=" my-64 mx-52 w-48 px-2 py-2 text-6xl font-bold text-white">
                    Student
                </div>
                <form
                    id="student-register-form"
                    action="/student"
                    method="post"
                    onSubmit={handleOnSubmit}
                >
                    <div className=" mx-40">
                        <h1 className=" mx-5 text-2xl font-bold text-white">Name</h1>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="enter name..."
                        />
                        <h1 className=" mx-5 text-2xl font-bold text-white">Email</h1>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            placeholder="enter email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h2 className=" mx-5 my-1 text-2xl font-bold text-white">
                            Password
                        </h2>
                        <div className="">
                            <input
                                className="mx-3 w-80 text-xl rounded-xl font-bold px-5"
                                type={password ? "text" : "password"}
                                placeholder="enter password..."
                                value={password}
                                onChange={(e) => setShowPassword(e.target.value)}
                            />
                            <span
                                className=" top-1 right-4 cursor-pointer "
                                onClick={togglePasswordVisibility}
                            >
                                {password ? "👁️" : "👁️"}
                            </span>
                        </div>
                        <h3 className=" mx-5 my-1 text-2xl font-bold text-white">
                            Confirm Password
                        </h3>
                        <input
                            className="mx-3 w-80 text-xl rounded-xl font-bold px-5"
                            type={password ? "text" : "password"}
                            placeholder="re-enter password..."
                            value={rePass}
                            onChange={(e) => setRePass(e.target.value)}
                        />
                        <span
                            className=" top-1 right-4 cursor-pointer "
                            onClick={togglePasswordVisibility}
                        >
                            {password ? "👁️" : "👁️"}
                        </span>
                        <h4 className=" mx-5 my-1 text-2xl font-bold text-white">Usn</h4>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            value={usn}
                            onChange={(e) => setUsn(e.target.value)}
                            placeholder="enter usn..."
                        />
                        <h5 className=" mx-5 my-1 text-2xl font-bold text-white">
                            Mobile Number
                        </h5>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="enter number..."
                        />
                    </div>
                    <div>
                        <button
                            className=" mx-52 my-10 text-5xl font-bold text-white bg-blue-500 px-2 py-2 rounded-2xl hover:bg-red-500 hover:text-black"
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Student;
