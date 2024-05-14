import { createSlice } from "@reduxjs/toolkit";

export const userSlace = createSlice({
    name: 'users',
    initialState: {
        currentUser: '',
        currentScore: 0,
        isWinner: false,
        users: [{ id: '1', name: 'ddd', score: 1234 }]
    },
    reducers: {
        setCurrentUser: (state, action) => {
            return { ...state, currentUser: action.payload }
        }
    }
})

export const selectIsWinner = (state) => { return state.users.isWinner }

export const { setCurrentUser } = userSlace.actions

export default userSlace.reducer