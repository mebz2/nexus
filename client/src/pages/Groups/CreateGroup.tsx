import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button, Textfield } from "@/components";
import { useState } from "react";

function CreateGroup() {
	const navigate = useNavigate()
	const [error, setError] = useState('')


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const nameInput = document.getElementById('groupName') as HTMLInputElement
		const descriptionInput = document.getElementById('groupDescription') as HTMLInputElement

		if (!nameInput || !descriptionInput) {
			setError('couldnt find name Input or description input')
		}

		const groupName = nameInput.value.trim();
		const groupDescription = descriptionInput.value.trim();

		if (!groupName) {
			setError('Group name is required!')
			return
		}

		if (!groupDescription) {
			setError('Group description is required!')
			return
		}

		try {
			const response = await fetch('/api/groups/create', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({
					name: groupName,
					description: groupDescription
				})

			});

			const data = await response.json()

			if (!response.ok) {
				setError(data.message || 'Server error occured')
			}

			setError('')
			alert("Group successfully created!")
			navigate("/groups")
		} catch (err) {
			console.error("Server error: ", err)
		}
	}

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
			<div className={`
				w-[27%] h-fit 
				${error ? 'shadlow-xl shadow-red-500' : 'border border-border'} flex 
				flex-col rounded-[10px] p-7 gap-3 pl-5
				shadow-2xl
			`}>

				<div>
					<p className="font-medium text-[20px] text-primary">
						Create New Study Group
					</p>
					<p className="font-extralight text-sm">
						Start a new study group and invite others to join
					</p>
				</div>

				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<div className="w-[85%]">
						<Textfield id="groupName" label="Group Name" type="text"
							errorId="group-name-id"
							placeholder="Enter group name"
							onChange={() => setError('')}
						/>
					</div>
					<div className="w-[85%]">
						<Textfield id="groupDescription" label="Group Description" type="text"
							errorId="group-name-id"
							placeholder="Describe your study group"
							onChange={() => setError('')}
						/>
					</div>

					{error && (
						<p className="text-red-500 text-xs font-medium animate-pulse">
							{error}
						</p>
					)}
					<div className="h-9 w-50 mx-auto">
						<Button label="Create Group" radius={5} type="submit" onClick={() => { console.log("Create group") }} />
					</div>
				</form>
			</div>

		</div >
	);
}

export default CreateGroup;
