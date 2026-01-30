import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { PiGearSixFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { BiSolidGroup, BiSolidArchiveIn } from "react-icons/bi";
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
					<SideBarBtn label="Home" Icon={MdHome} path="/home" />
				</li>

				<li>
					<SideBarBtn label="Inbox" Icon={IoMdMail} path="/inbox" />
				</li>

				<li>
					<SideBarBtn
						label="Archive"
						Icon={BiSolidArchiveIn}
						path="/archive"
					/>
				</li>

				<li className="flex flex-col gap-3 text-[#797E87] hover:cursor-pointer ">
					<SideBarBtn
						label="Groups"
						Icon={BiSolidGroup}
						path="/groups"
					/>
				</li>

				<li>
					<SideBarBtn
						label="Settings"
						Icon={PiGearSixFill}
						path="/settings"
					/>
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;
