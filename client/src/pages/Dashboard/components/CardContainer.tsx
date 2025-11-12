import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidArchiveIn } from "react-icons/bi";

import Card from "./Card";

const CardContainer = () => {
	return (
		/*card container*/
		<div className="flex w-[80%] mt-10 h-80 items-center justify-between">
			<Link to="/groups">
				<Card id="study-groups" label="Study Groups" Icon={FaUsers} />
			</Link>
			<Card id="archive" label="Archive" Icon={BiSolidArchiveIn} />
			<Card id="calendar" label="Calendar" Icon={FaCalendarCheck} />
			<Card id="inbox" label="Inbox" Icon={IoMdMail} />
		</div>
	);
};

export default CardContainer;
