import Navbar from "../Navbar";
import type { ReactNode } from "react";

type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className="bg-content h-screen">
			<Navbar />
			<div className="h-full">{children}</div>
		</div>
	);
}
export default Layout;
