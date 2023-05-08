import React from "react";

const Input = ({
	name,
	placeholder,
	required = false,
	type = "text",
}: {
	name: string;
	placeholder: string;
	required?: boolean;
	type?: string;
}) => {
	return (
		<input
			name={name}
			className="w-full h-[60px] sm:h-[72px] p-4 sm:p-6 border-2 border-gray3 rounded-lg text-gray1 text-base sm:text-lg mb-4 sm:mb-8"
			type={type}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default Input;
