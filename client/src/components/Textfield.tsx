type TextfieldProps = {
	id: string;
	label: string;
	type: string;
	errorId: string;
	placeholder: string;
};

const Textfield = ({
	id,
	label,
	type,
	errorId,
	placeholder,
}: TextfieldProps) => {
	return (
		<div className="flex flex-col w-full gap-2">
			<label
				htmlFor={id}
				className="text-sm font-medium hover:cursor-pointer"
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className="
		        border border-border rounded-[5px]
		        font-light text-xs
		        h-[41px] p-[15px]
		        focus:border-border
		        focus:shadow-[0_0_10px_3px_rgba(59,130,246)]
		        focus:shadow-gray-600
		        focus:outline-none
        "
			/>
			<p
				id={errorId}
				className="mb-0 text-xs pl-1 text-red-600 hidden"
			></p>
		</div>
	);
};
export default Textfield;
