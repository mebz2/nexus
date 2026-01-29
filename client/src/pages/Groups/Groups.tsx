import { GroupCard, Layout, SearchBar } from "@/components";
import { MockGroups } from "@/mocks/";
import { useNavigate } from "react-router-dom";


function Groups() {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="flex flex-col items-center gap-2.5 ">
				<div className="w-full flex items-center">
					<SearchBar />
					<button className="
							h-10 w-40 mr-5 rounded-lg border-none 
							outline-none hover:cursor-pointer font-medium
							bg-(--primary-color) text-white
							hover:shadow-lg hover:shadow-gray-600
						"
						onClick={() => { navigate("/groups/creategroup") }}
					>
						Create Group
					</button>
				</div>
				<div
					className="
					h-[80%] w-full grid grid-cols-5
					grid-rows-3 pl-15 pr-15 pt-10  pb-5
				 	gap-5 mb-0 "
				>
					{MockGroups.map((group) => {
						return <GroupCard key={group.id} {...group} />;
					})}
				</div>

				<div className=" mt-0 flex w-full justify-center items-center ">
					pagination
				</div>
			</div>
		</Layout>
	);
}

export default Groups;
