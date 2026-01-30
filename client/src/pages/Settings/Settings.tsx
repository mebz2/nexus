
import { Layout, Popup, Textfield } from "@/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
	const navigate = useNavigate();
	const [deletePopup, setDeletePopup] = useState<boolean>(false);
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
								{/* <label className="block text-sm font-medium text-gray-700 mb-1">Username</label> */}
								<div className="flex gap-2">
									<Textfield
										id="username"
										errorId="username-error"
										placeholder="username"
										label="username"
										type="text"
									/>
									<button className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:shadow-lg
									hover:font-bold transition cursor-pointer self-end h-10">
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
							onClick={() => { navigate("/settings/change-password") }}
						>
							Change Password
						</button>
					</section>

					{/* Actions Section */}
					<section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
						<h2 className="text-lg font-semibold mb-4 text-gray-900">Account Actions</h2>
						<div className="flex flex-col md:flex-row gap-4">
							<button
								className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 
								cursor-pointer transition"
								onClick={() => console.log("Logging out...")}
							>
								Log Out
							</button>
							<button
								className="flex-1 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm font-medium 
								cursor-pointer hover:bg-red-100 transition"
								onClick={() => { setDeletePopup(true) }}
							>
								Delete Account
							</button>
						</div>
					</section>

				</div>
				<Popup trigger={deletePopup} setTrigger={setDeletePopup}>
					<p>Are you sure you want to delete your account?</p>
					<button className="self-end border w-[15%] p-1 mt-2 rounded-sm 
				bg-primary text-white cursor-pointer hover:font-bold">
						Yes
					</button>
				</Popup>

			</div>

		</Layout>
	);
}
export default Settings;

