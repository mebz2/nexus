import { SearchBar } from "@/components";
import { useEffect, useState } from "react";
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
  const [files, setFiles] = useState<FileType[]>([]);
  const { group } = useOutletContext<{ group: Group }>();

  const deleteFile = async (id: string) => {
    console.log("Deleting file");
    try {
      const response = await fetch(`/api/files/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        setFiles((prevFiles) => prevFiles.filter((file) => file._id !== id));
      } else {
        console.log(data);
        console.error("Failed to delete this file");
      }
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(`/api/files/${group._id}`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }

        const data: FileType[] = await res.json();
        setFiles(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="h-full flex flex-col  items-center box-border  ">
      <div className="w-screen flex items-center">
        <SearchBar />
      </div>
      <div className="h-200 overflow-y-auto flex flex-col pl-2 pr-3 box-border">
        {files.map((file) => {
          return (
            <File
              key={file._id}
              name={file.fileName}
              size={file.fileSizeB}
              file_type={file.fileType}
              uploaded_by={file.uploader}
              uploaded_time={file.createdAt}
              onDelete={() => {
                deleteFile(file._id);
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
