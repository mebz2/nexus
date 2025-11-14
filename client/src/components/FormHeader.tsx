type FormHeaderProps = {
	header: string;
	message: string;
};
const FormHeader = ({ header, message }: FormHeaderProps) => {
	return (
		<div
			className=" p-2.5 bg-white h-[25%] w-full flex flex-col
			justify-center items-center rounded-t-[10px]"
		>
			<h1 className="">nexus</h1>
			<h2 className="">{header}</h2>
			<p className=" text-xs">{message}</p>
		</div>
	);
};
// login-gradient
export default FormHeader;
