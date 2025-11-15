import Navbar from "./Navbar";
import { Activity, type ReactNode } from "react";
import Sidebar from "./Sidebar";

type LayoutProps = {
	path: string;
	children: ReactNode;
};

function Layout({ children, path }: LayoutProps) {
	return (
		<div className="grid grid-cols-[1fr_7fr] bg-white h-screen">
			<Activity mode="visible">
				<Sidebar />
			</Activity>
			<div className="grid grid-rows-[1fr_15fr] h-screen">
				<Navbar path={path} />
				<div className="h-full w-full ">{children}</div>
			</div>
		</div>
	);
}
export default Layout;
