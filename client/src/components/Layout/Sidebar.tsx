import { useNavigate } from "react-router-dom";

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div className="hidden lg:block w-full bg-white box-border p-2.5 pl-6 border-r border-[#EBEBEB] ">
			<div
				className="bg-white w-fit flex mb-2.5"
				onClick={() => navigate("/home")}
			>
				<h1 className="m-0 hover:cursor-pointer">nexus</h1>
			</div>
			<ul className="flex flex-col gap-6">
				<li
					className="text-[#797E87] hover:cursor-pointer hover:text-black font-semibold"
					onClick={() => navigate("/home")}
				>
					Dashboard
				</li>
				<li
					className="text-[#797E87] hover:cursor-pointer hover:text-black font-semibold"
					onClick={() => navigate("/settings")}
				>
					Settings
				</li>
				<li className="flex flex-col gap-3 text-[#797E87] hover:cursor-pointer ">
					<div
						onClick={() => navigate("/groups")}
						className="font-semibold w-full hover:text-black"
					>
						Groups
					</div>
					<ul className="flex flex-col pl-3 gap-3">
						<li
							className="flex hover:text-black"
							onClick={() => navigate("/groups")}
						>
							Your Groups
						</li>
						<li
							className="flex hover:text-black"
							onClick={() => navigate("/groups")}
						>
							Public Groups
						</li>
					</ul>
				</li>
				<li
					className="text-[#797E87] hover:cursor-pointer hover:text-black font-semibold"
					onClick={() => navigate("/archive")}
				>
					Archive
				</li>
				<li
					onClick={() => navigate("/calendar")}
					className="flex flex-col text-[#797E87] gap-3 hover:cursor-pointer "
				>
					<div
						className="hover:text-black w-full"
						onClick={() => navigate("/calendar")}
					>
						Calendar
					</div>
					<ul className="flex flex-col pl-3 gap-3">
						<li
							className="flex hover:text-black"
							onClick={() => navigate("/calendar")}
						>
							Private
						</li>
						<li
							onClick={() => navigate("/calendar")}
							className="flex hover:text-black"
						>
							Group
						</li>
					</ul>
				</li>
				<li
					className="text-[#797E87] hover:cursor-pointer hover:text-black font-semibold "
					onClick={() => navigate("/inbox")}
				>
					Inbox
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;
