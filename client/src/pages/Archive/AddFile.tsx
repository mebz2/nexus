import { Link, useOutletContext } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "@/components";
import { useState } from "react";

type User = {
	_id: string,
	username: string,
	email: string
};

function AddFile() {

	const { user } = useOutletContext<{ user: User }>();
	const [error, setError] = useState('');
	const [isUploading, setIsUploading] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const fileInput = document.getElementById('file-input') as HTMLInputElement

		const file = fileInput?.files?.[0]

		if (!file) {
			setError('Please select a file first.');
			return;
		}

		if (file.size > 10 * 1024 * 1024) {
			setError('File is too large. Max 10MB')
			return
		}

		const formData = new FormData();
		formData.append('file', file)
		formData.append('fileName', file.name)
		formData.append('fileSizeKB', file.size.toString())
		formData.append('fileType', file.name.split('.').pop() || '')
		formData.append('storageType', 'personal')
		formData.append('uploader', user._id)

		try {
			setIsUploading(true)
			const response = await fetch('/api/files/upload', {
				method: "POST",
				body: formData,
			})

			const data = await response.json()

			if (!response.ok) {
				setError(data.message || "Upload failed");
				return;
			}

			alert("Upload successful!");
			fileInput.value = ""
		} catch (err) {
			setError("Server Connection error")
		} finally {
			setIsUploading(false)
		}

	}
	return (

		<div className="
			flex flex-col 
			justify-center items-center h-screen"
		>

			{ /* link to go back to groups page */}
			<Link to={"/archive"} className="
				mb-5 flex items-center gap-2 hover:font-bold
				text-primary
			">
				<IoMdArrowRoundBack />
				Back to Archive
			</Link>

			{ /* Container for create group card */}
			<div className={`
				w-[30%] h-fit 
				${error ? 'shadow-red-300' : 'border border-border'} flex 
				flex-col rounded-[10px] p-7 gap-3 pl-5
				shadow-2xl
			`}>

				<form onSubmit={handleSubmit} className="flex flex-col">
					<div>
						<p className="font-medium text-[20px] text-primary">
							Upload File
						</p>
						<p className="font-extralight text-sm">
							Upload your personal files
						</p>
					</div>

					<input id="file-input" type="file" className="hover:font-bold mb-10 mt-10" />

					{error && (
						<p className="text-red-500 text-xs font-medium animate-pulse self-center mb-4">
							{error}
						</p>
					)}
					<div className="h-9 w-50 mx-auto">
						<Button label={isUploading ? "Uploading" : "Add File"} radius={5} type="submit" disabled={isUploading} />
					</div>
				</form>
			</div>

		</div >
	);
}

export default AddFile;
