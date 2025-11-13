import { Card, Activity, Layout } from "../../components";
import { MockActivities } from "../../mocks";
import { FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidArchiveIn } from "react-icons/bi";

export default function Dashboard() {
	return (
		<Layout>
			{/*content*/}
			<div className="flex flex-col p-20 items-center h-full">
				{/*welcome back message*/}
				<div className=" flex w-[80%]">
					<h1 className="text-[#6B6875]">Welcome back,</h1>{" "}
					<h1 className="ml-2"> Name!</h1>
				</div>

				{/*card container*/}
				<div
					className="flex  mt-10  mb-5 items-center
					justify-between h-[20%] w-[80%] "
				>
					<Card
						path="/groups"
						id="study-groups"
						label="Study Groups"
						Icon={FaUsers}
					/>

					<Card
						path="/archive"
						id="archive"
						label="Archive"
						Icon={BiSolidArchiveIn}
					/>
					<Card
						path="/archive"
						id="calendar"
						label="Calendar"
						Icon={FaCalendarCheck}
					/>
					<Card
						path="/archive"
						id="inbox"
						label="Inbox"
						Icon={IoMdMail}
					/>
				</div>

				{/*recent activities*/}
				<div
					className="
						h-[50%] w-[80%] rounded-2xl bg-white
						border-2  border-border
						pl-10 pb-5 pt-2.5 hover:shadow-xl"
				>
					<h1 className=" text-black">Recent Activities</h1>
					<p className="text-sm text-[#6B6875] font-medium">
						Stay updated with your activities
					</p>
					{MockActivities.slice(0, 4).map((activity) => {
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
		</Layout>
	);
}
