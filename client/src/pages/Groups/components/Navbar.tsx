import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

const handleClick = () => console.log("create");
const Navbar = () => {
  return (
    <div className="navbar-gradient h-[100px]  flex items-center p-10 pl-10 pr-20 justify-between ">
      <div className="flex gap-7 items-center">
        {/*back arrow*/}
        <Link to="/home">
          <FaArrowLeft className="text-2xl hover:cursor-pointer hover:text-white" />
        </Link>
        {/*logo and tag line*/}
        <div className="h-[70px] w-[300px] flex flex-col justify-center  ">
          <h2 className="mb-0 hover:cursor-pointer">Study Groups</h2>
          <p className="mt-0 text-sm font-bold text-[#6B6875]">
            Connect with peers and study together
          </p>
        </div>
      </div>

      <div>
        <Button
          label="Create Group"
          height={46}
          width={204}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
