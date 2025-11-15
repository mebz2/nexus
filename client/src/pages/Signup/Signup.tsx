import { Link } from "react-router-dom";
import { Textfield, Button, FormHeader } from "../../components";

const handleClick = () => {
	console.log("hello");
};

function Signup() {
	return (
		<div
			className="flex justify-center items-center
			h-screen bg-[#EEEFF1]"
		>
			{/*Singup Container*/}
			<div
				className="
				w-full md:w-[50%] lg:w-[25%]  shadow-2xl shadow-gray-400
				border border-border rounded-[10px] h-fit "
			>
				{/*form header*/}
				<FormHeader
					header="Create Your Account"
					message="Enter your details to get started with nexus"
				/>
				{/*form container*/}
				<div
					className="h-full flex flex-col items-center
					p-9 gap-7 bg-white rounded-b-[10px]"
				>
					<Textfield
						id="username"
						label="Username"
						type="text"
						placeholder="John"
						errorId="username-error"
					/>
					<Textfield
						id="email"
						label="Email"
						type="email"
						placeholder="example@gmail.com"
						errorId="email-error"
					/>
					<Textfield
						id="password"
						label="Password"
						type="password"
						placeholder="Enter your password"
						errorId="password-error"
					/>
					<Textfield
						id="cpassword"
						label="Confirm Password"
						type="password"
						placeholder="Confirm your password"
						errorId="cpassword-error"
					/>

					<Link to="/home">
						<Button
							label="Create Account"
							height={45}
							width={403}
							onClick={handleClick}
						/>
					</Link>
					<p>
						Already have an account?{" "}
						<Link to="/login" className="text-btn">
							Sign in here
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;
