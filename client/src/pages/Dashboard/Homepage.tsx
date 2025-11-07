import { useState } from "react";
import Activity from "./components/Activity";
import Navbar from "./Navbar";
import CardContainer from "./components/CardContainer";

export default function Homepage() {
  const [visible, setVisible] = useState<
    "group" | "archive" | "calendar" | "inbox" | null
  >(null);
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

        {/*cards*/}
        <CardContainer visible={visible} setVisible={setVisible} />

        {/*recent activities*/}
        <div className="h-full  w-[80%] rounded-2xl bg-[#EEEDFF] shadow-lg shadow-[#4C23FF]/20 pl-10 pb-2.5 pt-2.5 hover:shadow-2xl">
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
