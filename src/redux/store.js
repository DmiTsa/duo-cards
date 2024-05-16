import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './levelSlice'
import gameSlice from './gameSlice'
import userSlice from './userSlice'
import selfGamesSlice from './selfGamesSlice'

export default configureStore({
    reducer: {
        level: levelSlice,
        game: gameSlice,
        users: userSlice,
        selfGames: selfGamesSlice,
    },
})