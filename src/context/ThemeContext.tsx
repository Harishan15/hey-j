import React, { useState, useEffect, createContext } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../libs/theme";

export const ThemeContext = createContext({ toggleColorMode: () => {} });

const CustomThemeProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState(lightTheme);
	const [mode, setMode] = React.useState("light");

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	useEffect(() => {
		mode === "light" ? setTheme(lightTheme) : setTheme(darkTheme);
	}, [mode]);

	return (
		<ThemeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default CustomThemeProvider;
