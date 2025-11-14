import { Link } from "react-router-dom";
import { Textfield, Button, FormHeader } from "../../components";

const handleClick = () => {
	console.log("clicked");
};

function Login() {
	return (
		// div for the screen
		<div
			className="flex flex-col justify-center items-center
			h-screen bg-[#EEEFF1]"
		>
			{/*Login Container*/}
			<div
				className="
				w-[25%] border border-border
				rounded-[10px] shadow-2xl shadow-gray-400 h-fit
				bg-white
				"
			>
				{/*form header container*/}
				<FormHeader
					header="Welcome Back"
					message="Enter your credentials to access your account"
				/>
				{/*form container*/}
				<div
					className="
					bg-white flex flex-col items-center
					p-9 gap-7 rounded-b-[10px]"
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
					<Link to="/home">
						<Button
							label="Login"
							height={45}
							width={403}
							onClick={handleClick}
						/>
					</Link>

					<p>
						Don't have an account?{" "}
						<Link to="/signup" className="text-btn">
							Create one here
						</Link>
					</p>
				</div>
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

// className="w-[491px] border border-border
