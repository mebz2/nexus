import { IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

type CardProps = {
	id: string;
	label: string;
	Icon: IconType;
	path: string;
};

const Card = ({ id, label, Icon, path }: CardProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<Link
			to={path}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			id={id}
			className="no-underline text-inherit w-[23%]
				bg-white h-[60%] shadow-sm hover:shadow-xl rounded-[10px]
				flex  justify-center items-center hover:cursor-pointer border border-border gap-[10%]"
		>
			<Icon className="hidden lg:block text-[120%] text-black" />
			<p className="text-[110%] font-semibold text-black">{label}</p>
			<IoMdArrowRoundForward
				className={`text-black text-[100%]
            ${visible ? "visible" : "invisible"}`}
			/>
		</Link>
	);
};
export default Card;
