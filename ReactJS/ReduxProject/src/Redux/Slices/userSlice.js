import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    user: null, 
    isActive: false,
    users: [],
  }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setDBUser(state, action){
            state.user=action.payload;
        },
        addUsers(state, action){
            state.users.push(action.payload);
        }
    }
})

export const {setDBUser, addUsers} = userSlice.actions;
export default userSlice.reducer;