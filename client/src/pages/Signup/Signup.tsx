import { Link } from "react-router-dom";
import { Textfield, Button, FormHeader } from "@/components";
import { useState } from "react";

const handleClick = async () => {
	try {
		const response = await fetch("/api/auth/signup", {
			method: "POST",
			headers: {
				'Content-Type': "application/json"
			},
			body: JSON.stringify({
				username: "john",
				email: "john@example.com",
				password: "12345"
			})

		});
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.error('Error fetching /api/auth/signup', err);
	}
};

function Signup() {

	// to store form data
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	// to store errors if any
	const [error, setError] = useState('');

	// to handle changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(''); // Clear error when user types
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (formData.password.length < 8) {
			setError("Password must be at least 8 characters long.");
			return;
		}
	};


	return (
		<div
			className="flex justify-center items-center
			h-screen bg-white"
		>
			{/*Singup Container*/}
			<div
				className={`
				w-full md:w-[50%] lg:w-[25%]  lg:shadow-2xl 
				${error ? 'border-red-500 lg:shadow-red-300' : 'lg:shadow-gray-400 lg:border lg:border-border'}
				lg:rounded-[10px] h-fit `}
			>
				{/*form header*/}
				<FormHeader
					header="Create Your Account"
					message="Enter your details to get started with nexus"
				/>
				{/*form container*/}
				<form
					className="h-full flex flex-col items-center
					p-9 gap-7 bg-white lg:rounded-b-[10px]"
					onSubmit={handleSubmit}
				>
					<Textfield
						onChange={handleChange}
						id="username"
						label="Username"
						name="username"
						type="text"
						placeholder="John"
						errorId="username-error"
					/>
					<Textfield
						onChange={handleChange}
						id="email"
						label="Email"
						name="email"
						type="email"
						placeholder="example@gmail.com"
						errorId="email-error"
					/>
					<Textfield
						onChange={handleChange}
						id="password"
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
						errorId="password-error"
					/>
					<Textfield
						onChange={handleChange}
						id="cpassword"
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						placeholder="Confirm your password"
						errorId="cpassword-error"
					/>

					<p className="text-red-500 text-xs font-medium animate-pulse">{error}</p>
					<div
						className="
						w-full h-10"
					>
						<Button label="Create Account" onClick={handleClick} type="submit" />
					</div>
					<p>
						Already have an account?{" "}
						<Link to="/login" className="text-btn">
							Sign in here
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Signup;
