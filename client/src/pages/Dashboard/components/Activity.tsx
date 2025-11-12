import { FaDotCircle } from "react-icons/fa";
type ActivityProps = {
	name: string;
	timestamp: number;
};
const Activity = ({ name, timestamp }: ActivityProps) => {
	return (
		<div className="flex items-center gap-6 mt-3">
			<FaDotCircle className="text-black" />
			<div className="w-full h-14 gap-1 items-end p-2.5 ">
				<p className="font-semibold line-clamp-1">{name}</p>
				<p className="text-xs text-[#737373]">{timestamp} hours ago</p>
			</div>
		</div>
	);
};

export default Activity;
