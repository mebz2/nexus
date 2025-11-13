import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import type React from "react";
import type { SetStateAction } from "react";

type NavbarProps = {
	collapse: boolean;
	setCollapse: React.Dispatch<SetStateAction<boolean>>;
};
const Navbar = ({ collapse, setCollapse }: NavbarProps) => {
	const handleClick = () => {
		setCollapse(!collapse);
	};
	return (
		<div className=" bg-[#EEEFF1] h-20  flex items-center  pr-8 justify-between box-border">
			{/*logo and tag line*/}
			<div className="h-full w-[15%] flex gap-2.5 pl-5 justify-between  items-center  ">
				<Link to="/home">
					<h1 className="m-0 hover:cursor-pointer">nexus</h1>
				</Link>

				<div className="hover:cursor-pointer " onClick={handleClick}>
					{collapse ? <FaChevronRight /> : <FaChevronLeft />}
				</div>
			</div>

			<div className="flex gap-3 items-center">
				<Link to="/login">
					<div
						className="
						hover:cursor-pointer rounded-sm h-10 w-9 flex
						justify-center items-center bg-black"
					>
						<p className="text-white font-bold text-xl">N</p>
					</div>
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
