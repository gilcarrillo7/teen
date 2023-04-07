import React, { ReactNode } from "react";
import MobileNavSlider from "./MobileNavSlider";

const HeroContainer = ({
	img,
	variant,
	bottomText,
	children,
	mobileActiveIndex,
	mobileOnClick,
}: {
	img: any;
	variant: string;
	bottomText: string;
	children: ReactNode;
	mobileActiveIndex: number;
	mobileOnClick: any;
}) => {
	return (
		<div className="w-screen min-h-screen flex sm:items-center">
			<div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
				<div
					className={`sm:w-2/3 lg:w-2/5 ${
						variant === "left" ? "order-1" : "order-1 lg:order-3"
					}`}
				>
					<img src={img} className="mx-auto" alt="" />
				</div>
				<MobileNavSlider
					activeIndex={mobileActiveIndex}
					onClick={mobileOnClick}
				/>
				<div
					className={`lg:w-2/5 flex items-center ${
						variant === "left" ? "order-3" : "order-3 lg:order-1"
					}`}
				>
					<div
						className={`${variant === "left" ? "text-left" : "lg:text-right"}`}
					>
						<p className={`font-walsheimpro mb-2 text-2xl sm:text-3xl lg:text-5xl`}>
							{children}
						</p>
						<p className="text-base sm:text-lg lg:text-xl">{bottomText}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroContainer;
