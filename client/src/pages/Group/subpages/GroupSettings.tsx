import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Popup, Textfield } from "@/components";
import { useState } from "react";

const GroupSettings = () => {
	const navigate = useNavigate();
	const { groupId } = useParams<{ groupId: string }>();
	const [deletePopup, setDeletePopup] = useState<boolean>(false);
	const [leavePopup, setLeavePopup] = useState<boolean>(false);

	const handleDelete = async () => {
		try {
			const res = await fetch(`/api/groups/${groupId}`, {
				method: "DELETE",
				credentials: "include",
			});

			const data = await res.json();
			if (res.ok) {
				alert("Successfully deleted group!");
				navigate("/groups");
			} else {
				console.log(data);
				alert("Failed to delete group!");
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div
			className="flex flex-col items-center
				pt-15 h-screen overflow-y-auto gap-3"
		>
			<h1>Group Settings</h1>
			<Link
				to={`/groups/${groupId}/overview`}
				className="mb-5 flex
				items-center gap-2 hover:font-bold text-primary
			"
			>
				<IoMdArrowRoundBack />
				Back to Group
			</Link>

			<div
				className="w-[35%] h-[40%] border border-border
					rounded-lg flex  flex-col items-center p-5 gap-5
					shadow-lg "
			>
				<div className="w-[70%]">
					<Textfield
						id="group-name"
						label="Group name"
						type="text"
						errorId="group-name-error"
						placeholder="Group Name"
					></Textfield>
				</div>

				<div className="w-[70%]">
					<Textfield
						id="group-description"
						label="Group Description"
						type="text"
						errorId="group-description-error"
						placeholder="Group Description"
					></Textfield>
				</div>

				<button
					className="self-end mt-auto mr-5 p-2
					rounded-sm bg-primary text-white font-semibold
					cursor-pointer hover:font-bold hover:shadow-lg"
				>
					Save Changes
				</button>
			</div>

			<div
				className="w-[35%] h-[20%] border border-border
			rounded-lg flex items-center justify-center shadow-lg "
			>
				<button
					className="bg-[#FFCCCC] p-3 box-border w-[40%]
				rounded-lg border border-[#FF0707]  text-[#FF0000] cursor-pointer "
					onClick={() => {
						setDeletePopup(true);
					}}
				>
					Delete Group
				</button>

				<button
					className="bg-[#FFCCCC] p-3 box-border w-[40%]
				rounded-lg border border-[#FF0707]  text-[#FF0000] cursor-pointer hidden"
					onClick={() => {
						setLeavePopup(true);
					}}
				>
					Leave Group
				</button>
			</div>

			{/* popup for deleting the group*/}
			<Popup trigger={deletePopup} setTrigger={setDeletePopup}>
				<p>Are you sure you want to delete this group?</p>
				<button
					className="self-end border w-[15%] p-1 mt-2 rounded-sm
				bg-primary text-white cursor-pointer hover:font-bold"
					onClick={handleDelete}
				>
					Yes
				</button>
			</Popup>

			{/* popup for leaving the group*/}
			<Popup trigger={leavePopup} setTrigger={setLeavePopup}>
				<p>Are you sure you want to leave this group?</p>
				<button
					className="self-end border w-[15%] p-1 mt-2 rounded-sm
				bg-primary text-white cursor-pointer hover:font-bold"
				>
					Yes
				</button>
			</Popup>
		</div>
	);
};

export default GroupSettings;
