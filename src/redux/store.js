import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './levelSlice'
import gameSlice from './gameSlice'
import userSlice from './userSlice'

export default configureStore({
    reducer: {
        level: levelSlice,
        game: gameSlice,
        users: userSlice,
    },
})