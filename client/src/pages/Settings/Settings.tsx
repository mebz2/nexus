import { useState } from "react";
import { Layout } from "../../components";
import { MdModeEdit } from "react-icons/md";

function Settings() {
	const [username, setUsername] = useState<string>("Username");
	const [edit, setEdit] = useState<boolean>(false)

	function handleEdit() {
		setEdit(true);
		const userInput = document.getElementById("username");
		if (userInput) {
			userInput.focus();
		}
	}

	return (
		<Layout>
			<div className="h-230 overflow-y-auto flex flex-col items-center p-3">
				<div className="
					w-5xl h-[280px] rounded-t-2xl border-2 border-border 
					flex flex-col items-center p-5 box-border
				">
					<MdModeEdit
						onClick={handleEdit}
						className="self-end  text-2xl hover:cursor-pointer"
					/>
					<input
						id="username"
						type="text"
						disabled={!edit}
						placeholder={username}
						className="border-b-2 flex outline-none"
					/>

					<div className="w-full mt-auto flex justify-end gap-5">
						<button
							className="
								border-2 p-1 w-20 self-end mt-auto rounded-sm border-border
								hover:cursor-pointer  hover:shadow-lg outline-none
							"
						>
							Save
						</button>
						<button className="
							border-2 p-1 w-20 self-end mt-auto rounded-sm border-border
							hover:cursor-pointer  hover:shadow-lg outline-none
						">
							Discard
						</button>
					</div>

				</div>
			</div>
		</Layout >
	);
}

export default Settings;
