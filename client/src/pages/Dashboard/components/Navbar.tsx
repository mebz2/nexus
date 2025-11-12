import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
	const [background, setBackground] = useState(false);
	return (
		<div className=" bg-[#EEEFF1] h-20  flex items-center p-10 pl-8 pr-8 justify-between ">
			{/*logo and tag line*/}
			<div className="h-[70px] w-[300px] flex flex-col justify-center  ">
				<Link to="/home">
					<h1 className="m-0 hover:cursor-pointer">nexus</h1>
				</Link>
			</div>

			<div className="flex gap-3 items-center">
				<Link to="/login">
					<div
						onMouseEnter={() => setBackground(true)}
						onMouseLeave={() => setBackground(false)}
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
