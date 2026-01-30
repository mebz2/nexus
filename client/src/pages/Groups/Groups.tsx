// import { GroupCard, Layout, SearchBar } from "@/components";
// import { MockGroups } from "@/mocks/";
// import { useNavigate } from "react-router-dom";
//
//
// function Groups() {
// 	const navigate = useNavigate();
// 	return (
// 		<Layout>
// 			<div className="flex flex-col items-center gap-2.5 ">
// 				<div className="w-full flex items-center">
// 					<SearchBar />
// 					<button className="
// 							h-10 w-40 mr-5 rounded-lg border-none 
// 							outline-none hover:cursor-pointer font-medium
// 							bg-(--primary-color) text-white
// 							hover:shadow-lg hover:shadow-gray-600
// 						"
// 						onClick={() => { navigate("/groups/creategroup") }}
// 					>
// 						Create Group
// 					</button>
// 				</div>
// 				<div
// 					className="
// 					h-[80%] w-full grid grid-cols-5
// 					grid-rows-3 pl-15 pr-15 pt-10  pb-5
// 				 	gap-5 mb-0 "
// 				>
// 					{MockGroups.map((group) => {
// 						return <GroupCard key={group.id} {...group} />;
// 					})}
// 				</div>
//
// 				<div className=" mt-0 flex w-full justify-center items-center ">
// 					pagination
// 				</div>
// 			</div>
// 		</Layout>
// 	);
// }
//
// export default Groups;
import { useState } from "react"; // 1. Import useState
import { GroupCard, Layout, SearchBar } from "@/components";
import { MockGroups } from "@/mocks/";
import { useNavigate } from "react-router-dom";

function Groups() {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 15;

	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;
	const currentGroups = MockGroups.slice(firstIndex, lastIndex);
	const totalPages = Math.ceil(MockGroups.length / itemsPerPage);

	return (
		<Layout>
			{/* Use flex-col and lock the height to the viewport */}
			<div className="flex flex-col h-[calc(100vh-64px)] w-full overflow-hidden">

				{/* Header - Fixed height, won't move */}
				<div className="flex items-center justify-between p-5 shrink-0 bg-white">
					<div className="flex-1"><SearchBar /></div>
					<button
						className="h-10 w-40 ml-4 rounded-lg bg-(--primary-color) text-white font-medium shrink-0"
						onClick={() => navigate("/groups/creategroup")}
					>
						Create Group
					</button>
				</div>

				{/* Grid - This is the ONLY part that scrolls */}
				<div className="flex-1 overflow-y-auto px-15 pt-5 pb-10">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
						{currentGroups.map((group) => (
							<GroupCard /* key={group.id} */ {...group} />
						))}
					</div>
				</div>

				{/* Pagination - Fixed at bottom, always visible */}
				{MockGroups.length > itemsPerPage && (
					<div className="shrink-0 bg-white border-t border-gray-100 p-4 flex justify-center items-center gap-6 z-10">
						<button
							disabled={currentPage === 1}
							onClick={() => setCurrentPage(prev => prev - 1)}
							className="px-6 py-2 border rounded-md disabled:opacity-30 hover:bg-gray-50 font-medium"
						>
							Previous
						</button>
						<span className="font-semibold text-gray-700">
							Page {currentPage} of {totalPages}
						</span>
						<button
							disabled={currentPage === totalPages}
							onClick={() => setCurrentPage(prev => prev + 1)}
							className="px-6 py-2 border rounded-md disabled:opacity-30 hover:bg-gray-50 font-medium"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</Layout>);
}

export default Groups;
