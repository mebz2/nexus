import { Layout, File, SearchBar } from "../../components";
import { MockFiles } from "../../mocks";

function Archive() {
	return (
		<Layout>
			<div className="h-full flex flex-col  items-center box-border  ">
				<SearchBar />
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
		</Layout>
	);
}

export default Archive;
