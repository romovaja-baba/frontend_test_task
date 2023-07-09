import { createSlice, configureStore } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: { users: [] },
    reducers: {
        addUsers(state, data) {
            state.users = [...state.users, ...data.payload];
        },
        changeUser(state, data) {
            state.users = state.users.map((user) => {
                if (user.id === data.payload.id) {
                    return { ...data.payload };
                }
                return user
            });
        },
    },
});

export const { addUsers, changeUser } = usersSlice.actions;

export const store = configureStore({
    reducer: usersSlice.reducer,
});
