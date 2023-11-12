import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAccess: localStorage.getItem('isAccess') || false,
    isSucceed: localStorage.getItem('isSucceed') || false,
    token: localStorage.getItem('token') || null,
    email: localStorage.getItem('email') || null,
    message: null,
    firstName: localStorage.getItem('firstName') || null,
    lastName: localStorage.getItem('lastName') || null,
    role: localStorage.getItem('role') || null,
    isSent: localStorage.getItem('isSent') || null,
    isAlumniGoogle: localStorage.getItem('isAlumniGoogle') || null,
    isCompanyGoogle: localStorage.getItem('isCompanyGoogle') || null
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        userAuthenticated: (state, action) => {
            localStorage.setItem('isAccess', action.payload.isAccess);
            localStorage.setItem('isSucceed', action.payload.isSucceed);
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('lastName', action.payload.lastName);
            localStorage.setItem('role', action.payload.role);
            localStorage.setItem('isAlumniGoogle', action.payload.role);
            localStorage.setItem('isCompanyGoogle', action.payload.role);

            state.isAccess = action.payload.isAccess;
            state.token = action.payload.token;
            state.isSucceed = action.payload.isSucceed;
            state.email = action.payload.email;
            state.message = action.payload.message; 
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.role = action.payload.role;
            state.isAlumniGoogle = action.payload.isAlumniGoogle
            state.isCompanyGoogle = action.payload.isCompanyGoogle
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
            localStorage.clear();
            return initialState;
        },
        clearAccount: () => {
            localStorage.clear();
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
            state.message = action.payload.message;;
        },
        clearMessage(state) {
            state.message = null;
        },
    },
});

export const { userAuthenticated, logout, authenticationError, forgotPasswordRequestSuccess, clearForgotPasswordRequestStatus, userChangePassword, clearAccount, clearMessage, verificationCodeRequestSuccess } = authenticationSlice.actions;

export default authenticationSlice.reducer;