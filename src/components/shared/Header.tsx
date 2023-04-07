import React from "react";
import Logo from "../icons/Logo";

const Header = () => {
	return (
		<header>
			<div className="w-screen bg-white absolute top-0 z-10">
				<div className="container mx-auto flex items-center">
					<Logo />
				</div>
			</div>
		</header>
	);
};

export default Header;
