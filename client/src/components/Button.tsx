type ButtonProps = {
  label: string;
  height: number;
  width: number;
  onClick: () => void;
};
const Button = ({ label, height, width, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ height, width }}
      onClick={onClick}
      className="
      outline-none
      text-lg
      bg-btn text-white rounded-[10px] font-medium
      hover:shadow-lg
      hover:shadow-btn
      hover:cursor-pointer
      "
    >
      {label}
    </button>
  );
};

export default Button;
