import { SearchBar, GroupCard, Layout } from "../../components";
import { MockGroups } from "../../mocks/";

function Groups() {
	return (
		<Layout>
			<div className="flex flex-col items-center gap-2.5 ">
				<SearchBar />
				<div
					className="h-full w-full grid grid-cols-5
					grid-rows-2 pl-15 pr-15 pt-10 gap-10"
				>
					{MockGroups.map((group) => {
						return <GroupCard key={group.id} {...group} />;
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Groups;
