import { useNavigate } from "react-router-dom";

type ButtonProps = {
	label: string;
	height: number;
	width: number;
	onClick: () => void;
	radius?: number;
};
const Button = ({ label, height, width, onClick, radius }: ButtonProps) => {
	const navigate = useNavigate();
	return (
		<button
			type="button"
			style={{ height, width }}
			onClick={() => navigate("/home")}
			className={`
		      outline-none text-lg bg-black text-white
		      ${radius ? `rounded-[${radius}px]` : "rounded-lg"} font-medium
		      hover:shadow-lg hover:shadow-gray-600
		      hover:cursor-pointer
	      `}
		>
			{label}
		</button>
	);
};

export default Button;
