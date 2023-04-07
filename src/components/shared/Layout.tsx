import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
	children: ReactNode;
}

const Layout = (props: IProps) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
