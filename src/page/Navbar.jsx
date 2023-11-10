import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState()
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSearch = () => {
    onSearch(searchTerm)
  }
  return (
    <>
      <div className=" w-full flex justify-around text-3xl py-6 gap-2 bg-blue-600" >
        <h1 className=" font-bold text-white">SHOPSPHERE:Your Shopping Universe</h1>
        <div className=" mx-4">
          <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Home</Link>
          <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">About us</Link>
          <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">SignUp</Link>
          <Link to="/todolist" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">ToDo List</Link>
        </div>
      </div>
      <div>
        <h1 className=" mx-40 my-40 flex font-bold text-9xl text-black w-82 rounded-xl hover:text-blue-500 animate-pulse ">WEL COME TO OUR WEBSITE</h1>
      </div>
      <div className=" flex justify-center">
        <input className=" my-10 py-4 px-5 bg-amber-400 text-2xl rounded-2xl" type="text" value={searchTerm} onChange={handleInputChange} placeholder="...search....." />
        <button onClick={handleSearch}></button>
      </div>
    </>
  )
}
export default Navbar