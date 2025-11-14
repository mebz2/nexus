import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
	return (
		<div className=" bg-white h-20  flex items-center  pr-8 justify-between box-border border-b border-[#EBEBEB]">
			{/*logo and tag line*/}
			<div className="bg-white h-full w-[15.2%] flex gap-2.5 pl-5 justify-between  items-center  ">
				<Link to="/home">
					<h1 className="m-0 hover:cursor-pointer">nexus</h1>
				</Link>
			</div>

			<div className="flex gap-3 h-full items-center ">
				<Link
					to="/login"
					className="
						hover:cursor-pointer rounded-sm h-10 w-9 flex
						justify-center items-center bg-black"
				>
					<p className="text-white font-bold text-xl">N</p>
				</Link>

				<p className="text-sm font-medium">Name</p>
				<FaAngleDown
					className="
					hover:cursor-pointer
				"
				/>
			</div>
		</div>
	);
};

export default Navbar;
