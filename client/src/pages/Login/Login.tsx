import { Link, useNavigate } from "react-router-dom";
import { Textfield, Button, FormHeader } from "@/components";
import { useState } from "react";



function Login() {
	const navigate = useNavigate();
	// to store form data
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// to store errors if any
	const [error, setError] = useState('');

	// to handle changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(''); // Clear error when user types
	};


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.email.length) {
			setError('Email is required');
			return;
		}

		if (!formData.password.length) {
			setError('Password is required');
			return;
		}

		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					password: formData.password
				}),
			})

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || 'Login Failed');
				return;
			}

			navigate("/home")

		} catch (err) {
			console.error(err);
			setError("Something went wrong try again");
		}
	}


	return (
		// div for the screen
		<div
			className="flex flex-col justify-center items-center
			h-screen bg-white"
		>
			{/*Login Container*/}
			<div
				className={`
				w-full md:w-[50%]
				lg:w-[25%] lg:border 
				${error ? 'border-none lg:shadow-red-300 ' : 'lg:shadow-gray-400 lg:border lg:border-border'}
				lg:rounded-[10px] lg:shadow-2xl  h-fit bg-white
				`}
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
					onSubmit={handleSubmit}
				>
					{/*email text field*/}
					<Textfield
						id="email"
						name="email"
						label="Email"
						type="email"
						placeholder="example@gmail.com"
						errorId="email-error"
						onChange={handleChange}
					/>

					{/*password text field*/}
					<Textfield
						id="password"
						name="password"
						label="Password"
						type="password"
						placeholder="Enter your password"
						errorId="password-error"
						onChange={handleChange}
					/>

					<p className="text-red-500 text-xs font-medium animate-pulse">{error}</p>
					{/*login button*/}
					<div
						className="
						w-full h-10"
					>
						<Button label="Login" type="submit" />
					</div>
					<p>
						Don't have an account?{" "}
						<Link to="/signup" className="text-btn">
							Create one here
						</Link>
					</p>
				</form>
			</div>


		</div>
	);
}

export default Login;

