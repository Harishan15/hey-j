import { createTheme } from "@mui/material/styles";
import { orange, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: orange[500],
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: pink[500],
		},
	},
});
