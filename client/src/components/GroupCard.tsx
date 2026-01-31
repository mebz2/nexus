import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

type GroupCardProps = {
  name: string;
  description: string;
  groupId: string;
  // createdAt?: string;
  // updatedAt?: string;
};

const GroupCard = ({ name, description, groupId }: GroupCardProps) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Link to={`/groups/${groupId}/overview`}>
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        // onClick={() => navigate(`/group/${groupId}/overview`)}
        className={`
			      h-full w-full border-t border-border p-5 flex
			      flex-col gap-10 bg-white rounded-xl
			      shadow-sm hover:shadow-2xl relative
			      hover:cursor-pointer box-border
			     `}
      >
        <h2 className="line-clamp-1">{name}</h2>
        <p className="line-clamp-3">{description}</p>
        <IoMdArrowRoundForward
          className={`text-[100%] text-black
				        absolute bottom-3 right-5
				        ${visible ? "visible" : "invisible"}
			        `}
        />
      </div>
    </Link>
  );
};
export default GroupCard;
