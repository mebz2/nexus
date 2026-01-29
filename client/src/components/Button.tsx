import { useNavigate } from "react-router-dom";

type ButtonProps = {
	label: string;
	onClick: () => void;
	radius?: number;
};
const Button = ({ label, radius }: ButtonProps) => {
	const navigate = useNavigate();
	return (
		<button
			type="button"
			onClick={() => navigate("/home")}
			className={`
			  w-full h-full
		      outline-none text-lg bg-(--primary-color) text-white
		      ${radius ? `rounded-[${radius}px]` : "rounded-lg"} font-medium
		      hover:shadow-lg hover:shadow-gray-600 hover:font-bold
		      hover:cursor-pointer
	      `}
		>
			{label}
		</button>
	);
};

export default Button;
