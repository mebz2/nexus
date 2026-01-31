import { useNavigate, useOutletContext } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";
import { Member } from "@/components";
import { MockMembers } from "@/mocks";

type Group = {
  _id: string;
  name: string;
  description: string;
  creator: string;
  admins: string[];
  members: string[];
};

const Members = () => {
  const { group } = useOutletContext<{ group: Group }>();
  return (
    <div className="w-[80%] h-full overflow-y-auto p-5 box-border">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg text-primary">Group Members (8)</p>
      </div>

      <div
        className="h-200 overflow-y-auto mt-3
			pl-2 pr-3 box-border"
      >
        {MockMembers.map((member) => {
          return <Member name={member.name} position={member.position} />;
        })}
      </div>
    </div>
  );
};

export default Members;
// <button
//   className="
// 						h-9 w-45 mr-5 rounded-sm border-none
// 						outline-none hover:cursor-pointer font-medium
// 						bg-(--primary-color) text-white
// 						hover:shadow-lg hover:shadow-gray-600
// 						flex items-center justify-center gap-2
// 					"
//   onClick={() => {
//     navigate(`/groups/${group._id}/invite-member`);
//   }}
// >
//   <MdOutlineAdd />
//   Invite Member
// </button>
