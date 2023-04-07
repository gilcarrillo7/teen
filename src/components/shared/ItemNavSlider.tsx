import React from "react";

const ItemNavSlider = ({
	number,
	onClick,
	active = false,
}: {
	number: number;
	onClick: () => void;
	active?: boolean;
}) => {
	return (
		<div
			className={`${
				active
					? "bg-blue1 text-white w-14 sm:w-20 h-14 sm:h-20"
					: "bg-gray1/[.08] text-gray1 w-10 sm:w-16 h-10 sm:h-16 cursor-pointer"
			} font-walsheimpro rounded-full flex items-center justify-center text-xl md:text-4xl shadow-[0_8px_24px_-15px_rgba(0,151,254,0.24)]`}
			onClick={onClick}
		>
			{number}
		</div>
	);
};

export default ItemNavSlider;
