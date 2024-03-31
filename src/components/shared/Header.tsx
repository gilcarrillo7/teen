import React from "react";
import Logo from "../icons/Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="w-screen bg-white absolute top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex gap-2 sm:gap-4">
            <Button
              text="Book a Demo"
              type="button"
              variant="yellow"
              className="min-w-[125px]"
            />
            <Button
              text="Login"
              type="button"
              variant="dark"
              className="min-w-[75px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
