function Login(){
    return(
        <>
        <div className=" my-80 bg-blue-600 h-72 rounded-3xl py-4 px-4">
            <h1 className=" mx-6 my-5 font-bold text-6xl">Welcome</h1>
            <input className=" mx-3 w-64 text-3xl rounded-xl font-bold px-5" type="text" placeholder="enter..." />
            <div>
             <button className=" my-10 mx-5 text-6xl font-bold bg-red-500 h-20 px-2 py-2 rounded-2xl hover:bg-blue-800 hover:text-white">Login</button>
            </div>
        </div>
        </>
    )
}
export default Login