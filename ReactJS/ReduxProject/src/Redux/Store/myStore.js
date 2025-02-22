import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../Slices/counterSlice';
import userReducer from '../Slices/userSlice';

import { usersApi } from '../Slices/API/usersApiSlice';

export const myStore = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        [usersApi.reducerPath]: usersApi.reducer, // Add the generated reducer as a specific top-level slice
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

