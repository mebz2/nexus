const Card = () => {
	return (
		<div
			onMouseEnter={() => setVisible("group")}
			onMouseLeave={() => setVisible(null)}
			id="study-groups"
			className="
          card-gradient flex flex-col justify-center items-center
          h-64 w-72 rounded-[10px] shadow-lg shadow-[#4C23FF]/15
          hover:shadow-xl hover:shadow-[#4C23FF]/20 hover:cursor-pointer
          relative"
		>
			<FaUsers className="text-7xl text-[#8B68FF]" />
			<h2 className="text-[#6B6875]">Study Groups</h2>
			<IoMdArrowRoundForward
				id="groups-arrow"
				size={30}
				className={`text-[#1D158C] absolute bottom-2.5 right-4.5
            ${visible == "group" ? "visible" : "invisible"}`}
			/>
		</div>
	);
};
export default Card;
