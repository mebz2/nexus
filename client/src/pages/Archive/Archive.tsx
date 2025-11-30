import { Layout, File, SearchBar } from "../../components";
import { MockFiles } from "../../mocks";

function Archive() {
	return (
		<Layout>
			<div className="h-full flex flex-col  items-center box-border p-2 pt-0 ">
				<SearchBar />
				<div className="h-200 overflow-y-scroll flex flex-col">
					{
						MockFiles.map((file) => {
							return <File
								name={file.fileName} size={file.fileSize} file_type={file.fileType}
								uploaded_by={file.uploadedBy} uploaded_time={file.uploadedTimeDate}
							/>

						})
					}
				</div>

			</div>
		</Layout>
	);
}

export default Archive;
