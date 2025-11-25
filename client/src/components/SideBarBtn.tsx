import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";

type SideBarBtnProps = {
	label: string;
	path: string;
	Icon?: IconType;
};
const SideBarBtn = ({ label, Icon, path }: SideBarBtnProps) => {
	const pagePath = location.pathname;
	const navigate = useNavigate();
	return (
		<div
			className={`
				${path == pagePath
					? "bg-primary text-white font-bold"
					: "text-[#797E87] hover:text-black hover:bg-[#E8E9EB] font-medium"
				}
				 flex items-center gap-5 hover:cursor-pointer rounded-[5px]
				 pl-3 p-1
			`}
			onClick={() => navigate(path)}
		>
			{Icon ? <Icon className="text-lg" /> : ""}
			{label}
		</div>
	);
};

export default SideBarBtn;
