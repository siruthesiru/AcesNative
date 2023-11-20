import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
	name: "authentication",
	initialState: {
		isAccess: false,
		isSucceed: false,
		token: null,
		email: null,
		message: null,
		firstName: null,
		lastName: null,
		role: null,
		isSent: null,
		isAlumniGoogle: null,
		isCompanyGoogle: null,
	},
	reducers: {
		userAuthenticated: (state, action) => {
			setItem("isAccess", action.payload.isAccess);
			setItem("isSucceed", action.payload.isSucceed);
			setItem("token", action.payload.token);
			setItem("email", action.payload.email);
			setItem("firstName", action.payload.firstName);
			setItem("lastName", action.payload.lastName);
			setItem("role", action.payload.role);
			setItem("isAlumniGoogle", action.payload.role);
			setItem("isCompanyGoogle", action.payload.role);

			state.isAccess = action.payload.isAccess;
			state.token = action.payload.token;
			state.isSucceed = action.payload.isSucceed;
			state.email = action.payload.email;
			state.message = action.payload.message;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.role = action.payload.role;
			state.isAlumniGoogle = action.payload.isAlumniGoogle;
			state.isCompanyGoogle = action.payload.isCompanyGoogle;
		},
		authenticationError: (state, action) => {
			state.isAccess = false;
			state.isSucceed = false;
			state.isCompanyGoogle = false;
			state.isAlumniGoogle = false;
			state.message = action.payload.message;
			state.email = null;
			state.token = null;
		},
		logout: () => {
			clear();
			return initialState;
		},
		clearAccount: () => {
			clear();
			return initialState;
		},
		forgotPasswordRequestSuccess: (state, action) => {
			state.isAccess = action.payload.isAccess;
			state.isSucceed = action.payload.isSucceed;
			state.message = action.payload.message;
		},
		clearForgotPasswordRequestStatus: (state) => {
			state.isAccess = false;
			state.isSucceed = false;
			state.message = null;
			state.verificationCode = null;
			state.isSent = false;
		},
		verificationCodeRequestSuccess: (state, action) => {
			state.isAccess = action.payload.isAccess;
			state.isSucceed = action.payload.isSuccess;
			state.message = action.payload.message;
			state.isSent = action.payload.isSent;
		},
		userChangePassword: (state, action) => {
			state.isAccess = action.payload.isAccess;
			state.isSucceed = action.payload.isSucceed;
			state.message = action.payload.message;
		},
		clearMessage(state) {
			state.message = null;
		},
	},
});

export const {
	userAuthenticated,
	logout,
	authenticationError,
	forgotPasswordRequestSuccess,
	clearForgotPasswordRequestStatus,
	userChangePassword,
	clearAccount,
	clearMessage,
	verificationCodeRequestSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
