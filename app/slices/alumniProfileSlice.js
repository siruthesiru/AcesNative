import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
	message: null,

	profileImage: null,

	firstName: null,
	middleName: null,
	lastName: null,

	gender: null,
	birthday: null,
	alumniAddress: null,

	email: null,
	idNum: null,
	mobileNumber: null,

	courses: null,
	department: null,
	syGraduated: null,

	isEmployed: false,
	companyName: null,
	companyAddress: null,
	occupation: null,
	alumni_Profiles: null,

	skills: null,
	resume: null,
};

export const alumniProfileSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		alumniProfile: (state, action) => {
			AsyncStorage.setItem("message", action.payload.message);

			AsyncStorage.setItem("profileImage", action.payload.profileImage);

			AsyncStorage.setItem("firstName", action.payload.firstName);
			AsyncStorage.setItem("middleName", action.payload.middleName);
			AsyncStorage.setItem("lastName", action.payload.lastName);

			AsyncStorage.setItem("gender", action.payload.gender);
			AsyncStorage.setItem("birthday", action.payload.birthday);
			AsyncStorage.setItem("alumniAddress", action.payload.alumniAddress);

			AsyncStorage.setItem("email", action.payload.email);
			AsyncStorage.setItem("idNum", action.payload.idNum);
			AsyncStorage.setItem("mobileNumber", action.payload.mobileNumber);

			AsyncStorage.setItem("courses", action.payload.courses);
			AsyncStorage.setItem("department", action.payload.department);
			AsyncStorage.setItem("syGraduated", action.payload.syGraduated);

			AsyncStorage.setItem("isEmployed", action.payload.isEmployed);
			AsyncStorage.setItem("companyName", action.payload.companyName);
			AsyncStorage.setItem("companyAddress", action.payload.companyAddress);
			AsyncStorage.setItem("occupation", action.payload.occupation);
			AsyncStorage.setItem("alumni_Profiles", action.payload.alumni_Profiles);

			AsyncStorage.setItem("skills", action.payload.skills);
			AsyncStorage.setItem("resume", action.payload.resume);

			state.message = action.payload.message;

			state.profileImage = action.payload.profileImage;

			state.firstName = action.payload.firstName;
			state.middleName = action.payload.middleName;
			state.lastName = action.payload.lastName;

			state.gender = action.payload.gender;
			state.birthday = action.payload.birthday;
			state.alumniAddress = action.payload.alumniAddress;

			state.email = action.payload.email;
			state.idNum = action.payload.idNum;
			state.mobileNumber = action.payload.mobileNumber;

			state.courses = action.payload.courses;
			state.department = action.payload.department;
			state.syGraduated = action.payload.syGraduated;

			state.isEmployed = action.payload.isEmployed;
			state.companyName = action.payload.companyName;
			state.companyAddress = action.payload.companyAddress;
			state.occupation = action.payload.occupation;
			state.alumni_Profiles = action.payload.alumni_Profiles;

			state.skills = action.payload.skills;
			state.resume = action.payload.resume;
		},
		alumniProfileError: (state, action) => {
			state.message = action.payload.message;

			state.profileImage = null;

			state.firstName = null;
			state.middleName = null;
			state.lastName = null;

			state.gender = null;
			state.birthday = null;
			state.alumniAddress = null;

			state.email = null;
			state.idNum = null;
			state.mobileNumber = null;

			state.courses = null;
			state.department = null;
			state.syGraduated = null;

			state.isEmployed = false;
			state.companyName = null;
			state.companyAddress = null;
			state.occupation = null;
			state.alumni_Profiles = null;

			state.skills = null;
			state.resume = null;
		},
	},
});

export const { alumniProfile, alumniProfileError } = alumniProfileSlice.actions;

export default alumniProfileSlice.reducer;
