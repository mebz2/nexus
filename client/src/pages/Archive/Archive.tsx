import { File, SearchBar } from "@/components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type FileType = {
	_id: string;
	fileName: string;
	fileSizeB: number;
	fileType: string;
	uploader: string;
	createdAt: string;
	fileUrl: string;
};

function Archive() {
	const [files, setFiles] = useState<FileType[]>([])

	const deleteFile = async (id: string) => {
		console.log("Deleting file")
		try {
			const response = await fetch(`/api/files/delete/${id}`, {
				method: "DELETE",
				credentials: 'include',
			})

			const data = await response.json();
			if (response.ok) {
				setFiles(prevFiles => prevFiles.filter(file => file._id !== id))
			} else {
				console.log(data)
				console.error("Failed to delete this file")
			}
		} catch (err) {
			console.error("Error deleting file:", err)
		}
	};

	useEffect(() => {
		const fetchFiles = async () => {
			try {
				const response = await fetch('/api/files/archive', {
					method: "GET",
					credentials: 'include'
				})

				if (!response.ok) {
					return
				}
				const data = await response.json()
				setFiles(data)
				console.log(data)


			} catch (err) {
				console.error("Server error", err)
			}
		}
		fetchFiles();
	}, [])

	const navigate = useNavigate();
	return (
		<div>
			<div className="h-full flex flex-col  items-center box-border  ">
				<div className="w-full flex items-center">
					<SearchBar />
					<button className="
					h-10 w-40 mr-5  rounded-lg border-none
						outline-none hover:cursor-pointer font-medium
						bg-(--primary-color) text-white
						hover:shadow-lg hover:shadow-gray-600
					"
						onClick={() => { navigate("/archive/addfile") }}
					>
						Add File
					</button>
				</div>

				<div className="h-200 overflow-y-auto flex flex-col pl-2 pr-3 box-border">
					{
						files.map((file) => {
							return <File key={file._id}
								name={file.fileName} size={file.fileSizeB} file_type={file.fileType}
								uploaded_by={file.uploader.username} uploaded_time={file.createdAt} url={file.fileUrl}
								onDelete={() => deleteFile(file._id)}
							/>

						})
					}
				</div>
			</div>
		</div>
	);
}

export default Archive;
