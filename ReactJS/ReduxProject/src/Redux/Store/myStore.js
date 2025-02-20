import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../Slices/counterSlice';
import userReducer from '../Slices/userSlice';

export const myStore = configureStore({ 
    reducer: {
        counterReducer,
        user: userReducer
    },
});

