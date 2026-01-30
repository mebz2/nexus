import React, { useState } from 'react';
import { Layout } from "@/components";
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: ''
	});

	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(''); // Clear error when user types
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.newPassword !== formData.confirmPassword) {
			setError("New passwords do not match.");
			return;
		}

		if (formData.newPassword.length < 8) {
			setError("Password must be at least 8 characters long.");
			return;
		}

		console.log("Submit to Backend:", formData);
		alert("Password updated successfully!");
	};

	return (
		<Layout>
			<div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
				<div className="mb-8 text-center">
					<h1 className="text-2xl font-bold text-gray-900">Change Password</h1>
					<p className="text-gray-500 text-sm mt-2">
						Ensure your account is using a long, random password to stay secure.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Current Password */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Current Password
						</label>
						<input
							type="password"
							name="currentPassword"
							required
							value={formData.currentPassword}
							onChange={handleChange}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
							placeholder="••••••••"
						/>
					</div>

					<hr className="border-gray-100" />

					{/* New Password */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							New Password
						</label>
						<input
							type="password"
							name="newPassword"
							required
							value={formData.newPassword}
							onChange={handleChange}
							className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary'
								}`}
							placeholder="••••••••"
						/>
					</div>

					{/* Confirm Password */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Confirm New Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							required
							value={formData.confirmPassword}
							onChange={handleChange}
							className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary'
								}`}
							placeholder="••••••••"
						/>
					</div>

					{/* Error Message */}
					{error && (
						<p className="text-red-500 text-xs font-medium animate-pulse">
							{error}
						</p>
					)}

					{/* Action Buttons */}
					<div className="flex flex-col gap-3 pt-4">
						<button
							type="submit"
							className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:shadow-lg cursor-pointer transition duration-200"
						>
							Update Password
						</button>
						<button
							type="button"
							className="w-full bg-gray-50 text-gray-600 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition duration-200"
							onClick={() => { navigate("/settings") }}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default ChangePassword;
