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
      bg-btn text-white rounded-[5px] font-medium
      hover:shadow-btn
      hover:cursor-pointer
      hover:bg-btn-hover
      "
    >
      {label}
    </button>
  );
};

export default Button;
