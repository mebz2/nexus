import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { MdModeEdit } from "react-icons/md";

function Settings() {
	const [username, setUsername] = useState<string>("Username");
	const [edit, setEdit] = useState<boolean>(false);
	const [save, setSave] = useState<boolean>(false);

	function handleEdit() {
		setEdit(!edit);
	}

	function handleSave() {
		setSave(true);
		setEdit(false);
	}

	useEffect(() => {
		const userInput = document.getElementById("username");
		const newName = userInput?.textContent;
		if (save && newName) {
			setUsername(newName);
			setEdit(false)
		}
	}, [save]);

	useEffect(() => {
		const userInput = document.getElementById("username");
		if (edit) {
			if (userInput) {
				userInput.focus();
			}
		}
	}, [edit])


	return (
		<Layout>
			<div className="h-230 overflow-y-auto flex flex-col items-center p-3 gap-5">
				<h2 className="">User Information</h2>
				<div className="
					w-3xl h-[380px] rounded-2xl border-2 border-border 
					flex flex-col items-center p-5 box-border
				">
					<MdModeEdit
						onClick={handleEdit}
						className="self-end  text-2xl hover:cursor-pointer"
					/>

					<form className="
						w-[70%] flex flex-col items-center h-70
						gap-8 
					"
					>

						<input
							id="username"
							type="text"
							disabled={!edit}
							placeholder={username}
							className="border-b-2 flex outline-none w-60"
						/>

						<textarea
							id="bio"
							placeholder="bio"
							disabled={!edit}
							className="
								outline-none border border-border
								rounded-sm focus:border-primary
								min-h-[100px] w-60 pt-3 pl-2
							"
						/>

						<div className="w-full mt-auto flex justify-end gap-5">
							<button
								onClick={handleSave}
								className="
								border-2 p-1 w-20 self-end mt-auto rounded-sm border-border
								hover:cursor-pointer  hover:shadow-lg outline-none
							"
							>
								Save
							</button>
							<button
								onClick={handleEdit}
								type="reset"
								className="
								border-2 p-1 w-20 self-end mt-auto rounded-sm border-border
								hover:cursor-pointer  hover:shadow-lg outline-none
							"
							>
								Discard
							</button>

						</div>
					</form>

				</div>
			</div>
		</Layout >
	);
}

export default Settings;
