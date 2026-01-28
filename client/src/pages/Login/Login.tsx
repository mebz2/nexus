import { Link } from "react-router-dom";
import { Textfield, Button, FormHeader } from "@/components";

const handleClick = () => {
	console.log("clicked");
};

function Login() {
	return (
		// div for the screen
		<div
			className="flex flex-col justify-center items-center
			h-screen bg-white"
		>
			{/*Login Container*/}
			<div
				className="
				w-full md:w-[50%]
				lg:w-[25%] lg:border lg:border-border
				lg:rounded-[10px] lg:shadow-2xl lg:shadow-gray-400 h-fit
				bg-white
				"
			>
				{/*form header container*/}
				<FormHeader
					header="Welcome Back"
					message="Enter your credentials to access your account"
				/>
				{/*form container*/}
				<form
					className="
					bg-white flex flex-col items-center
					p-9 gap-7 lg:rounded-b-[10px]"
				>
					{/*email text field*/}
					<Textfield
						id="email"
						label="Email"
						type="email"
						placeholder="example@gmail.com"
						errorId="email-error"
					/>

					{/*password text field*/}
					<Textfield
						id="password"
						label="Password"
						type="password"
						placeholder="Enter your password"
						errorId="password-error"
					/>

					{/*login button*/}
					<div
						className="
						w-full h-10"
					>
						<Button label="Login" onClick={handleClick} />
					</div>
					<p>
						Don't have an account?{" "}
						<Link to="/signup" className="text-btn">
							Create one here
						</Link>
					</p>
				</form>
			</div>

			<div
				className="
			        h-20 w-[400px] border border-red-400 mt-2.5
			        rounded-[10px]
			        p-3.5 bg-red-100
			        invisible
		        "
			>
				<p className="text-red-700">error</p>
			</div>
		</div>
	);
}

export default Login;

