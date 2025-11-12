import { IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import type { IconType } from "react-icons";

type CardProps = {
	id: string;
	label: string;
	Icon: IconType;
};

const Card = ({ id, label, Icon }: CardProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			id={id}
			className="
	          bg-white flex  justify-center items-center
	          h-full w-full rounded-[10px]
	           hover:cursor-pointer
	          border border-border gap-[10%]
			  "
		>
			<Icon className="text-[120%] text-black" />
			<p className="text-[110%] font-semibold text-black">{label}</p>
			<IoMdArrowRoundForward
				className={`text-black text-[100%]
            ${visible ? "visible" : "invisible"}`}
			/>
		</div>
	);
};
export default Card;
