import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

const counterSlice = createSlice({
    name: 'counter', // name of slice, used in action types
    initialState,   // The initial state for the reducer
    reducers: { // reducer object 
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incrementByAmount(state, action) {
            state.count += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer