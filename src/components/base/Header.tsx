import React, { useContext } from "react";
import {
	AppBar,
	Button,
	Toolbar,
	Typography,
	useScrollTrigger,
	Slide,
	CssBaseline,
} from "@mui/material";

import { ThemeContext } from "../../context/ThemeContext";

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
};

const Header = (props: Props) => {
	const colorMode = useContext(ThemeContext);
	return (
		<>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Hey J.
						</Typography>
						<Button color="inherit" onClick={colorMode.toggleColorMode}>
							Theme
						</Button>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
};

export default Header;
