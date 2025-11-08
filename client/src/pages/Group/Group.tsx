import { useState } from "react";
import { NavBtn } from "./components";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";

export default function Group() {
  const [active, setActive] = useState<string>("Overview");
  return (
    <div className="flex h-full flex-col items-center">
      <Navbar />

      <div className="w-[60%] h-12 mt-2.5 bg-[#F3F3FF] flex items-center justify-center gap-5 rounded-lg">
        <Link to="/group/overview">
          <NavBtn label="Overview" active={active} setActive={setActive} />
        </Link>
        <Link to="/group/files">
          <NavBtn label="Files" active={active} setActive={setActive} />
        </Link>
        <Link to="/group/tasks">
          <NavBtn label="Tasks" active={active} setActive={setActive} />
        </Link>
        <Link to="/group/members">
          <NavBtn label="Members" active={active} setActive={setActive} />
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
