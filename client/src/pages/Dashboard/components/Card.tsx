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
          card-gradient flex flex-col justify-center items-center
          h-64 w-72 rounded-[10px] shadow-sm shadow-[#4C23FF]/15
          hover:shadow-xl hover:shadow-[#4C23FF]/20 hover:cursor-pointer
          relative border-t-2 border-border"
		>
			<Icon className="text-7xl text-[#8B68FF]" />
			<h2 className="text-[#6B6875]">{label}</h2>
			<IoMdArrowRoundForward
				size={30}
				className={`text-[#1D158C] absolute bottom-2.5 right-4.5
            ${visible ? "visible" : "invisible"}`}
			/>
		</div>
	);
};
export default Card;
