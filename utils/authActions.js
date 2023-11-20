import axios from "@axios";
import { getItem, setItem, removeItem } from "@helpers/asyncStorage";
import { UserLoginActions, RegisterActions, UserDetailActions } from "./types";
import { workerServicesInitialValues } from "../reducers/workerServicesReducer";
import { userDetailsInitialValues } from "../reducers/userDetailsReducer";

export const userLogin = (navigation, email, password) => async (dispatch) => {
	let token = await getItem("token");
	let isWorker = JSON.parse(await getItem("is_worker"));
	dispatch({ type: UserLoginActions.USER_LOADING, payload: true });

	//IF TOKEN ALREADY EXISTS
	if (token) {
		console.log("Token Already Exists - userLoginAction");

		try {
			let { data } = await axios.get("/api/auth/get-details", {
				headers: { Authorization: `Bearer ${token}` },
			});

			if (data) {
				dispatch({
					type: UserLoginActions.USER_LOGIN_SUCCESS,
					payload: isWorker,
				});
				dispatch({
					type: UserDetailActions.USER_DETAILS_SUCCESS,
					payload: data.user,
				});

				// IF USER NOT WORKER REDIRECT TO DASHBOARD
				if (!isWorker) {
					navigation.navigate("Dashboard");
					return;
				}

				// IF USER IS WORKER
				if (data.user.is_verified) {
					console.log("User is Verified");
					navigation.navigate("Dashboard");
					return;
				}

				// IF WORKER NOT VERIFIED AND HAS PENDING REQUEST
				if (data.user.pending_verification) {
					console.log("User has pending request");
					navigation.navigate("Dashboard");
				} else {
					// IF WORKER NOT VERIFIED AND HAS NO PENDING REQUEST
					console.log("User is not Verified");
					navigation.navigate("GetVerified");
				}
			}
		} catch (err) {
			console.log("Error On Refresh");
			let error = err.response?.data.error || err;
			dispatch({
				type: UserLoginActions.USER_LOGIN_FAIL,
				payload: error,
			});
			userForceLogout(navigation, dispatch);
		}
	} else {
		console.log("No Token");
		doUserLogin(navigation, email, password, dispatch);
	}
};

// USER FORCED LOGOUT HELPER FUNCTION
export const userForceLogout = async (navigation, dispatch) => {
	removeItem("token");
	removeItem("is_worker");

	console.log("Force Logout");

	dispatch({
		type: RegisterActions.REGISTER_LOGOUT,
	});
	dispatch({
		type: UserDetailActions.USER_DETAILS_LOGOUT,
		payload: userDetailsInitialValues,
	});
	dispatch({
		type: WorkerServiceActions.WORKER_SERVICE_LOGOUT,
		payload: workerServicesInitialValues,
	});

	navigation.navigate("Login");
};

// USER LOGIN HELPER FUNCTION
const doUserLogin = async (navigation, email, password, dispatch) => {
	if (!email && !password) {
		console.log("No email and pass provided");
		dispatch({ type: UserLoginActions.USER_LOGIN_FAIL });
		return;
	}

	try {
		console.log("Axios Call");
		let { data } = await axios.post("/api/auth/login", {
			email,
			password,
		});

		console.log("Storing Token");
		setItem("token", data.token);
		setItem("is_worker", JSON.stringify(data.is_worker));
		dispatch({
			type: UserLoginActions.USER_LOGIN_SUCCESS,
			payload: data.is_worker,
		});

		dispatch({
			type: UserDetailActions.USER_DETAILS_SUCCESS,
			payload: data.user,
		});

		// IF USER IS A CLIENT
		if (!data.is_worker) {
			navigation.navigate("Dashboard");
			return;
		}

		// IF WORKER IS VERIFIED
		if (data.user.is_verified) {
			console.log("User is Verified");
			navigation.navigate("Dashboard");
			return;
		}

		// IF WORKER HAS PENDING VERIFICATION REQUEST
		if (data.user.pending_verification) {
			console.log("User has verification request");
			navigation.navigate("Dashboard");
		} else {
			console.log("User is not Verified");
			navigation.navigate("GetVerified");
		}
	} catch (err) {
		const error = err.response?.data.error || err;
		// console.log(error);
		console.log("Do user login error");
		dispatch({ type: UserLoginActions.USER_LOGIN_FAIL, payload: `${error}` });
	}
};

export const userLogout = () => async (dispatch) => {
	console.log("Removing items");
	removeItem("token");
	removeItem("is_worker");
	console.log("Dispatching Logout");
	// RESET ALL IMPORTANT REDUCER STATE
	dispatch({
		type: UserLoginActions.USER_LOGOUT,
	});
	dispatch({
		type: RegisterActions.REGISTER_LOGOUT,
	});
	dispatch({
		type: UserDetailActions.USER_DETAILS_LOGOUT,
		payload: userDetailsInitialValues,
	});
	dispatch({
		type: WorkerServiceActions.WORKER_SERVICE_LOGOUT,
		payload: workerServicesInitialValues,
	});
	console.log("Dispatched Logout");
};
