import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar({onSearch}) {
  const [searchTerm,setSearchTerm]=useState()
  const handleInputChange=(e)=>{
   setSearchTerm(e.target.value)
  }
  const handleSearch=()=>{
    onSearch(searchTerm)
  }
  return (
    <>
      <div className=" w-full flex justify-end text-3xl py-8 gap-2 bg-blue-800">
       <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Home</Link>
       <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">About us</Link>
       <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">SignUp</Link>
      </div>
      <div >
        <h1 className=" mx-20 my-10 flex font-bold text-9xl text-white w-82 rounded-xl hover:text-red-500 animate-pulse ">WELL COME TO OUR WEBSITE</h1>
      </div>
      <div className=" flex justify-center">
        <input className=" py-4 px-5 bg-amber-400 text-2xl rounded-2xl" type="text" value={searchTerm} onChange={handleInputChange} placeholder="...search....."/>
        <button onClick={handleSearch}></button>
      </div>
    </>
  )
}
export default Navbar