import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="w-full bg-white box-border p-2.5 border-r border-[#EBEBEB] ">
			<div className="bg-white w-fit flex">
				<Link to="/home">
					<h1 className="m-0 hover:cursor-pointer">nexus</h1>
				</Link>
			</div>
			<ul className="list-disc pl-6 ">
				<li>
					one
					<ul className="pl-3 list-disc">
						<li>two</li>
						<li>two</li>
						<li>two</li>
					</ul>
				</li>
				<li>one</li>
				<li>one</li>
				<li>one</li>
				<li>one</li>
			</ul>
		</div>
	);
};
export default Sidebar;
