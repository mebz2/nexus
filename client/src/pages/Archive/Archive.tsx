import { File, SearchBar } from "@/components";
import { useNavigate } from "react-router-dom";
import { MockFiles } from "@/mocks";

function Archive() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="h-full flex flex-col  items-center box-border  ">
				<div className="w-full flex items-center">
					<SearchBar />
					<button className="
						h-10 w-40 mr-5 rounded-lg border-none 
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
						MockFiles.map((file) => {
							return <File key={file.id}
								name={file.fileName} size={file.fileSize} file_type={file.fileType}
								uploaded_by={file.uploadedBy} uploaded_time={file.uploadedTimeDate}
							/>

						})
					}
				</div>
			</div>
		</div>
	);
}

export default Archive;
