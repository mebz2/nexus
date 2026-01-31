import { SearchBar } from "@/components";
import { useState } from "react";
import { MockFiles } from "@/mocks";
import { useNavigate, useOutletContext } from "react-router-dom";
import { File } from "@/components";

type Group = {
  _id: string;
  name: string;
  description: string;
  creator: string;
  admins: string[];
  members: string[];
};

type FileType = {
  _id: string;
  fileName: string;
  fileSizeB: number;
  fileType: string;
  uploader: string;
  createdAt: string;
  fileUrl: string;
};

const Files = () => {
  return (
    <div className="h-full flex flex-col  items-center box-border  ">
      <div className="w-screen flex items-center">
        <SearchBar />
      </div>
      <div className="h-200 overflow-y-auto flex flex-col pl-2 pr-3 box-border">
        {MockFiles.map((file) => {
          return (
            <File
              key={file.id}
              name={file.fileName}
              size={file.fileSize}
              file_type={file.fileType}
              uploaded_by={file.uploadedBy}
              uploaded_time={file.uploadedTimeDate}
              onDelete={() => {
                console.log("delete");
              }}
              url=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Files;
// <button
//   className="
// 						h-10 w-40 mr-5 rounded-lg border-none
// 						outline-none hover:cursor-pointer font-medium
// 						bg-(--primary-color) text-white
// 						hover:shadow-lg hover:shadow-gray-600
// 					"
//   onClick={() => {
//     navigate(`/groups/${group._id}/addfile`);
//   }}
// >
//   Add File
// </button>
