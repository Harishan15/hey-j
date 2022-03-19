import React from "react";
import Footer from "../components/base/Footer";
import Header from "../components/base/Header";

const MainLayout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
