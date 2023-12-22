import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className=" w-full flex justify-around text-3xl py-6 gap-2 bg-blue-300" >
        <Link to="/home">
          <h1 className=" font-bold text-black grid grid-flow-col text-3xl">
            <img src="./logo1.jpg" alt="logo" className=" h-12" />Tutify</h1>
        </Link>
        <div className=" mx-10 grid grid-flow-col">
          <Link to="/notification">
            <img src="./download.png" alt="notification" className=" h-12" />
          </Link>
          <Link to="/profile" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Profile</Link>
        </div>
      </div>
      <div>
        <h1 className=" mx-64 my-40 flex font-bold text-9xl text-black w-82 ">WELCOME</h1>
      </div>
    </>
  );
}
export default Navbar