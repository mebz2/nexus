import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

type GroupCardProps = {
	name: string;
	description: string;
	members: number;
	createdAt?: string;
	updatedAt?: string;
};

const GroupCard = (group: GroupCardProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<Link to="/group">
			<div
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className={`
			      h-full w-full border-t border-border p-5 flex
			      flex-col gap-10 bg-white rounded-xl
			      shadow-sm hover:shadow-2xl relative
			      hover:cursor-pointer box-border
			     `}
			>
				<h2 className="line-clamp-1">{group.name}</h2>
				<p className="line-clamp-3">{group.description}</p>
				<IoMdArrowRoundForward
					className={`text-[100%] text-black
				        absolute bottom-3 right-5
				        ${visible ? "visible" : "invisible"}
			        `}
				/>
			</div>
		</Link>
	);
};
export default GroupCard;
