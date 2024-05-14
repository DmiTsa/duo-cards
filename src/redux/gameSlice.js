import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePage: 'gameOver', //'greeting'
    gameSet: '',
    levels: [],
    currentLevel: -1,
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {

        setActivePage: (state, action) => {
            return { ...state, activePage: action.payload }
        },

        setGameSet: (state, action) => { return { ...state, gameSet: action.payload } },

        setLevels: (state, action) => {
            return { ...state, levels: action.payload }
        },

        incrementCurrentLevel: (state) => {
            return { ...state, currentLevel: state.currentLevel + 1 }
        }
    }
})

export const { incrementCurrentLevel, setGameSet, setActivePage, setLevels } = gameSlice.actions

export const selectorActivePage = (state) => { return state.game.activePage }
// export const selectorGameSet = (state) => { return state.game.gameSet }
export const selectNumberCurrentLevel = (state) => { return state.game.currentLevel }
export const selectLevels = (state) => { return state.game.levels }
export const selectCurrentLevel = (state) => { return state.game.levels[state.game.currentLevel] }

export default gameSlice.reducer