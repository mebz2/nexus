import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button, Textfield } from "@/components";

function InviteMember() {
  const { groupId } = useParams<{ groupId: string }>();

  return (
    <div
      className="
			flex flex-col
			justify-center items-center h-screen"
    >
      {/* link to go back to groups page */}
      <Link
        to={`/groups/${groupId}/members`}
        className="
				mb-5 flex items-center gap-2 hover:font-bold
				text-primary
			"
      >
        <IoMdArrowRoundBack />
        Go Back to Group
      </Link>

      {/* Container for create group card */}
      <div
        className="
				w-[27%] h-fit border border-border flex
				flex-col rounded-[10px] p-7 gap-5 pl-5
				shadow-2xl
			"
      >
        <div>
          <p className="font-medium text-[20px] text-primary">
            Invite New Member
          </p>
          <p className="font-extralight text-sm">
            Send an invitation to join your study group
          </p>
        </div>

        <div className="w-[85%]">
          <Textfield
            id="email"
            label="Email Address"
            type="email"
            errorId="email-id"
            placeholder="example@university.edu"
          />
        </div>

        <div className="p-3 bg-green-200 rounded-lg flex flex-col gap-3">
          <p className="text-sm font-bold text-[#075800]">What happens next?</p>
          <p className="text-sm font-medium text-[#075800]">
            They’ll receive an invitation in their nexus inbox with a button to
            accept or reject the invitation. If they accept, they’ll have access
            the group.
          </p>
        </div>

        <div className="h-9 w-50 mx-auto">
          <Button
            label="Send Invite"
            radius={5}
            onClick={() => {
              console.log("Create group");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default InviteMember;
