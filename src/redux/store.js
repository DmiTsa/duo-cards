import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './levelSlice'

export default configureStore({
    reducer: {
        level: levelSlice,
    },
})