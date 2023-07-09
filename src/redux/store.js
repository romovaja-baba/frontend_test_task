import { createSlice, configureStore } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: { users: [], currentUser: null },
    reducers: {
        addUsers(state, data) {
            state.users = [...state.users, ...data.payload];
        },
        changeUser(state, data) {
            state.users = state.users.map((user) => {
                if (user.id === data.payload.id) {
                    return { ...data.payload };
                }
                return user;
            });
        },
        setCurrentUser(state, data) {
            state.currentUser = data.payload;
        },
    },
});

export const { addUsers, changeUser, setCurrentUser } = usersSlice.actions;

export const store = configureStore({
    reducer: usersSlice.reducer,
});
