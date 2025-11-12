import { Activity, Navbar, Card } from "./components";
import { MockActivities } from "../../mocks";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidArchiveIn } from "react-icons/bi";

export default function Dashboard() {
	return (
		<div className="bg-[#ECEDEF] h-screen">
			{/*nav bar*/}
			<Navbar />
			<div className="flex flex-col  p-20 items-center ">
				{/*welcome back message*/}
				<div className=" flex w-[80%]">
					<h1 className="text-[#6B6875]">Welcome back,</h1>{" "}
					<h1 className="ml-2"> Name!</h1>
				</div>

				{/*cards*/}
				<div className="flex w-[80%] mt-10 h-80 items-center justify-between">
					<Link to="/groups">
						<Card
							id="study-groups"
							label="Study Groups"
							Icon={FaUsers}
						/>
					</Link>
					<Card
						id="archive"
						label="Archive"
						Icon={BiSolidArchiveIn}
					/>
					<Card
						id="calendar"
						label="Calendar"
						Icon={FaCalendarCheck}
					/>
					<Card id="inbox" label="Inbox" Icon={IoMdMail} />
				</div>

				{/*recent activities*/}
				<div
					className="
						h-full  w-[80%] rounded-2xl bg-white
						border-2  border-[#E0E1E3]
						pl-10 pb-5 pt-2.5 hover:shadow-xl"
				>
					<h1 className=" text-neutral-600">Recent Activities</h1>
					<p className="text-sm text-[#6B6875] font-medium">
						Stay updated with your activities
					</p>
					{MockActivities.slice(0, 3).map((activity) => {
						return (
							<Activity
								key={activity.id}
								name={activity.name}
								timestamp={activity.timestamp}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
