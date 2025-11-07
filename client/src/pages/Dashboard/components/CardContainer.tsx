import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoMdArrowRoundForward, IoMdMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidArchiveIn } from "react-icons/bi";

type ContainerProps = {
  visible: "group" | "archive" | "calendar" | "inbox" | null;
  setVisible: React.Dispatch<
    React.SetStateAction<"group" | "archive" | "calendar" | "inbox" | null>
  >;
};

const CardContainer = ({ visible, setVisible }: ContainerProps) => {
  return (
    /*card container*/
    <div className="flex w-[80%] mt-10 h-80 items-center justify-between">
      {/*study groups card*/}
      <Link to="/groups">
        <div
          onMouseEnter={() => setVisible("group")}
          onMouseLeave={() => setVisible(null)}
          id="study-groups"
          className="
          card-gradient flex flex-col justify-center items-center
          h-64 w-72 rounded-[10px] shadow-lg shadow-[#4C23FF]/15
          hover:shadow-xl hover:shadow-[#4C23FF]/20 hover:cursor-pointer
          relative"
        >
          <FaUsers className="text-7xl text-[#8B68FF]" />
          <h2 className="text-[#6B6875]">Study Groups</h2>
          <IoMdArrowRoundForward
            id="groups-arrow"
            size={30}
            className={`text-[#1D158C] absolute bottom-2.5 right-4.5
            ${visible == "group" ? "visible" : "invisible"}`}
          />
        </div>
      </Link>

      {/*archive card*/}
      <div
        onMouseEnter={() => setVisible("archive")}
        onMouseLeave={() => setVisible(null)}
        id="archive"
        className="card-gradient flex flex-col justify-center items-center
                    h-64 w-72 rounded-[10px] shadow-lg shadow-[#4C23FF]/15
                    hover:shadow-xl hover:shadow-[#4C23FF]/20 hover:cursor-pointer
                    relative"
      >
        <BiSolidArchiveIn className="text-7xl text-[#8B68FF]" />
        <h2 className="text-[#6B6875]">Archive</h2>
        <IoMdArrowRoundForward
          size={30}
          className={`text-[#1D158C] absolute bottom-2.5 right-4.5
            ${visible == "archive" ? "visible" : "invisible"}`}
        />
      </div>

      {/*calendar card*/}
      <div
        onMouseEnter={() => setVisible("calendar")}
        onMouseLeave={() => setVisible(null)}
        id="archive"
        className="card-gradient flex flex-col justify-center items-center
                              h-64 w-72 rounded-[10px] shadow-lg shadow-[#4C23FF]/15
                              hover:shadow-xl hover:shadow-[#4C23FF]/20 hover:cursor-pointer
                              relative"
      >
        <FaCalendarCheck className="text-7xl text-[#8B68FF]" />
        <h2 className="text-[#6B6875]">Calendar</h2>
        <IoMdArrowRoundForward
          size={30}
          className={`text-[#1D158C] absolute bottom-2.5 right-4.5
                      ${visible == "calendar" ? "visible" : "invisible"}`}
        />
      </div>

      {/*inbox card*/}
      <div
        onMouseEnter={() => setVisible("inbox")}
        onMouseLeave={() => setVisible(null)}
        id="archive"
        className="card-gradient flex flex-col justify-center items-center
                                        h-64 w-72 rounded-[10px] shadow-lg shadow-[#4C23FF]/15
                                        hover:shadow-xl hover:shadow-[#4C23FF]/20 hover:cursor-pointer
                                        relative"
      >
        <IoMdMail className="text-7xl text-[#8B68FF]" />
        <h2 className="text-[#6B6875]">Inbox</h2>
        <IoMdArrowRoundForward
          id="archive-arrow"
          size={30}
          className={`text-[#1D158C] absolute bottom-2.5 right-4.5
                                ${visible == "inbox" ? "visible" : "invisible"}`}
        />
      </div>
    </div>
  );
};

export default CardContainer;
