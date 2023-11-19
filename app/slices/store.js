import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import ToastMiddleware from "../../middleware/ToastMiddleware";
// import thunk from "redux-thunk";

import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import { PersistGate } from "redux-persist/integration/react";

import authenticationSlice from "./authenticationSlice";
import alumniUserSlice from "./alumniUserSlice";
import alumniProfileSlice from "./alumniProfileSlice";

const rootReducer = combineReducers({
	authentication: authenticationSlice,
	alumniUserSlice: alumniUserSlice,
	alumniProfile: alumniProfileSlice,
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

const persistor = persistStore(store);

export { store, persistor };
