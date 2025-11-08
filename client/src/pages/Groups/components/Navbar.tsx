import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

const handleClick = () => console.log("create");
const Navbar = () => {
  return (
    <div className="navbar-gradient h-20  flex items-center  pl-10 pr-20 justify-between box-border ">
      <div className="flex gap-7 items-center">
        {/*back arrow*/}
        <Link to="/home">
          <FaArrowLeft className="text-lg hover:cursor-pointer hover:text-white" />
        </Link>
        {/*logo and tag line*/}
        <div className="h-[70px] w-[300px] flex flex-col justify-center  ">
          <h2>Study Groups</h2>
          <p className="text-xs font-bold text-[#6B6875]">
            Connect with peers and study together
          </p>
        </div>
      </div>

      <div>
        <Button
          label="Create Group"
          height={40}
          width={180}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
