type MemberProps = {
	name: string;
	position: string;
};
const Member = ({ name, position }: MemberProps) => {
	return (
		<div className="w-full h-[70px] flex items-center
				pl-10 pr-10 hover:border hover:border-(--border-color) 
				hover:rounded-sm hover:shadow-sm  justify-between
		">
			<div className="">
				<p>{name}</p>
				<p className="text-xs font-medium">{position}</p>
			</div>

			<div className=" flex gap-5 w-[30%] justify-end">
				<button className="border w-[40%] rounded-sm bg-green-200 text-green-900 border-green-500
								cursor-pointer 
				">
					Promote
				</button>

				<button className="border w-[30%] rounded-sm bg-red-200 text-red-950 border-red-500
								cursor-pointer
				">
					Kickout
				</button>
			</div>
		</div>
	);
}

export default Member;
