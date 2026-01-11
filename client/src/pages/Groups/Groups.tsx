import { GroupCard, Layout, SearchBar } from "@/components";
import { MockGroups } from "@/mocks/";

function Groups() {
	return (
		<Layout>
			<div className="flex flex-col items-center gap-2.5 ">
				<SearchBar />
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
