import { createSlice, createAction } from "@reduxjs/toolkit";

// Error Actions
export const getAnnouncementsError = createAction('getAnnouncementsError');
export const getAlumniProfileError = createAction('getAlumniProfileError');
export const getEventsError = createAction('getEventsError');
export const editProfileError = createAction('editProfileError');
export const getJobsError = createAction('getJobsError');
export const getJobError = createAction('getJobError');
export const deleteApplyJobError = createAction('deleteApplyJobError');


export const alumniUserSlice = createSlice({
    name: 'alumni',
    initialState: {
        announcements: [],
        alumniProfile: null,
        events: [],
        errorMessage: null,
        jobList: [],
        job: null,
        appliedJobs: [],
    },
    reducers: {
        getAnnouncements: (state, action) => {
            return { ...state, announcements: [...action.payload] };
        },
        getEvents: (state, action) => {
            return { ...state, events: [...action.payload] };
        },
        getAlumniProfile: (state, action) => {
            return { ...state, alumniProfile: { ...action.payload } };
        },
        getJobs: (state, action) => {
            return { ...state, jobList: [...action.payload] };
        },
        getJob: (state, action) => {
            return { ...state, job: action.payload.data };
        },
        applyJob: (state, action) => {
            return { ...state, appliedJobs: action.payload.data };
        },

        getApplyJobs: (state, action) => {
            return { ...state, appliedJobs: action.payload.data };
        },
        setErrorMessage: (state, action) => {
            return { ...state, errorMessage: action.payload };
        },
        clearErrorMessage: (state) => {
            return { ...state, errorMessage: null };
        },
        editProfile: (state, action) => {
            const updatedAlumniProfile = { ...state.alumniProfile };
            for (const key in action.payload) {
                if (key in updatedAlumniProfile) {
                    updatedAlumniProfile[key] = action.payload[key];
                }
            }
            return { ...state, alumniProfile: updatedAlumniProfile };
        },

        deleteApplyJob: (state, action) => {
            if (!Array.isArray(state.appliedJobs)) {
                console.error('state.jobPost is not an array:', state.appliedJobs);
                return state;
            }
            const postIdToDelete = action.payload.id;
            const updatedJobPosts = state.appliedJobs.filter(job => job.id !== postIdToDelete);

            return {
                ...state,
                appliedJobs: updatedJobPosts,
            };
        },
    }
});

export const { getAnnouncements, deleteApplyJob, setErrorMessage, applyJob, getJobs, getApplyJobs, getJob, clearErrorMessage, getAlumniProfile, getEvents, editProfile } = alumniUserSlice.actions;

export default alumniUserSlice.reducer;
