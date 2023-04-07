import React from "react";

import LogoSvg from "../../images/logo.svg";
import LogoGif from "../../images/logo.gif";

const Logo = () => {
	return (
		<div className="bg-white relative w-[50px] sm:w-[72px] h-[calc(25px+2rem)] sm:h-[calc(41px+2rem)] py-4 group cursor-pointer">
			<img
				src={LogoSvg}
				className="absolute top-0 left-0 w-full py-4"
				alt="logo"
			/>
			<img
				src={LogoGif}
				className="absolute top-0 left-0 w-full py-3 sm:py-2 hidden group-hover:block"
				alt="logo"
			/>
		</div>
	);
};

export default Logo;
