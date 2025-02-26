import { configureStore } from '@reduxjs/toolkit';
import applicationReducer from '../Slice/applicationSlice';
import jobsReducer from '../Slice/jobsSlice';

export const myStore = configureStore({
    reducer: {
        application: applicationReducer,
        jobs : jobsReducer,
    },
});

export default myStore;