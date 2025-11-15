import { FaAngleRight } from "react-icons/fa6";
type BreadcrumbsProps = {
	path: string;
};
const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
	const arr: string[] = path.split(",");
	return (
		<div>
			<p className="flex items-center text-lg font-semibold border h-full"></p>
		</div>
	);
};
export default Breadcrumbs;
