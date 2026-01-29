import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "@/components";

function AddFile() {
	return (

		<div className="
			flex flex-col 
			justify-center items-center h-screen"
		>

			{ /* link to go back to groups page */}
			<Link to={"/group/files"} className="
				mb-5 flex items-center gap-2 hover:font-bold
				text-primary
			">
				<IoMdArrowRoundBack />
				Go Back to Group
			</Link>

			{ /* Container for create group card */}
			<div className="
				w-[30%] h-fit border border-border flex 
				flex-col rounded-[10px] p-7 gap-3 pl-5
				shadow-2xl
			">

				<div>
					<p className="font-medium text-[20px] text-primary">
						Upload File
					</p>
					<p className="font-extralight text-sm">
						Upload files to group
					</p>
				</div>

				<input id="file-input" type="file" multiple className="hover:font-bold mb-10 mt-10" />

				<div className="h-9 w-50 mx-auto">
					<Button label="Add File" radius={5} onClick={() => { console.log("Add File") }} />
				</div>
			</div>

		</div >
	);
}

export default AddFile;
