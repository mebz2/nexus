import { useState } from "react";
import { NavBtn } from "./components";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Group() {
  const [active, setActive] = useState<string>("Overview");
  return (
    <div className="flex h-full flex-col items-center">
      <Navbar />
      <div className="w-[60%] h-12 mt-2.5 bg-[#F3F3FF] flex items-center justify-center gap-5 rounded-lg">
        <NavBtn label="Overview" active={active} setActive={setActive} />
        <NavBtn label="Files" active={active} setActive={setActive} />
        <NavBtn label="Tasks" active={active} setActive={setActive} />
        <NavBtn label="Members" active={active} setActive={setActive} />
      </div>
      <Outlet/>
    </div>
  );
}
