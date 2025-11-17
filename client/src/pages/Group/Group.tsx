import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, GroupButton } from "../../components";

export default function Group() {
	const [active, setActive] = useState<string>("Overview");
	return (
		<Layout>
			{/*content*/}
			<div className="flex min-h-screen flex-col items-center">
				{/*navbar*/}
				<div
					className="
					w-[60%] h-[3.3%] mt-2.5 bg-[#F3F3FF]
					grid grid-cols-4
					rounded-lg"
				>
					<GroupButton
						path="/group"
						label="Overview"
						active={active}
						setActive={setActive}
					/>
					<GroupButton
						path="/group/files"
						label="Files"
						active={active}
						setActive={setActive}
					/>
					<GroupButton
						path="/group/tasks"
						label="Tasks"
						active={active}
						setActive={setActive}
					/>
					<GroupButton
						path="/group/members"
						label="Members"
						active={active}
						setActive={setActive}
					/>
				</div>

				<Outlet />
			</div>
		</Layout>
	);
}
