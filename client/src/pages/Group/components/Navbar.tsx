import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-gradient h-20 w-full flex items-center p-10 pl-10 pr-20 justify-between ">
      <div className="flex gap-7 items-center">
        {/*back arrow*/}
        <Link to="/groups">
          <FaArrowLeft className="text-lg hover:cursor-pointer hover:text-white" />
        </Link>
        {/*logo and tag line*/}
        <div className="h-[70px] w-[300px] flex flex-col justify-center  ">
          <h2 className="mb-0">Calculus Study Group</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
