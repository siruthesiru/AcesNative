import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router";
import AccountVerify from "../components/accountverify/index";
import { clearAccount } from "../app/authenticationSlice";

const ProtectedRoute = ({ userRole }) => {
	const { isSucceed, role, isAccess } = useSelector(
		(state) => state.authentication
	);
	const dispatch = useDispatch();

	const isAuthorized = role === userRole;

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
