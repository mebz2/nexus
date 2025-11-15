import { Card, Activity, Layout } from "../../components";
import { MockActivities } from "../../mocks";
import { FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidArchiveIn } from "react-icons/bi";

export default function Dashboard() {
	return (
		<Layout path="Home">
			{/*content*/}
			<div className="flex flex-col p-20 items-center h-full">
				{/*welcome back message*/}
				<div className=" flex w-[80%]">
					<h1 className="text-[#6B6875]">Welcome back,</h1>{" "}
					<h1 className="ml-2"> Name!</h1>
				</div>

				{/*card container*/}
				<div
					className="
					flex  flex-col md:flex-row mt-10  mb-5 items-center
					justify-between overflow-y-scroll h-[500px] w-full
					md:h-[20%] md:overflow-y-hidden md:w-[80%] "
				>
					<Card
						path="/groups"
						id="groups"
						label="Groups"
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
						path="/inbox"
						id="inbox"
						label="Inbox"
						Icon={IoMdMail}
					/>
				</div>

				{/*recent activities*/}
				<div
					className="
						h-full w-full
						md:h-[50%] md:w-[80%] rounded-2xl bg-white
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
