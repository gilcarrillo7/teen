import React, { useState, useRef } from "react";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Select from "./shared/Select";
import { BeatLoader } from "react-spinners";

import sendEmail from "../functions/sendEmail";

const Form = () => {
	const formRef = useRef<HTMLFormElement>();
	const [status, setStatus] = useState<"pending" | "sending" | "sent">(
		"pending"
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("sending");
		sendEmail(
			e.currentTarget.elements["name"].value,
			e.currentTarget.elements["phone"].value,
			e.currentTarget.elements["position"].value,
			e.currentTarget.elements["company"].value,
			e.currentTarget.elements["email"].value
		)
			.then((_res) => {
				setStatus("sent");
				formRef.current?.reset();
			})
			.catch((_res) => {
				setStatus("pending");
			});
	};
	return (
		<div className="bg-white mx-auto w-full lg:w-[800px] shadow-xl text-center p-4 sm:p-12 rounded-2xl">
			<p className="font-walsheimpro text-2xl sm:text-4xl mb-8">
				Let's schedule a call and work together
			</p>
			<form ref={formRef} className="w-full" onSubmit={(e) => handleSubmit(e)}>
				<Input name="name" placeholder="Full name" required />
				<div className="flex flex-col sm:flex-row sm:gap-6">
					<Input name="phone" placeholder="Phone" type="tel" />
					<Input name="position" placeholder="Position" />
				</div>
				<div className="flex flex-col sm:flex-row sm:gap-6">
					<Input name="company" placeholder="Company" />
					<Input name="email" placeholder="Email" type="email" required />
				</div>
				{/* <Select placeholder="What position do you need to cover?">
					<option>One</option>
					<option>Two</option>
					<option>Three</option>
				</Select> */}
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
