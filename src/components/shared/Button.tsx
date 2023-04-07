import React from "react";

const Button = ({
	text,
	type = "button",
}: {
	text: string;
	type?: "button" | "submit" | "reset" | undefined;
}) => {
	return (
		<button
			type={type}
			className="w-full sm:w-auto bg-blue2 hover:bg-blue1 text-white text-xl py-4 sm:py-[24px] px-[40px] rounded-full"
		>
			{text}
		</button>
	);
};

export default Button;
