import { SearchBar, GroupCard, Layout } from "../../components";
import { MockGroups } from "../../mocks/";

function Groups() {
	return (
		<Layout>
			<div className="flex flex-col items-center gap-2.5 h-full  ">
				<SearchBar />
				<div
					className="
					h-full w-full grid grid-cols-5
					grid-rows-4 pl-15 pr-15 pt-10  pb-10 gap-5 "
				>
					{MockGroups.map((group) => {
						return <GroupCard key={group.id} {...group} />;
					})}

					<div className="col-span-5 flex justify-center items-center">
						pagination
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Groups;
