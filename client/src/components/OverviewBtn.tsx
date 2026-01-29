import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

type OverviewProps = {
	label: string;
	Icon: IconType;
	path: string;
};
const OverviewBtn = ({ label, Icon, path }: OverviewProps) => {
	const navigate = useNavigate();
	return (
		<button
			className="bg-primary w-[90%] h-[13%] 
						flex items-center pl-4 rounded-sm text-white 
						cursor-pointer outline-none hover:shadow-xl
						hover:font-semibold gap-5"
			onClick={() => navigate(`/group/${path}`)}
		>
			<Icon />
			{label}

		</button>

	);
}

export default OverviewBtn;
