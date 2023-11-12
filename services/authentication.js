import {
	authenticationError,
	forgotPasswordRequestSuccess,
	userAuthenticated,
	userChangePassword,
	verificationCodeRequestSuccess,
} from "../app/authenticationSlice";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}/Auth`,
});

export const SignUpCompany = async (dispatch, credentials, fileUpload) => {
	try {
		const formData = new FormData();
		formData.append("fileUpload", fileUpload);
		formData.append("Email", credentials.Email);
		formData.append("Password", credentials.Password);
		// Ensure the other fields are added if they are not null
		if (credentials.FirstName) {
			formData.append("FirstName", credentials.FirstName);
		}
		if (credentials.LastName) {
			formData.append("LastName", credentials.LastName);
		}
		if (credentials.CompanyName) {
			formData.append("CompanyName", credentials.CompanyName);
		}
		// Add the isMoa field
		formData.append("isMoa", credentials.isMoa);
		const response = await axiosInstance.post("/signup/company", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isAccess: response.data.isAccess,
					isSucceed: response.data.isSucceed,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
					firstName: response.data.firstName,
					lastName: response.data.lastName,
					role: response.data.role,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data || "An error occurred while signing up.";
		dispatch(authenticationError(errorMessage));
	}
};

export const SignUpAlumni = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post("/signup/alumni", credentials);

		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isAccess: response.data.isAccess,
					isSucceed: response.data.isSucceed,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
					firstName: response.data.firstName,
					lastName: response.data.lastName,
					role: response.data.role,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.log("Error:", error);
		const errorMessage =
			error.response?.data || "An error occured while signing up";
		dispatch(authenticationError(errorMessage));
	}
};

export const SignIn = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post("/signin", credentials);
		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isAccess: response.data.isAccess,
					isSucceed: response.data.isSucceed,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
					firstName: response.data.firstName,
					lastName: response.data.lastName,
					role: response.data.role,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data || "An error occurred while signing in.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const LoginGoogle = async (dispatch, token) => {
	try {
		const response = await axiosInstance.post(`/google-login?token=${token}`);
		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					role: response.data.role,
					isAccess: response.data.isAccess,
					isSucceed: response.data.isSucceed,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"This is google: An error occurred while signing in.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const SignUpGoogleAlumni = async (dispatch, token, role) => {
	try {
		const response = await axiosInstance.post(
			`/google-alumni?token=${token}&role=${role}`
		);
		console.log(token);
		console.log(role);
		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isAlumniGoogle: response.data.isAlumniGoogle,
					role: response.data.role,
					isSucceed: response.data.isSucceed,
					isAccess: response.data.isAccess,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"This is google: An error occurred while signing up at alumni.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const SignUpGoogleAlumniUpdate = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post(
			"/google-alumni-update",
			credentials
		);
		console.log(response);
		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isAlumniGoogle: response.data.isAlumniGoogle,
					role: response.data.role,
					isSucceed: response.data.isSucceed,
					isAccess: response.data.isAccess,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"This is google: An error occurred while signing up at alumni.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const SignUpGoogleCompany = async (dispatch, token, role) => {
	try {
		const response = await axiosInstance.post(
			`/google-company?token=${token}&role=${role}`
		);
		console.log(token);
		console.log(role);
		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isCompanyGoogle: response.data.isCompanyGoogle,
					role: response.data.role,
					isSucceed: response.data.isSucceed,
					isAccess: response.data.isAccess,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"This is google: An error occurred while signing up at company.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const SignUpGoogleCompanyUpdate = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post(
			"/google-company-update",
			credentials
		);
		console.log(response);
		if (response.data.isSucceed) {
			dispatch(
				userAuthenticated({
					isCompanyGoogle: response.data.isCompanyGoogle,
					role: response.data.role,
					isSucceed: response.data.isSucceed,
					isAccess: response.data.isAccess,
					message: response.data.message,
					email: response.data.email,
					token: response.data.token,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"This is google: An error occurred while signing up at company.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const resetPasswordRequest = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post("/forgotpassword", credentials);
		console.log(response);
		if (response.data.isSucceed) {
			dispatch(
				forgotPasswordRequestSuccess({
					isSucceed: response.data.isSucceed,
					message: response.data.message,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"An error occurred while requesting to change password.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const verificationCode = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post(
			"/verification-code",
			credentials
		);
		console.log(response);
		if (response.data.isSucceed) {
			dispatch(
				verificationCodeRequestSuccess({
					isSucceed: response.data.isSucceed,
					message: response.data.message,
					isSent: response.data.isSent,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data ||
			"An error occurred while requesting to change password.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};

export const changePassword = async (dispatch, credentials) => {
	try {
		const response = await axiosInstance.post("/changepassword", credentials);

		if (response.data.isSucceed) {
			dispatch(
				userChangePassword({
					isSucceed: response.data.isSucceed,
					message: response.data.message,
				})
			);
		} else {
			dispatch(
				authenticationError({
					message: response.data.message,
				})
			);
		}
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data || "An error occurred while changing password.";
		dispatch(authenticationError({ message: errorMessage }));
	}
};
