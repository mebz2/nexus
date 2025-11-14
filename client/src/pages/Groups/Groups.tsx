import { SearchBar, GroupCard, Layout } from "../../components";
import { MockGroups } from "../../mocks/";

function Groups() {
	return (
		<Layout>
			<div className="flex flex-col items-center gap-2.5 h-full overflow-y-auto border">
				<SearchBar />
				<div
					className="
					h-full w-full border grid grid-cols-5 overflow-y-scroll
					grid-rows-4 pl-15 pr-15 pt-10  pb-10 gap-5 "
				>
					{MockGroups.map((group) => {
						return <GroupCard key={group.id} {...group} />;
					})}
				</div>
				<div>pagination</div>
			</div>
		</Layout>
	);
}

export default Groups;
