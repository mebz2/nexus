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
      outline-none
      text-lg
      bg-btn text-white ${radius ? `rounded-[${radius}px]` : "rounded-[8px]"} font-medium
      hover:shadow-lg
      hover:shadow-btn
      hover:cursor-pointer
      `}
    >
      {label}
    </button>
  );
};

export default Button;
