import { createSlice } from "@reduxjs/toolkit";
import { Usuario } from "../interfaces/Usuario.interface";
import { combineReducers } from '@reduxjs/toolkit'

const initialState: Usuario[] = [];
const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            const users = action.payload;
            const newState = state.concat(users);
            state = newState
            return state;
        },
        removeUser: (state, action) => {
            const userId = action.payload;
            const newState = state.filter(user => user.id !== userId);
            state = newState;
            return state;
        },
        editUser: (state, action) => {
            const editUser = action.payload;
            const index = state.findIndex(user => user.id === editUser.id);
            state[index] = editUser;
            return state;
        }
    }
})

export const { addUsers, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;