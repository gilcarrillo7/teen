import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const sendEmail = async (name, phone, position, company, email) => {
	const message = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p><p>Position: ${position}</p>`;
	const collectionRef = collection(db, "mail");
	const emailContent = {
		to: ["hello@teenhire.co"],
		message: {
			subject: "Teen Contact",
			html: message,
		},
	};

	return addDoc(collectionRef, emailContent);
};

export default sendEmail;
