import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button, Textfield } from "@/components";

function CreateGroup() {
	return (
		<div className="
			flex flex-col 
			justify-center items-center h-screen"
		>

			{ /* link to go back to groups page */}
			<Link to={"/groups"} className="
				mb-5 flex items-center gap-2 hover:font-bold
				text-primary
			">
				<IoMdArrowRoundBack />
				Go Back to Groups
			</Link>

			{ /* Container for create group card */}
			<div className="
				w-[27%] h-fit border border-border flex 
				flex-col rounded-[10px] p-7 gap-3 pl-5
				shadow-2xl
			">

				<div>
					<p className="font-medium text-[20px] text-primary">
						Create New Study Group
					</p>
					<p className="font-extralight text-sm">
						Start a new study group and invite others to join
					</p>
				</div>

				<div className="w-[85%]">
					<Textfield id="group-name" label="Group Name" type="text"
						errorId="group-name-id"
						placeholder="Enter group name"
					/>
				</div>
				<div className="w-[85%]">
					<Textfield id="group-description" label="Group Description" type="text"
						errorId="group-name-id"
						placeholder="Describe your study group"
					/>
				</div>

				<div className="h-9 w-50 mx-auto">
					<Button label="Create Group" radius={5} type="submit" onClick={() => { console.log("Create group") }} />
				</div>
			</div>

		</div >
	);
}

export default CreateGroup;
