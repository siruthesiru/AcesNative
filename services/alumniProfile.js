import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	alumniProfile,
	alumniProfileError,
} from "../app/slices/alumniProfileSlice";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}/Alumni`,
});

axiosInstance.interceptors.request.use((config) => {
	config.headers = { authorization: "Bearer " + AsyncStorage.getItem("token") };
	return config;
});

export const getAlumniProfile = async (dispatch) => {
	try {
		const response = await axiosInstance.get("/Profile");
		console.log(response);
		console.log(response.data);
		dispatch(
			alumniProfile({
				message: response.data.message,

				profileImage: response.data.profileImage,

				firstName: response.data.firstName,
				middleName: response.data.middleName,
				lastName: response.data.lastName,

				gender: response.data.gender,
				birthday: response.data.birthday,
				alumniAddress: response.data.alumniAddress,

				email: response.data.email,
				idNum: response.data.idNum,
				mobileNumber: response.data.mobileNumber,

				courses: response.data.courses,
				department: response.data.department,
				syGraduated: response.data.syGraduated,

				isEmployed: response.data.isEmployed,
				companyName: response.data.companyName,
				companyAddress: response.data.companyAddress,
				occupation: response.data.occupation,
				alumni_Profiles: response.data.alumni_Profiles,

				skills: response.data.skills,
				resume: response.data.resume,
			})
		);
	} catch (error) {
		console.error("Error:", error);
		const errorMessage =
			error.response?.data || "There is something wrong when fetching data";
		dispatch(alumniProfileError({ message: errorMessage }));
	}
};
