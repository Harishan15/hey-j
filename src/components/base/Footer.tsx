import React from "react";
import { Box, Container } from "@mui/material";

const Footer: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{ width: "100%", height: "200px", bgcolor: "darkgreen" }}
		>
			<Container>Footer</Container>
		</Box>
	);
};

export default Footer;
