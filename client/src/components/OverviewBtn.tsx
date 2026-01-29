import type { IconType } from "react-icons";

type OverviewProps = {
	label: string;
	Icon: IconType;
};
const OverviewBtn = ({ label, Icon }: OverviewProps) => {
	return (
		<button
			className="bg-primary w-[90%] h-[13%] 
						flex items-center pl-4 rounded-sm text-white 
						cursor-pointer outline-none hover:shadow-xl
						hover:font-semibold gap-5"
		>
			<Icon />
			{label}
		</button>

	);
}

export default OverviewBtn;
