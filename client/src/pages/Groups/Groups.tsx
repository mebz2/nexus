import { Navbar, GroupCard } from "./components";
import { SearchBar } from "../../components";

function Groups() {
  return (
    <div className=" content-gradient h-screen">
      <Navbar />
      <div className="flex flex-col items-center gap-2.5 ">
        <SearchBar />
        <div className="h-full w-screen grid grid-cols-4 grid-rows-2 p-10 gap-10">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </div>
  );
}

export default Groups;
