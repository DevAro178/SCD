import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    refresh: '',
    access: '',
    user_id: null,
    username: '',
    email: '',
    superuser: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.refresh = action.payload.refresh;
            state.access = action.payload.access;
            state.user_id = action.payload.user_id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.superuser = action.payload.superuser;
        },
        setRefresh: (state, action) => {
            state.refresh = action.payload;
        },
        setAccess: (state, action) => {
            state.access = action.payload;
        },
        setUserId: (state, action) => {
            state.user_id = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setSuperuser: (state, action) => {
            state.superuser = action.payload;
        },
        clearUser: () => initialState,
    },
});

export const { setUser, setRefresh, setAccess, setUserId, setUsername, setEmail, setSuperuser, clearUser } = userSlice.actions;

export default userSlice.reducer;