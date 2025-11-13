import Navbar from "./Navbar";
import { Activity, useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";

type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	const [collapse, setCollapse] = useState<boolean>(false);
	return (
		<div className="flex flex-col bg-content h-screen">
			<Navbar collapse={collapse} setCollapse={setCollapse} />
			<div className="flex h-full">
				<Activity mode={collapse ? "hidden" : "visible"}>
					<Sidebar />
				</Activity>
				<div className="h-full w-[85%] ">{children}</div>
			</div>
		</div>
	);
}
export default Layout;
