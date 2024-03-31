import React from "react";

const Button = ({
  text,
  type = "button",
  size = "sm",
  variant = "dark",
  className = "",
}: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "lg" | "sm";
  variant?: "dark" | "light" | "yellow";
  className?: string;
}) => {
  return (
    <button
      type={type}
      className={`w-full sm:w-auto rounded-full ${
        size === "sm"
          ? "py-1 sm:py-2 px-[8px] sm:px-[15px] text-base"
          : "py-4 sm:py-[24px] px-[40px] text-xl"
      } ${variant === "dark" ? "bg-blue2 hover:bg-blue1 text-white" : ""} ${
        variant === "light" ? "bg-blue1 hover:bg-yellow text-white" : ""
      } ${
        variant === "yellow"
          ? "bg-yellow hover:bg-blue1 hover:text-white text-blue2"
          : ""
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
