import { FaDotCircle } from "react-icons/fa";
const Activity = () => {
  return (
    <div className="flex items-center gap-6 mt-3">
      <FaDotCircle className="text-purple-800" />
      <div className="w-full h-14 gap-1 items-end p-2.5 ">
        <p className="font-semibold">Activity 1</p>
        <p className="text-xs text-[#737373]">1 day ago</p>
      </div>
    </div>
  );
};

export default Activity;
