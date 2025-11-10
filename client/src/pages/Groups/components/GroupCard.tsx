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
			      h-72 w-96 border border-border p-5 flex
			      flex-col gap-10 card-gradient rounded-xl
			      shadow-lg relative
			      hover:cursor-pointer hover:shadow-xl hover:shadow-[#4C23FF]/20
			     `}
			>
				<h2 className="line-clamp-1">{group.name}</h2>
				<p className="line-clamp-3">{group.description}</p>
				<IoMdArrowRoundForward
					className={`text-3xl text-[#1D158C]
				        absolute bottom-2.5 right-3.5
				        ${visible ? "visible" : "invisible"}
			        `}
				/>
			</div>
		</Link>
	);
};

export default GroupCard;
