import { createSlice, createAction } from '@reduxjs/toolkit';

export const deleteAlumniError = createAction('deleteAlumniError');
export const editAlumniError = createAction('editAlumniError');
export const addAlumniError = createAction('addAlumniError');
export const getAllAlumniError = createAction('getAllAlumniError');
export const getProfileError = createAction('getProfileError');
export const editProfileError = createAction('editProfileError');

export const alumniSlice = createSlice({
    name: 'admin_alumni',
    initialState: {
        alumni: [],
        adminProfile: null,
        errorMessage: null,
    },
    reducers: {
        getAlumni: (state, action) => {
            return { ...state, alumni: [...action.payload] };
        },
        getProfile: (state, action) => {
            return { ...state, adminProfile: { ...action.payload } };
        },
        getAlumnusByID: (state, action) => {
            const updatedAlumna = state.alumni.map((alumna) => {
                if (alumna.id === action.payload.id) {
                    return { ...alumna, ...action.payload };
                }
                return alumna;
            });

            return { ...state, alumni: updatedAlumna };
        },
        addAlumni: (state, action) => {
            return { ...state, alumni: [action.payload, ...state.alumni] };
        },
        editAlumni: (state, action) => {
            const alumni = state.alumni.map((alumna) => {
                if (alumna.id === action.payload.id) {
                    return { ...alumna, ...action.payload };
                }
                return alumna;
            });
            return { ...state, alumni: [...alumni] };
        },
        verifyAlumni: (state, action) => {
            const alumni = state.alumni.map((alumna) => {
                if (alumna.id === action.payload.id) {
                    return { ...alumna, ...action.payload };
                }
                return alumna;
            });
            return { ...state, alumni: [...alumni] };
        },
        deleteAlumni: (state, action) => {
            const alumni = state.alumni.filter(alumnus => alumnus.id !== action.payload.id);
            return { ...state, alumni: [...alumni] };
        },
        deleteVerifyAlumni: (state, action) => {
            const alumni = state.alumni.filter(alumnus => alumnus.id !== action.payload.id);
            return { ...state, alumni: [...alumni] };
        },
        editProfile: (state, action) => {
            return { ...state, userProfile: { ...action.payload } };
        },
        setErrorMessage: (state, action) => {
            return { ...state, errorMessage: action.payload };
        },
        clearErrorMessage: (state) => {
            return { ...state, errorMessage: null };
        },
    }
});

export const {
    getAlumni,
    getAlumnusByID,
    addAlumni,
    editAlumni,
    deleteAlumni,
    getProfile,
    editProfile,
    deleteVerifyAlumni,
    setErrorMessage,
    clearErrorMessage
} = alumniSlice.actions;

export default alumniSlice.reducer;
