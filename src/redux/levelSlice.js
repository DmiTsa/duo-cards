import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 1,
    name: 'template',
    dif: 2,
    sets: 4,
    tiles: [
        { id: "1", type: 0, isOpened: false, isEnabled: true },
        { id: "2", type: 0, isOpened: false, isEnabled: true },
        { id: "3", type: 1, isOpened: false, isEnabled: true },
        { id: "4", type: 1, isOpened: false, isEnabled: true },
        { id: "5", type: 2, isOpened: false, isEnabled: true },
        { id: "6", type: 2, isOpened: false, isEnabled: true },
        { id: "7", type: 3, isOpened: false, isEnabled: true },
        { id: "8", type: 3, isOpened: false, isEnabled: true },
    ],
    status: 'playing' // 'ended'
}

export const levelSlice = createSlice({
    name: 'level',
    initialState: initialState,
    reducers: {
        setIsOpenedTrue: (state, action) => {
            return {
                ...state,
                tiles: state.tiles.map((tile) => {

                    if (tile.id === action.payload) {
                        return { ...tile, isOpened: true }
                    } else { return tile }
                })
            }


        },

        setIsOpenedFalse: (state, action) => {
            return {
                ...state,
                tiles: state.tiles.map((tile) => {
                    return action.payload.includes(tile.id) ? { ...tile, isOpened: false } : tile
                })
            }
        }, //action.payload = [id, id]

        setIsEnabledFalse: (state, action) => {
            return {
                ...state,
                tiles: state.tiles.map((tile) => {
                    return action.payload.includes(tile.id) ? { ...tile, isEnabled: false } : tile
                })
            }
        }
    }
})

export const { setIsOpenedTrue, setIsOpenedFalse, setIsEnabledFalse } = levelSlice.actions

export const selectTiles = (state) => { return state.level.tiles }
export const selectDif = (state) => { return state.level.dif }
export const selectStatus = (state) => { return state.level.status }

export default levelSlice.reducer