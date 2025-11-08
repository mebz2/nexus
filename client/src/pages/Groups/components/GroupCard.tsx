import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const GroupCard = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Link to="/group">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className={`
      h-72 w-96 border border-border p-5 flex
      flex-col gap-10 card-gradient rounded-xl
      shadow-lg relative
      hover:cursor-pointer hover:shadow-xl hover:shadow-[#4C23FF]/20
      `}
      >
        <h2>Calculus Study Group</h2>
        <p>
          Weekly calculus problem solving sessions. We focus on derivatives,
          integrals, and real world applications
        </p>
        <IoMdArrowRoundForward
          className={`text-3xl text-[#1D158C]
        absolute bottom-2.5 right-3.5
        ${visible ? "visible" : "invisible"}
        `}
        />
      </div>
    </Link>
  );
};

export default GroupCard;
