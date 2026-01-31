import { FaFile } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";

type FileProps = {
  name: string;
  size: number;
  file_type: string;
  uploaded_by: string;
  uploaded_time: string;
  onDelete: () => void;
  url: string;
};

const File = ({
  name,
  size,
  file_type,
  uploaded_by,
  uploaded_time,
  onDelete,
  url,
}: FileProps) => {
  // calculate file size
  let new_size: string;
  const kb: number = size / 1024;
  const mb: number = kb / 1024;
  const gb: number = mb / 1024;
  if (gb >= 1) {
    new_size = gb.toFixed(2) + " GB";
  } else if (mb >= 1) {
    new_size = mb.toFixed(2) + " MB";
  } else if (kb >= 1) {
    new_size = size.toFixed(2) + " KB";
  } else {
    new_size = size.toFixed(2) + " B";
  }

  // calculate time since upload
  let distance = formatDistanceToNow(uploaded_time, { addSuffix: true });
  distance = distance.replace(/^about/, "");

  return (
    <div
      className="
				w-400 h-[70px] flex items-center
				pl-10 hover:border hover:border-(--border-color)
				hover:rounded-sm hover:shadow-sm
			"
    >
      {/* file icon */}
      <FaFile className="mr-[35px]" />

      {/*file name and description*/}
      <div className="h-full flex flex-col justify-center gap-1 max-w-[60%]  ">
        <p className="max-w-full font-semibold text-xl text-ellipsis whitespace-nowrap overflow-hidden ">
          {name}
        </p>
        <div className="text-sm font-medium flex items-end ">
          {new_size}
          <RxDotFilled className="text-xs" />
          Uploaded by {uploaded_by}
          <RxDotFilled />
          {distance}
          <RxDotFilled />
          {file_type}
        </div>
      </div>
      <div className="h-full flex gap-10 items-center ml-auto p-5 box-border mr-2">
        <a href={url} download={name} onClick={() => console.log(url)}>
          <BsDownload
            className="text-lg hover:cursor-pointer"
            title="Download"
          />
        </a>
        <MdDelete
          className="text-xl hover:cursor-pointer"
          title="Delete"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default File;
