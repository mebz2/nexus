import Navbar from "./Navbar";
import { Activity, type ReactNode } from "react";
import Sidebar from "./Sidebar";

type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col bg-white h-screen">
			<Navbar />
			<div className="flex h-full">
				<Activity mode="visible">
					<Sidebar />
				</Activity>
				<div className="h-full w-[85%] ">{children}</div>
			</div>
		</div>
	);
}
export default Layout;
