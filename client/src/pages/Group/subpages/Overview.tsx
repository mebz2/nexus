import { OverviewBtn } from "@/components";
import { IoMdCloudUpload, IoMdPersonAdd, IoMdSettings } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
const Overview = () => {
	return (
		<div className="w-full h-210 overflow-y-auto">
			<div className="w-full flex p-5 box-border gap-5 justify-center">

				{/* Quick Actions */}
				<div
					className="h-[330px] w-[500px] border  flex flex-col
					border-border rounded-lg p-5 box-border gap-4 shadow-xl"
				>
					<p className="font-semibold text-lg text-primary">Quick Actions</p>

					<OverviewBtn
						Icon={IoMdCloudUpload}
						label="Upload Files"
					/>

					<OverviewBtn
						Icon={MdOutlineAdd}
						label="Add Task"
					/>

					<OverviewBtn
						Icon={IoMdPersonAdd}
						label="Add Member"
					/>

					<OverviewBtn
						Icon={IoMdSettings}
						label="Settings"
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
		</div>
	);
};

export default Overview;
