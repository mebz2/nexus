type FormHeaderProps = {
  header: string;
  message: string;
};
const FormHeader = ({ header, message }: FormHeaderProps) => {
  return (
    <div className="login-gradient h-[152px] flex flex-col justify-center items-center rounded-t-[10px]">
      <h1 className="text-white">nexus</h1>
      <h2 className="text-white">{header}</h2>
      <p className="text-white text-xs">{message}</p>
    </div>
  );
};

export default FormHeader;
