import React from "react";

const Input = ({
	placeholder,
	type = "text",
}: {
	placeholder: string;
	type?: string;
}) => {
	return (
		<input
			className="w-full h-[60px] sm:h-[72px] p-4 sm:p-6 border-2 border-gray3 rounded-lg text-gray1 text-base sm:text-lg mb-4 sm:mb-8"
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
