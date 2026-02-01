import { Activity, useEffect, useState, } from "react";
import Sidebar from "./Sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";

type User = {
	_id: string;
	username: string;
	email: string;
};

function Layout() {
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch("/api/auth/me", {
					credentials: "include",
				});

				if (!res.ok) {
					setUser(null);
					navigate("/login")
					return;
				}

				const data: { user: User } = await res.json();
				setUser(data.user);
			} catch (err) {
				setUser(null);
			}
		};

		fetchUser();
	}, []);

	if (!user) return <p>fetching user</p>;
	return (
		<div className="grid grid-cols-[1fr_7fr] bg-white min-h-screen">
			<Activity mode="visible">
				<Sidebar />
			</Activity>
			<div className="grid grid-rows-[auto_7fr] md:grid-rows-[1fr_15fr] ">
				{/*Navbar*/}
				<div
					className="
				bg-white flex items-center pl-10 pr-8
				justify-between box-border border-b border-[#EBEBEB]
			"
				>
					{/*bread crumbs*/}
					<div>{/*<p>{path.charAt(0).toUpperCase() + path.slice(1)}</p>*/}</div>

					{/*user name and dropdown*/}
					<div className="flex gap-3 h-full items-center ">
						<Link
							to="/login"
							className="
						hover:cursor-pointer rounded-sm h-10 w-9 flex
						justify-center items-center bg-primary"
						>
							<p className="text-white font-bold text-xl">{user.username[0]}</p>
						</Link>

						<p className="text-sm font-medium">{user.username}</p>
					</div>
				</div>

				<div className="overflow-hidden">
					<Outlet context={{ user }} />
				</div>
			</div>
		</div>
	);
}
export default Layout;
