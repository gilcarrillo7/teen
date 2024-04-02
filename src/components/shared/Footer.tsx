import * as React from "react";

import Logo from "../../images/home/logo_footer.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-screen bg-white text-gray1 flex flex-col justify-end">
      <div className="">
        <div className="container">
          <div className="flex justify-center py-4">
            <Button
              text="Book a demo"
              type="button"
              variant="dark"
              className="-mt-5 mb-5 sm:mb-0"
              size="lg"
              onClick={() =>
                window.open("https://calendly.com/teen-clara/30min")
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:order-2 sm:w-1/2 py-4 sm:py-8 sm:pl-4 ">
              <img src={Logo} alt="Logo" className="mb-2" />
              <p className="">To the moon and back 🚀</p>
            </div>
            {/* <div className="sm:order-1 sm:w-1/2 flex flex-col sm:border-r border-t sm:border-t-0 border-gray3 py-2 sm:py-8">
							<a href="#" className="text-gray4 mb-4">
								Community
							</a>
							<a href="#">Help</a>
							<a href="#">Discord</a>
							<a href="#">Instagram</a>
							<a href="#">Facebook</a>
						</div> */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray3">
        <div className="container flex justify-between py-4">
          <p className="">
            ©{new Date().getFullYear()} Teen Hire. All Copyrights reserved.
          </p>
          <p className="hidden sm:flex">
            <a
              href="https://app.teenhire.co/terms"
              target="_blank"
              className="hover:underline"
            >
              Terms & Conditions
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://app.teenhire.co/privacy"
              target="_blank"
              className="hover:underline"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
