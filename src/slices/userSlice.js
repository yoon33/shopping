import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [{
    userName: '',
    password: ''
}]

export const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        login: (state, action) => {
            const userInfo = action.payload;
            return {...state, userName: userInfo.name, password: userInfo.password}
        },
    }
});

export const {login} = userSlice.actions;

export default userSlice.reducer;