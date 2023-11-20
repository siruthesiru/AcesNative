import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AccountVerify from "../components/accountverify/index";
import AddMoreInfoForAlumniGoogle from "../components/addmoreinfoforalumnigoogle/index";
import AddMoreInfoForCompanyGoogle from "../components/addmoreinfoforcompanygoogle/index";

const UnprotectedRoute = () => {
	const { isSucceed, role, isAccess, isAlumniGoogle, isCompanyGoogle } =
		useSelector((state) => state.authentication);
	if (isAccess === false) {
		return isSucceed ? <AccountVerify /> : <Outlet />;
	} else if (isAlumniGoogle === true && isAccess === true) {
		return isSucceed ? <AddMoreInfoForAlumniGoogle /> : <Outlet />;
	} else if (isCompanyGoogle === true && isAccess === true) {
		return isSucceed ? <AddMoreInfoForCompanyGoogle /> : <Outlet />;
	} else {
		let content;
		switch (role) {
			case "ALUMNI":
				content = <Navigate to="/alumni/dashboard" />;
				break;
			default:
				content = <Outlet />;
				break;
		}

		return isSucceed ? content : <Outlet />;
	}
};

export default UnprotectedRoute;
