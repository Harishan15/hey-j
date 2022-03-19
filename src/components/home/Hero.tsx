import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

const Hero: React.FC = () => {
	const colorMode = React.useContext(ThemeContext);
	return (
		<Container sx={{ height: "30vh" }}>
			<Typography>Hello World</Typography>

			<Button onClick={colorMode.toggleColorMode}>theme</Button>
		</Container>
	);
};

export default Hero;
