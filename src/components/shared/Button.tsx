import React from "react";

const Button = ({
  text,
  type = "button",
  size = "sm",
  variant = "dark",
  className = "",
  onClick,
}: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "lg" | "sm";
  variant?: "dark" | "light" | "yellow";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className={`w-full sm:w-auto rounded-full ${
        size === "sm"
          ? "py-1 sm:py-2 px-[8px] sm:px-[15px] text-base"
          : "py-3 sm:py-3 px-[32px] text-lg sm:text-xl"
      } ${variant === "dark" ? "bg-blue2 hover:bg-blue1 text-white" : ""} ${
        variant === "light" ? "bg-blue1 hover:bg-yellow text-white" : ""
      } ${
        variant === "yellow"
          ? "bg-yellow hover:bg-blue1 hover:text-white text-blue2"
          : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
