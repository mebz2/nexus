import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const path = location.pathname.replace("/", "");

	return (
		<div
			className="
				bg-white h-full flex items-center pl-10 pr-8
				justify-between box-border border-b border-[#EBEBEB]
			"
		>
			{/*bread crumbs*/}
			<div>
				<p>{path.charAt(0).toUpperCase() + path.slice(1)}</p>
			</div>

			{/*user name and dropdown*/}
			<div className="flex gap-3 h-full items-center ">
				<Link
					to="/login"
					className="
						hover:cursor-pointer rounded-sm h-10 w-9 flex
						justify-center items-center bg-primary"
				>
					<p className="text-white font-bold text-xl">N</p>
				</Link>

				<p className="text-sm font-medium">Name</p>
			</div>
		</div>
	);
};

export default Navbar;
