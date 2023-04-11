import React from "react";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Select from "./shared/Select";
const Form = () => {
	return (
		<div className="bg-white mx-auto w-full lg:w-[800px] shadow-xl text-center p-4 sm:p-12 ">
			<p className="font-walsheimpro text-2xl sm:text-4xl mb-8">
				Let's Schedule a call and work together
			</p>
			<form className="w-full">
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
					<Button text="Send inquiry" type="submit" />
				</div>
			</form>
		</div>
	);
};

export default Form;
