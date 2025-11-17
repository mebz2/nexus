import { useNavigate } from "react-router-dom";

type SideBarBtnProps = {
	label: string;
	path: string;
};
const SideBarBtn = ({ label, path }: SideBarBtnProps) => {
	const pagePath = location.pathname;
	const navigate = useNavigate();
	return (
		<div
			className={`
				${
					path == pagePath
						? "bg-black text-white"
						: "text-[#797E87] hover:text-black hover:bg-[#E8E9EB]"
				}
				 hover:cursor-pointer rounded-sm
				 font-semibold pl-2 p-1
			`}
			onClick={() => navigate(path)}
		>
			{label}
		</div>
	);
};

export default SideBarBtn;
