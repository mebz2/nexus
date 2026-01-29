type MemberProps = {
	name: string;
	position: string;
};
const Member = ({ name, position }: MemberProps) => {
	return (
		<div className="w-full h-[70px] flex items-center
				pl-10 hover:border hover:border-(--border-color) 
				hover:rounded-sm hover:shadow-sm 
		">
			<div className="">
				<p>{name}</p>
				<p className="text-xs font-medium">{position}</p>
			</div>
		</div>
	);
}

export default Member;
