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
	          bg-white flex flex-col justify-center items-center
	          h-64 w-72 rounded-[10px] shadow-sm
	          hover:shadow-xl hover:cursor-pointer
	          relative border border-border"
		>
			<Icon className="text-7xl text-black" />
			<h2 className="text-[#6B6875]">{label}</h2>
			<IoMdArrowRoundForward
				size={30}
				className={`text-black absolute bottom-2.5 right-4.5
            ${visible ? "visible" : "invisible"}`}
			/>
		</div>
	);
};
export default Card;
