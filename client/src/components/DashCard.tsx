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
			className="
				flex justify-center items-center
				no-underline w-full h-[23%]  md:w-[23%] bg-white md:h-[60%]
				shadow-sm hover:shadow-xl rounded-[10px]
				hover:cursor-pointer border
				border-border gap-[10%]"
		>
			<Icon className="hidden text-[100%] lg:block lg:text-[120%] text-black" />
			<p className="text-[110%] font-semibold text-black">{label}</p>
			<IoMdArrowRoundForward
				className={`sm:hidden text-black md:block md:text-[70%]  lg:block lg:text-[100%]
            ${visible ? "visible" : "invisible"}`}
			/>
		</Link>
	);
};
export default Card;
