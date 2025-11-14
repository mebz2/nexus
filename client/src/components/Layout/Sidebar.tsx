import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="w-full bg-white box-border p-2.5 pl-6 border-r border-[#EBEBEB] ">
			<div className="bg-white w-fit flex mb-2.5">
				<Link to="/home">
					<h1 className="m-0 hover:cursor-pointer">nexus</h1>
				</Link>
			</div>
			<ul className="flex flex-col gap-6">
				<li>
					<Link to="/home" className="font-semibold">
						Home
					</Link>
				</li>
				<li>
					<Link to="/settings" className="font-semibold">
						Settings
					</Link>
				</li>
				<li className="flex flex-col  gap-3">
					<Link to="/groups" className="font-semibold">
						Groups
					</Link>
					<ul className="flex flex-col pl-3 gap-3">
						<li>Your Groups</li>
						<li>Public Groups</li>
					</ul>
				</li>
				<li>
					<Link to="/archive" className="font-semibold">
						Archive
					</Link>
				</li>
				<li className="flex flex-col  gap-3">
					<Link to="/calendar" className="font-semibold">
						Calendar
					</Link>
					<ul className="flex flex-col pl-3 gap-3">
						<li>Private</li>
						<li>Group</li>
					</ul>
				</li>
				<li>
					<Link to="/inbox" className="font-semibold">
						Inbox
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;
