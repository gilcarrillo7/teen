import React, { useState } from "react";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Select from "./shared/Select";
import { BeatLoader } from "react-spinners";
const Form = () => {
	const [status, setStatus] = useState<"pending" | "sending" | "sent">(
		"pending"
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("sending");
		setTimeout(() => setStatus("sent"), 1500);
	};
	return (
		<div className="bg-white mx-auto w-full lg:w-[800px] shadow-xl text-center p-4 sm:p-12 rounded-2xl">
			<p className="font-walsheimpro text-2xl sm:text-4xl mb-8">
				Let's schedule a call and work together
			</p>
			<form className="w-full" onSubmit={(e) => handleSubmit(e)}>
				<Input placeholder="Full name" />
				<div className="flex flex-col sm:flex-row sm:gap-6">
					<Input placeholder="Phone" type="number" />
					<Input placeholder="Position" />
				</div>
				<div className="flex flex-col sm:flex-row sm:gap-6">
					<Input placeholder="Company" />
					<Input placeholder="Email" type="mail" />
				</div>
				<Select placeholder="What position do you need to cover?">
					<option>One</option>
					<option>Two</option>
					<option>Three</option>
				</Select>
				<div className="flex justify-end">
					{status === "sent" && (
						<p className="font-walsheimpro text-blue1 text-xl sm:text-2xl">
							Thanks, we will get back to you soon.{" "}
						</p>
					)}
					{status === "sending" && <BeatLoader color="#191565" />}
					{status === "pending" && <Button text="Send inquiry" type="submit" />}
				</div>
			</form>
		</div>
	);
};

export default Form;
