type ButtonProps = {
  label: string;
  active: string;

  setActive: React.Dispatch<React.SetStateAction<string>>;
};
const NavbarButton = ({ label, active, setActive }: ButtonProps) => {
  return (
    <div
      onClick={() => setActive(label)}
      className={`w-[200px] h-8
              rounded-[5px] flex justify-center
              items-center ${
                active == label
                  ? "bg-[#9B97FF] text-white hover:text-white hover:bg-[#9B97FF] text-[13px]"
                  : "bg-[#F3F3FF] text-black hover:bg-amber-50 text-xs"
              }
              hover:text-black
              hover:cursor-pointer`}
    >
      <p className="">{label}</p>
    </div>
  );
};

export default NavbarButton;
