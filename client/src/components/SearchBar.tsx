import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
const SearchBar = () => {
	const [focus, setFocus] = useState<boolean>(false);
	return (
		<div className="flex items-end  ">
			<input
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				type="text"
				className={`
          h-12 w-96 mt-6 border-t-2 border-l-2
          border-b-2 border-r
          rounded-l-3xl pl-16
          text-lg outline-none
          ${focus == true ? "border-purple-950" : "border-border"}`}
				placeholder="Search"
			/>
			<button
				className={`h-12 w-20 border-r-2 border-t-2 border-b-2
            rounded-r-3xl  flex justify-center items-center hover:cursor-pointer
            outline-none
            ${focus == true ? "border-purple-950" : "border-border"}
            `}
			>
				<RiSearchLine
					className={`
          text-2xl
        `}
				/>
			</button>
		</div>
	);
};

export default SearchBar;
