import React, { type ReactNode } from 'react';
import { IoMdClose } from "react-icons/io";

type PopupProps = {
	trigger: boolean;
	setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactNode;
}

const Popup = ({ trigger, setTrigger, children }: PopupProps) => {
	return trigger ? (
		<div className="fixed inset-0 z-50 bg-black opacity-80 flex justify-center items-center ">
			<div className="relative bg-white p-8 w-full max-w-lg  rounded-lg shadow-lg">
				<button className="absolute top-4 right-4 font-bold cursor-pointer text-red-500  border"
					onClick={() => setTrigger(false)}>
					<IoMdClose className='w-5 h-5' />
				</button>
				{children}
			</div>
		</div>
	) : null;
};

export default Popup;
