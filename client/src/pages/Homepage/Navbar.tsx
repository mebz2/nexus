import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-gradient h-[100px]  flex items-center p-10 pl-20 pr-20 justify-between ">
      {/*logo and tag line*/}
      <div className="h-[70px] w-[300px] flex flex-col justify-center  ">
        <h1 className="mb-0 hover:cursor-pointer">nexus</h1>
        <p className="mt-0 text-sm font-bold text-[#6B6875]">
          Unlock your learning all in one place
        </p>
      </div>
      <Link to="/login">
        <div className="hover:bg-white hover:cursor-pointer rounded-full h-14 w-14 flex justify-center items-center">
          <FaRegUser className="text-3xl text-purple-950" />
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
