import { Activity, OverviewBtn } from "@/components";
import { IoMdCloudUpload, IoMdPersonAdd, IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MockActivities } from "@/mocks";
import { useOutletContext } from "react-router-dom";

type Group = {
  _id: string;
  name: string;
  description: string;
  creator: string;
  admins: string[];
  members: string[];
};

const Overview = () => {
  const { group } = useOutletContext<{ group: Group }>();

  return (
    <div className="w-full h-210 overflow-y-auto">
      <div className="w-full flex p-5 box-border gap-5 justify-center ">
        {/* Quick Actions */}
        <div
          className="h-[330px] w-[500px] border  flex flex-col
					border-border rounded-lg p-5 box-border gap-8 shadow-xl"
        >
          <p className="font-semibold text-lg text-primary">Quick Actions</p>

          <OverviewBtn
            Icon={IoMdCloudUpload}
            label="Upload Files"
            path="addfile"
            groupId={group._id}
          />

          <OverviewBtn
            Icon={IoMdPersonAdd}
            label="Add Member"
            path="invite-member"
            groupId={group._id}
          />

          <OverviewBtn
            Icon={IoMdSettings}
            groupId={group._id}
            label="Settings"
            path="settings"
          />
        </div>

        {/* group description */}
        <div
          className="h-[330px] w-[700px] border
					border-border rounded-lg p-10 box-border shadow-xl
					flex flex-col gap-10
					"
        >
          <p className="line-clamp-3">{group.description}</p>

          <p className="flex items-center gap-5">
            <FaUser />
            {group.members.length}{" "}
            {group.members.length == 1 ? ` Member` : ` Members`}
          </p>
        </div>
      </div>

      <div
        className="
						h-fit w-fit bg-amber-50
						md:h-[50%] md:w-[75%] rounded-2xl md:bg-white
						md:border-2  md:border-border mx-auto
						pl-10 pb-5 pt-2.5 hover:shadow-xl"
      >
        <p className=" text-lg font-bold md:text-2xl md:font-bold xl:text-3xl text-black">
          Recent Group Activities
        </p>
        <p className="text-xs text-[#6B6875] font-medium">
          Stay updated with group activities
        </p>
        {MockActivities.slice(0, 4).map((activity) => {
          return (
            <Activity
              key={activity.id}
              name={activity.name}
              timestamp={activity.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
