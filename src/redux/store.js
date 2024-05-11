import { configureStore } from '@reduxjs/toolkit'
import { levelSlice } from './levelSlice'

const store = configureStore({
    reducers: {
        level: levelSlice,
    }
})

export default store