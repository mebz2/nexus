import { useNavigate } from "react-router-dom";
import SideBarBtn from "../SideBarBtn";

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div className="hidden md:block lg:block w-full bg-white box-border p-2.5 pl-6 border-r border-[#EBEBEB] ">
			<div
				className="bg-white w-fit flex mb-2.5"
				onClick={() => navigate("/home")}
			>
				<h1 className="mb-3 hover:cursor-pointer">nexus</h1>
			</div>
			<ul className="flex flex-col gap-6">
				<li>
					<SideBarBtn label="Dashboard" path="/dashboard" />
				</li>
				<li>
					<SideBarBtn label="Account Settings" path="/settings" />
				</li>
				<li className="flex flex-col gap-3 text-[#797E87] hover:cursor-pointer ">
					<SideBarBtn label="Groups" path="/groups" />
					<ul className="flex flex-col pl-3 gap-3">
						<li>
							<SideBarBtn label="Your Groups" path="" />
						</li>
						<li>
							<SideBarBtn label="Public Groups" path="" />
						</li>
					</ul>
				</li>
				<li>
					<SideBarBtn label="Archive" path="/archive" />
				</li>
				<li className="flex flex-col text-[#797E87] gap-3 hover:cursor-pointer ">
					<SideBarBtn label="Calendar" path="/calendar" />
					<ul className="flex flex-col pl-3 gap-3">
						<li>
							<SideBarBtn label="Private Calendar" path="" />
						</li>
						<li>
							<SideBarBtn label="Group" path="" />
						</li>
					</ul>
				</li>
				<li>
					<SideBarBtn label="Inbox" path="/inbox" />
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;
