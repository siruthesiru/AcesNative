import React, { useEffect } from "react";
import { router } from "expo-router";
import {
	Alert,
	AlertTitle,
	Button,
	Container,
	Typography,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import {
	clearForgotPasswordRequestStatus,
	clearAccount,
} from "../../app/slices/authenticationSlice";

const AccountVerify = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Use an empty dependency array to ensure the effect runs only once after initial render
	useEffect(() => {
		// Dispatch the clearAccount action after 1 minute (60000 milliseconds)
		const clearAccountTimeout = setTimeout(() => {
			dispatch(clearAccount());
		}, 20000); // 1 minute

		// Cleanup function to clear the timeout if the component unmounts
		return () => {
			clearTimeout(clearAccountTimeout);
		};
	}, [dispatch]);
	const handleNavigateToLogin = () => {
		navigate("/signin");
		dispatch(clearForgotPasswordRequestStatus());
	};

	return (
		<Container maxWidth="sm">
			<div style={{ marginTop: "2rem", textAlign: "center" }}>
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					Wait for the department to verify your credentials. You will receive
					an email notification once the process is complete. —{" "}
					<strong>Wait for Verification!</strong>
				</Alert>

				<Typography variant="body2" style={{ marginTop: "1rem" }}>
					Thank you for signing up.
				</Typography>

				<Button
					variant="contained"
					color="primary"
					onClick={handleNavigateToLogin}
					style={{ marginTop: "1rem" }}
					// startIcon={<FirstPage />}
				>
					Back to Login
				</Button>
			</div>
		</Container>
	);
};

export default AccountVerify;
