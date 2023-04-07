import * as React from "react";

import Logo from "../../images/home/logo_footer.svg";

const Footer = () => {
	return (
		<div className="w-screen bg-white text-gray1 flex flex-col justify-end ">
			<div className="container">
				<div className="flex flex-col sm:flex-row">
					<div className="sm:order-2 sm:w-1/2 py-4 sm:py-8 sm:pl-4 ">
						<img src={Logo} alt="Logo" className="mb-2" />
						<p className="">
							The job of your dreams
							<br /> is waiting for you.
						</p>
					</div>
					<div className="sm:order-1 sm:w-1/2 flex flex-col border-r border-gray3 py-2 sm:py-8">
						<a href="#" className="text-gray4 mb-4">
							Community
						</a>
						<a href="#">Help</a>
						<a href="#">Discord</a>
						<a href="#">Instagram</a>
						<a href="#">Facebook</a>
					</div>
				</div>
			</div>
			<div className="border-t border-gray3">
				<div className="container flex justify-between py-4">
					<p className="">©2023 Teen Hire. All Copyrights reserved.</p>
					<p className="hidden sm:flex">Terms & Conditions, Privacy</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;