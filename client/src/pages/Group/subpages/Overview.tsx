import { Activity, OverviewBtn } from "@/components";
import { IoMdCloudUpload, IoMdPersonAdd, IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MockActivities } from "@/mocks";

const Overview = () => {
	return (
		<div className="w-full h-210 overflow-y-auto">
			<div className="w-full flex p-5 box-border gap-5 justify-center ">

				{/* Quick Actions */}
				<div
					className="h-[330px] w-[500px] border  flex flex-col
					border-border rounded-lg p-5 box-border gap-8 shadow-xl"
				>
					<p className="font-semibold text-lg text-primary">Quick Actions</p>

					<OverviewBtn
						Icon={IoMdCloudUpload}
						label="Upload Files"
						path="addfile"
					/>

					<OverviewBtn
						Icon={IoMdPersonAdd}
						label="Add Member"
						path="invite-member"
					/>

					<OverviewBtn
						Icon={IoMdSettings}
						label="Settings"
						path="settings"
					/>

				</div>

				{ /* group description */}
				<div
					className="h-[330px] w-[700px] border
					border-border rounded-lg p-10 box-border shadow-xl
					flex flex-col gap-10
					"
				>
					<p className="line-clamp-3">
						Weekly calculus problem solving sessions.  We focus on derivatives, integrals, and real
						world applications This is the group description This is the group description This is the group description
						This is the group descriptionThis is the group descriptionThis is the group descriptionThis is the group descriptionThis is the group descriptionThis is the group descriptionThis is
						the group description
					</p>

					<p className="flex items-center gap-5">
						<FaUser />
						8 Members
					</p>
				</div>

			</div>

			<div
				className="
						h-fit w-fit bg-amber-50
						md:h-[50%] md:w-[75%] rounded-2xl md:bg-white
						md:border-2  md:border-border mx-auto
						pl-10 pb-5 pt-2.5 hover:shadow-xl"
			>
				<p className=" text-lg font-bold md:text-2xl md:font-bold xl:text-3xl text-black">
					Recent Group Activities
				</p>
				<p className="text-xs text-[#6B6875] font-medium">
					Stay updated with group activities
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
	);
};

export default Overview;
