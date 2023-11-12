import { configureStore } from "@reduxjs/toolkit";
// import ToastMiddleware from "../middleware/ToastMiddleware";
// import thunk from "redux-thunk";

import authenticationSlice from "./authenticationSlice";
import alumniSlice from "./alumniSlice";
import alumniUserSlice from "./alumniUserSlice";
import alumniProfileSlice from "./alumniProfileSlice";

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
