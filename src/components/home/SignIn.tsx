import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import { supabaseClient } from "../../libs/client";

const SignIn: React.FC = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<null | any>(null);

	const submitHandler = async (event: any) => {
		event.preventDefault();
		setIsLoading(true);
		setError(null);

		try {
			const { error } = await supabaseClient.auth.signIn({
				email,
			});
			if (error) {
				setError(error.message);
			} else {
				setIsSubmitted(true);
			}
		} catch (error: any) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const changeHandler = (event: any) => {
		setEmail(event.target.value);
	};

	return (
		<Box sx={{ bgcolor: "#ccc", minHeight: "80vh" }}>
			<Box>
				<Typography textAlign="center">Welcome to Todo App</Typography>
				{error && (
					<Typography>
						ERROR : <Typography textAlign="center">{error}</Typography>
					</Typography>
				)}
				<Box>
					{isSubmitted ? (
						<Typography textAlign="center" color="secondary">
							Please check {email} for login link
						</Typography>
					) : (
						<Box component="form" onSubmit={submitHandler}>
							<Stack spacing="6">
								<FormControl id="email">
									<FormLabel>Email address</FormLabel>
									<Input
										name="email"
										type="email"
										autoComplete="email"
										required
										value={email}
										onChange={changeHandler}
									/>
								</FormControl>

								<LoadingButton
									loading={isLoading}
									variant="outlined"
									type="submit"
									color="primary"
									loadingPosition="start"
									startIcon={<SaveIcon />}
								>
									Sign in
								</LoadingButton>
							</Stack>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default SignIn;
