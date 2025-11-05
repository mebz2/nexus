import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BiSolidArchiveIn } from "react-icons/bi";
import Activity from "./Activity";
import Navbar from "./Navbar";

export default function Homepage() {
  const [visible, setVisible] = useState<"group" | "archive" | null>(null);
  return (
    <div className="content-gradient h-full">
      {/*nav bar*/}
      <Navbar />
      <div className="flex flex-col  p-20 items-center ">
        {/*welcome back message*/}
        <div className=" flex w-[80%]">
          <h1 className="text-[#6B6875]">Welcome back,</h1>{" "}
          <h1 className="ml-2"> Name!</h1>
        </div>

        {/*card container*/}
        <div className="flex w-[80%] mt-10 h-80 items-center gap-28">
          {/*study groups card*/}
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
              className={`text-purple-400 absolute bottom-2.5 right-2.5
              ${visible == "group" ? "visible" : "invisible"}`}
            />
          </div>

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
              id="archive-arrow"
              size={30}
              className={`text-white absolute bottom-2.5 right-2.5
              ${visible == "archive" ? "visible" : "invisible"}`}
            />
          </div>
        </div>

        {/*recent activities*/}
        <div className="h-96  w-[80%] rounded-2xl bg-[#EEEDFF] shadow-lg shadow-[#4C23FF]/20 pl-10 pt-2.5">
          <h1 className=" text-neutral-600">Recent Activities</h1>
          <p className="text-sm text-[#6B6875] font-medium">
            Stay updated with your activities
          </p>

          {/*Activity*/}
          <Activity />
          <Activity />
          <Activity />
          <Activity />
        </div>
      </div>
    </div>
  );
}
