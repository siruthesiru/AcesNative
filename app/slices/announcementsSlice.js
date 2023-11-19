import { createSlice, createAction } from "@reduxjs/toolkit";

//Error Actions
export const getAllAnnouncementsError = createAction('getAllAnnouncementsError');
export const addAnnouncementError = createAction('addAnnouncementError');
export const editAnnouncementError = createAction('editAnnouncementError');
export const deleteAnnouncementError = createAction('deleteAnnouncementError');
export const getAnnouncementByIDError = createAction('getAnnouncementByIDError');


export const announcementsSlice = createSlice({
    name: 'announcements',
    initialState: {
        announcements: [],
        errorMessage: null,
    },
    reducers: {
        getAllAnnouncements: (state, action) => {
            return { ...state, announcements: [...action.payload] };
        },
        getAnnouncementByID: (state, action) => {
            const updatedAnnouncements = state.announcements.map((announcement) => {
                if (announcement.id === action.payload.id) {
                    return { ...announcement, ...action.payload };
                }
                return announcement;
            });

            return { ...state, announcements: updatedAnnouncements };
        },

        addAnnouncement: (state, action) => {
            return { ...state, announcements: [action.payload, ...state.announcements] };
        },
        editAnnouncement: (state, action) => {
            const announcements = state.announcements.map(announcement => {
                if (announcement.id === action.payload.id) {
                    announcement = action.payload
                }
                return announcement;
            });
            return { ...state, announcements: [...announcements] };
        },
        deleteAnnouncement: (state, action) => {
            const announcements = state.announcements.filter(announcement =>
                announcement.id !== action.payload.id);
            return { ...state, announcements: [...announcements] }
        },
        setErrorMessage: (state, action) => {
            return { ...state, errorMessage: action.payload };
        },
        clearErrorMessage: (state,) => {
            return { ...state, errorMessage: null };
        },
    }

})

export const { getAllAnnouncements, getAnnouncementByID, addAnnouncement, editAnnouncement, deleteAnnouncement, setErrorMessage, clearErrorMessage } = announcementsSlice.actions;

export default announcementsSlice.reducer;