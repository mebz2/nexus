import { Link } from "react-router-dom";

type ButtonProps = {
	label: string;
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
	path: string;
};
const NavbarButton = ({ label, active, setActive, path }: ButtonProps) => {
	return (
		<Link
			to={path}
			onClick={() => setActive(label)}
			className={`w-full h-full
               flex justify-center
              items-center ${
					active == label
						? "bg-black rounded-[5px] text-white hover:text-white hover:bg-black  "
						: "bg-[#F3F3FF] text-black hover:bg-gray-300 "
				}
              hover:text-black
              hover:cursor-pointer`}
		>
			<p
				className={`text-xs ${active == label ? "font-bold" : "font-medium "}`}
			>
				{label}
			</p>
		</Link>
	);
};

export default NavbarButton;
