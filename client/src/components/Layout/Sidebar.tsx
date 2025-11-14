const Sidebar = () => {
	return (
		<div className="w-[15%] bg-[#E8E9EB] box-border p-2.5 ">
			<ul className="list-disc pl-6 ">
				<li>
					one
					<ul className="pl-3 list-disc">
						<li>two</li>
						<li>two</li>
						<li>two</li>
					</ul>
				</li>
				<li>one</li>
				<li>one</li>
				<li>one</li>
				<li>one</li>
			</ul>
		</div>
	);
};
export default Sidebar;
