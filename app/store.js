import { configureStore } from "@reduxjs/toolkit";
// import ToastMiddleware from "../middleware/ToastMiddleware";
// import thunk from "redux-thunk";

import authenticationSlice from "../app/slices/authenticationSlice";
import alumniSlice from "../app/slices/alumniSlice";
import alumniUserSlice from "../app/slices/alumniUserSlice";
import alumniProfileSlice from "../app/slices/alumniProfileSlice";

export default configureStore({
	reducer: {
		authentication: authenticationSlice,
		alumniSlice: alumniSlice,
		alumniUserSlice: alumniUserSlice,
		alumniProfile: alumniProfileSlice,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(ToastMiddleware, thunk),
});
