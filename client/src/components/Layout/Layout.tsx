import Navbar from "./Navbar";
import { Activity, type ReactNode } from "react";
import Sidebar from "./Sidebar";

type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className="grid grid-cols-[1fr_7fr] bg-white h-screen">
			<Activity mode="visible">
				<Sidebar />
			</Activity>
			<div className="grid grid-rows-[1fr_7fr] md:grid-rows-[1fr_15fr] h-screen">
				<Navbar />
				<div className="h-full w-full ">{children}</div>
			</div>
		</div>
	);
}
export default Layout;
