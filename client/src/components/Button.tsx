type ButtonProps = {
	label: string;
	height: number;
	width: number;
	onClick: () => void;
	radius?: number;
};
const Button = ({ label, height, width, onClick, radius }: ButtonProps) => {
	return (
		<button
			type="button"
			style={{ height, width }}
			onClick={onClick}
			className={`
		      outline-none text-lg bg-black text-white
		      ${radius ? `rounded-[${radius}px]` : "rounded-lg"} font-medium
		      hover:shadow-xl hover:shadow-black/25
		      hover:cursor-pointer
	      `}
		>
			{label}
		</button>
	);
};

export default Button;
