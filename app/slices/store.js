import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import { combineReducers } from "redux";

import authenticationSlice from "./authenticationSlice";
import alumniUserSlice from "./alumniUserSlice";
import alumniProfileSlice from "./alumniProfileSlice";

const rootReducer = combineReducers({
	authentication: authenticationSlice,
	alumniUserSlice: alumniUserSlice,
	alumniProfile: alumniProfileSlice,
});

const store = configureStore(
	{ reducer: rootReducer },
	{},
	compose(applyMiddleware(thunk))
);

export { store };
