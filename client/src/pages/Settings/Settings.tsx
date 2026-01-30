// import { useEffect, useState } from "react";
// import { Layout } from "@/components";

import { Layout } from "@/components";

// import { MdModeEdit } from "react-icons/md";
function Settings() {
	return (
		<Layout>
			<div className="max-w-2xl mx-auto p-6 md:p-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

				<div className="space-y-8">

					{/* Profile Section */}
					<section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<h2 className="text-lg font-semibold mb-4">Profile Information</h2>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
								<div className="flex gap-2">
									<input
										type="text"
										value="username"
										// onChange={(e) => setUsername(e.target.value)}
										className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
									/>
									<button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
										Save
									</button>
								</div>
							</div>
						</div>
					</section>

					{/* Security Section */}
					<section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<h2 className="text-lg font-semibold mb-4">Security</h2>
						<button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md 
										text-sm font-medium hover:bg-gray-50 transition cursor-pointer"
						>
							Change Password
						</button>
					</section>

					{/* Actions Section */}
					<section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<h2 className="text-lg font-semibold mb-4 text-gray-900">Account Actions</h2>
						<div className="flex flex-col md:flex-row gap-4">
							<button
								className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition"
								onClick={() => alert("Logging out...")}
							>
								Log Out
							</button>
							<button
								className="flex-1 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm font-medium hover:bg-red-100 transition"
								onClick={() => alert("Are you sure you want to delete your account?")}
							>
								Delete Account
							</button>
						</div>
					</section>

				</div>
			</div>
		</Layout>
	);
}
export default Settings;
