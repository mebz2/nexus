import { BiSolidArchiveIn } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Activity, Card, Layout } from "@/components";
import { MockActivities } from "@/mocks";
import { useEffect, useState } from "react";

type User = {
	_id: string,
	username: string,
	email: string
};
export default function Home() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	//
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch("/api/auth/me", {
					credentials: "include",
				});

				if (!res.ok) {
					setUser(null);
					return;
				}

				const data: { user: User } = await res.json();
				setUser(data.user);
			} catch (err) {
				setUser(null);
			} finally {
				setLoading(false)
			}
		};

		fetchUser();
	}, [])

	if (loading) return <p>Loading...</p>
	if (!user) return <p>Not logged in</p>

	return (
		<Layout>
			{/*content*/}
			<div className="flex flex-col items-start p-20 md:items-center  ">
				{/*welcome back message*/}
				<div className=" flex sm:justify-start w-full md:w-[80%]">
					<h1 className="text-[#6B6875]">Welcome,</h1>{" "}
					<h1 className="ml-2"> {user.username}!</h1>
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
