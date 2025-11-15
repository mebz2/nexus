import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = ({ path }: { path: string }) => {
	return (
		<div
			className="
			bg-white h-full flex items-center pl-10 pr-8
			justify-between box-border border-b border-[#EBEBEB]
			"
		>
			{/*bread crumbs*/}
			<div>
				<p className="">{path}</p>
			</div>

			{/*user name and dropdown*/}
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
