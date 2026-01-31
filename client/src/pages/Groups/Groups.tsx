import { useEffect, useState } from "react"; // 1. Import useState
import { GroupCard, SearchBar } from "@/components";
import { MockGroups } from "@/mocks/";
import { useNavigate } from "react-router-dom";

type File = {
  _id: string;
  name: string;
  description: string;
};

function Groups() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("/api/groups/me", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) return;

        const data = await response.json();
        console.log(data);
        setFiles(data);
      } catch (err) {
        console.error("Server errors: ", err);
      }
    };
    fetchGroups();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentGroups = files.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(MockGroups.length / itemsPerPage);

  return (
    <div>
      {/* Use flex-col and lock the height to the viewport */}
      <div className="flex flex-col h-[calc(100vh-64px)] w-full overflow-hidden">
        {/* Header - Fixed height, won't move */}
        <div className="flex items-center justify-between p-5 shrink-0 bg-white">
          <div className="flex-1">
            <SearchBar />
          </div>
          <button
            className="h-10 w-40 ml-4 rounded-lg bg-(--primary-color) text-white font-medium shrink-0 cursor-pointer"
            onClick={() => navigate("/groups/creategroup")}
          >
            Create Group
          </button>
        </div>

        {/* Grid - This is the ONLY part that scrolls */}
        <div className="flex-1 overflow-y-auto px-15 pt-5 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {currentGroups.map((group) => (
              <GroupCard
                key={group._id}
                groupId={group._id}
                name={group.name}
                description={group.description}
              />
            ))}
          </div>
        </div>

        {/* Pagination - Fixed at bottom, always visible */}
        {files.length > itemsPerPage && (
          <div className="shrink-0 bg-white border-t border-gray-100 p-4 flex justify-center items-center gap-6 z-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-6 py-2 border rounded-md disabled:opacity-30 hover:bg-gray-50 font-medium"
            >
              Previous
            </button>
            <span className="font-semibold text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-6 py-2 border rounded-md disabled:opacity-30 hover:bg-gray-50 font-medium"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Groups;
