import React, { ReactNode } from "react";

const Select = ({
	placeholder,
	children,
}: {
	placeholder: string;
	children: ReactNode;
}) => {
	return (
		<select className="w-full h-[60px] sm:h-[72px] p-4 sm:p-6 border-2 border-gray3 rounded-lg text-gray1 text-base sm:text-lg mb-4 sm:mb-8 opacity-60">
			<option className="" value="">
				{placeholder}
			</option>
			{children}
		</select>
	);
};

export default Select;
