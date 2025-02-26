import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    applications: [],
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        addApplication: (state, action) => {
            state.applications.push(action.payload);
        },
        editApplication: (state, action) => {
            const index = state.applications.findIndex(app => app.id == action.payload.id);
            if (index !== -1) state.applications[index] = action.payload;
        },
        deleteApplication: (state, action) => {
            state.applications = state.applications.filter(app => app.id !== action.payload);
        },
    },
});

export const { addApplication, editApplication, deleteApplication } = applicationSlice.actions;
export default applicationSlice.reducer;