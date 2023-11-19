import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "expo-router";
import AccountVerify from "../components/accountverify";
import { clearAccount } from "../app/slices/authenticationSlice";

const ProtectedRoute = () => {
	const { isSucceed, role, isAccess } = useSelector(
		(state) => state.authentication
	);
	const dispatch = useDispatch();

	const isAuthorized = role === "ALUMNI";

	if (isAccess === false) {
		if (!isAuthorized || !isSucceed) {
			return <Navigate to="/" />;
		} else {
			return <AccountVerify />;
		}
	} else {
		if (isAccess === true) {
			return <Outlet />;
		} else {
			dispatch(clearAccount());
		}
	}
};

export default ProtectedRoute;
