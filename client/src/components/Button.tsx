
type ButtonProps = {
	type: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
	radius?: number;
};
const Button = ({ label, radius, onClick, type }: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick ? onClick : undefined}
			className={`
			  w-full h-full
		      outline-none text-lg bg-(--primary-color) text-white
		      ${radius ? `rounded-[${radius}px]` : "rounded-lg"} font-medium
		      hover:shadow-lg hover:shadow-gray-600 hover:font-bold
		      hover:cursor-pointer
	      `}
		>
			{label}
		</button >
	);
};

export default Button;
