import Navbar from "./Navbar";

export default function Homepage() {
  return (
    <div className="content-gradient h-screen">
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
          <div
            className="card-gradient flex justify-center items-center
            h-64 w-72 rounded-[10px] shadow-md shadow-black/15
            hover:shadow-lg hover:shadow-black/20 hover:cursor-pointer"
          >
            <h2 className="text-[#6B6875]">Study Groups</h2>
          </div>
          <div
            className="card-gradient flex justify-center items-center
            h-64 w-72 rounded-[10px] shadow-md shadow-black/15 hover:shadow-lg
            hover:shadow-black/20 hover:cursor-pointer"
          >
            <h2 className="text-[#6B6875]">Archive</h2>
          </div>
        </div>

        {/*recent activities*/}
        <div className="h-80  w-[80%] rounded-2xl bg-[#EEEDFF] shadow-md shadow-[#4C23FF]/10 pl-10 pt-2.5">
          <h1 className=" text-neutral-600">Recent Activities</h1>
          <p className="text-sm text-[#6B6875] font-medium">
            Stay updated with your activities
          </p>
        </div>
      </div>
    </div>
  );
}
