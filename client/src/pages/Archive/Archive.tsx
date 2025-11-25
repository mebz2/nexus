import { Layout, File } from "../../components";
import { MockFiles } from "../../mocks";

function Archive() {
	return (
		<Layout>
			<div className="h-full flex flex-col items-center p-5 overflow-y-scroll ">
				{
					MockFiles.map((file) => {
						return <File
							name={file.fileName} size={file.fileSize} file_type={file.fileType}
							uploaded_by={file.uploadedBy} uploaded_time={file.uploadedTimeDate}
						/>

					})
				}
				<div className="border w-full h-[10%]">pagination</div>

			</div>
		</Layout>
	);
}

export default Archive;
