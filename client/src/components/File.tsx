import { FaFile } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
type FileProps = {
	name: string,
	size: number,
	file_type: string,
	uploaded_by: string,
	uploaded_time: string,
}
const File = ({ name, size, file_type, uploaded_by, uploaded_time }: FileProps) => {
	return (
		<div className="
				w-full h-[20%] flex items-center
				pl-10 hover:border hover:border-[var(--border-color)] 
				hover:rounded-sm hover:shadow-sm
			"
		>
			<FaFile className="mr-[35px]" />
			<div className="h-full flex flex-col justify-center gap-1  ">
				<p className="font-semibold text-xl">{name}</p>
				<div className="text-sm font-medium flex items-end ">
					{size} kb
					<RxDotFilled className="text-xs" />
					Uploaded by {uploaded_by}
					<RxDotFilled />
					{uploaded_time} hours ago
					<RxDotFilled />
					{file_type}
				</div>
			</div>
		</div>
	);
}

export default File;
