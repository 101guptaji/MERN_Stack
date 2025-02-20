import {configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';

export const myStore = configureStore({reducer: counterReducer, });

