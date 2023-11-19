import { createSlice, createAction } from '@reduxjs/toolkit';

//Error Actions
export const getAllEventsError = createAction('getAllEventsError');
export const addEventError = createAction('addEventError');
export const editEventError = createAction('editEventError');
export const deleteEventError = createAction('deleteEventError');

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        errorMessage: null,
    },
    reducers: {
        getAllEvents: (state, action) => {
            return { ...state, events: [...action.payload] };
        },
        addEvent: (state, action) => {
            return { ...state, events: [action.payload, ...state.events] };
        },
        editEvent: (state, action) => {
            const events = state.events.map(event => {
                if (event.id === action.payload.id) {
                    return action.payload
                }
                return event;
            });
            return { ...state, events: [...events] };
        },
        deleteEvent: (state, action) => {
            const events = state.events.filter(event => event.id !== action.payload.id);
            return { ...state, events: [...events] };
        },
        setErrorMessage: (state, action) => {
            return { ...state, errorMessage: action.payload };
        },
        clearErrorMessage: (state,) => {
            return { ...state, errorMessage: null };
        },
    },
});

export const { getAllEvents, addEvent, editEvent, deleteEvent, setErrorMessage, clearErrorMessage } = eventsSlice.actions;

export default eventsSlice.reducer;