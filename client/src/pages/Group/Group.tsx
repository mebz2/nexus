import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { GroupButton } from "@/components";
import { useLocation } from "react-router-dom";

export default function Group() {
  const location = useLocation();
  const segments: string[] = location.pathname.split("/").filter(Boolean);
  const lastPath: string | undefined = segments.pop();
  const [active, setActive] = useState<string | undefined>(lastPath);

  const { groupId } = useParams<{ groupId: string }>();
  const [group, setGroup] = useState<any>(null);

  useEffect(() => {
    if (!groupId) return;

    const fetchGroup = async () => {
      try {
        const res = await fetch(`/api/groups/${groupId}`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch group");

        const data = await res.json();
        setGroup(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGroup();
  }, [groupId]);

  if (!group) return <p>Loading group</p>;

  return (
    <div>
      {/*content*/}
      <div className="flex min-h-screen flex-col items-center">
        <div
          className="
					w-[40%] h-7 mt-2.5 bg-[#F3F3FF]
					grid grid-cols-3
					rounded-lg "
        >
          <GroupButton
            path={`/group/${groupId}/overview`}
            label="Overview"
            active={active}
            setActive={setActive}
          />
          <GroupButton
            path="/group/files"
            label="Files"
            active={active}
            setActive={setActive}
          />

          <GroupButton
            path="/group/members"
            label="Members"
            active={active}
            setActive={setActive}
          />
        </div>

        <Outlet />
      </div>
    </div>
  );
}
