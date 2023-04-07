import React from "react";
import ItemNavSlider from "./ItemNavSlider";

const MobileNavSlider = ({
	activeIndex,
	onClick,
}: {
	activeIndex: number;
	onClick: any;
}) => {
	return (
		<div className="sm:hidden order-2 w-full flex items-center justify-between mb-3">
			{[1, 2, 3, 4, 5].map((item) => (
				<ItemNavSlider
					key={`navItem${item}`}
					number={item}
					onClick={() => onClick(item)}
					active={item === activeIndex}
				/>
			))}
		</div>
	);
};

export default MobileNavSlider;
