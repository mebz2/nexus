import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

type OverviewProps = {
  label: string;
  Icon: IconType;
  path: string;
  groupId: string;
};
const OverviewBtn = ({ label, Icon, path, groupId }: OverviewProps) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-primary w-[90%] h-[13%]
						flex items-center pl-4 rounded-sm text-white
						cursor-pointer outline-none hover:shadow-xl
						hover:bg-[#F3F3FF] hover:border hover:border-border
						hover:font-semibold hover:text-primary gap-5"
      onClick={() => navigate(`/group/${groupId}/${path}`)}
    >
      <Icon />
      {label}
    </button>
  );
};

export default OverviewBtn;
