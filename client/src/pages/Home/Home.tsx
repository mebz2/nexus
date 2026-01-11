import { BiSolidArchiveIn } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Activity, Card, Layout } from "../../components";
import { MockActivities } from "../../mocks";

export default function Home() {
	return (
		<Layout>
			{/*content*/}
			<div className="flex flex-col items-start p-20 md:items-center  ">
				{/*welcome back message*/}
				<div className=" flex sm:justify-start w-full md:w-[80%]">
					<h1 className="text-[#6B6875]">Welcome back,</h1>{" "}
					<h1 className="ml-2"> Name!</h1>
				</div>

				{/*card container*/}
				<div
					className="
					flex  flex-col  items-center justify-between mb-5
					md:flex-row mt-10 overflow-y-auto h-[500px] w-full
					md:h-[150px] md:w-[80%] "
				>
					<Card path="/groups" id="groups" label="Groups" Icon={FaUsers} />

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
					<Card path="/inbox" id="inbox" label="Inbox" Icon={IoMdMail} />
				</div>

				{/*recent activities*/}
				<div
					className="
						h-fit w-fit bg-amber-50
						md:h-full md:w-[80%] rounded-2xl md:bg-white
						md:border-2  md:border-border
						pl-10 pb-5 pt-2.5 hover:shadow-xl"
				>
					<p className=" text-lg font-bold md:text-2xl md:font-bold xl:text-3xl text-black">
						Recent Activities
					</p>
					<p className="text-xs text-[#6B6875] font-medium">
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
