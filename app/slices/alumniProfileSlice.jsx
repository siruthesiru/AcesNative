import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: localStorage.getItem('message') || null,

    profileImage: localStorage.getItem('profileImage') || null,

    firstName: localStorage.getItem('firstName') || null,
    middleName: localStorage.getItem('middleName') || null,
    lastName: localStorage.getItem('lastName') || null,

    gender: localStorage.getItem('gender') || null,
    birthday: localStorage.getItem('birthday') || null,
    alumniAddress: localStorage.getItem('alumniAddress') || null,

    email: localStorage.getItem('email') || null,
    idNum: localStorage.getItem('idNum') || null,
    mobileNumber: localStorage.getItem('mobileNumber') || null,

    courses: localStorage.getItem('courses') || null,
    department: localStorage.getItem('department') || null,
    syGraduated: localStorage.getItem('syGraduated') || null,

    isEmployed: localStorage.getItem('isEmployed') || false,
    companyName: localStorage.getItem('companyName') || null,
    companyAddress: localStorage.getItem('companyAddress') || null,
    occupation: localStorage.getItem('occupation') || null,
    alumni_Profiles: localStorage.getItem('alumni_Profiles') || null,

    skills: localStorage.getItem('skills') || null,
    resume: localStorage.getItem('resume') || null,
};

export const alumniProfileSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        alumniProfile: (state, action) => {
            localStorage.setItem('message', action.payload.message);
            
            localStorage.setItem('profileImage', action.payload.profileImage);

            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('middleName', action.payload.middleName);
            localStorage.setItem('lastName', action.payload.lastName);

            localStorage.setItem('gender', action.payload.gender);
            localStorage.setItem('birthday', action.payload.birthday);
            localStorage.setItem('alumniAddress', action.payload.alumniAddress);
            
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('idNum', action.payload.idNum);
            localStorage.setItem('mobileNumber', action.payload.mobileNumber);
            
            localStorage.setItem('courses', action.payload.courses);
            localStorage.setItem('department', action.payload.department);
            localStorage.setItem('syGraduated', action.payload.syGraduated);
            
            localStorage.setItem('isEmployed', action.payload.isEmployed);
            localStorage.setItem('companyName', action.payload.companyName);
            localStorage.setItem('companyAddress', action.payload.companyAddress);
            localStorage.setItem('occupation', action.payload.occupation);            
            localStorage.setItem('alumni_Profiles', action.payload.alumni_Profiles);
            
            localStorage.setItem('skills', action.payload.skills);
            localStorage.setItem('resume', action.payload.resume);

            
            state.message = action.payload.message;

            state.profileImage = action.payload.profileImage;

            state.firstName = action.payload.firstName;
            state.middleName = action.payload.middleName
            state.lastName = action.payload.lastName

            state.gender = action.payload.gender;
            state.birthday = action.payload.birthday;
            state.alumniAddress = action.payload.alumniAddress;

            state.email = action.payload.email
            state.idNum = action.payload.idNum
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