import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './levelSlice'
import gameSlice from './gameSlice'

export default configureStore({
    reducer: {
        level: levelSlice,
        game: gameSlice,
    },
})