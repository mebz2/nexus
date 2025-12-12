const Overview = () => {
	return (
		<div className="border w-full h-210 overflow-y-auto">
			<div className="w-full flex p-5 box-border gap-5 justify-center">

				{ /* Quick action buttons */}
				<div
					className="h-[330px] w-[500px] border  
					border-border rounded-lg p-5 box-border"
				>
					<p>Quick Actions</p>
				</div>

				{ /* group description */}
				<div
					className="h-[330px] w-[700px] border
					border-border rounded-lg p-5 box-border"
				>
					<p className="line-clamp-3">
						This is the group description
					</p>
				</div>
			</div>
		</div>
	);
};

export default Overview;
