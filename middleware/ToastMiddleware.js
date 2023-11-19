// import { toast } from "react-toastify";

// import {
// 	addAlumniError,
// 	deleteAlumni,
// 	deleteAlumniError,
// 	editAlumniError,
// 	getAllAlumniError,
// } from "../app/slices/alumniSlice";
// import { rejectCompanyError, verifyCompanyError } from "../app/companiesSlice";

const ToastMiddleware = () => (next) => (action) => {
	switch (action.type) {
		// alumni
		// case deleteAlumni.type:
		// 	console.log("Alumna deleted successfully");
		// 	break;
		// case getAllAlumniError.type:
		// 	console.log("Error loading alumni");
		// 	break;
		// case addAlumniError.type:
		// case editAlumniError.type:
		// case deleteAlumniError.type:
		// 	console.log(action.payload);
		// 	break;

		default:
			break;
	}
	return next(action);
};

export default ToastMiddleware;
