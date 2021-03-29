import { TOGGLE_THEME } from "./types"

const initialState = {
    theme: 'light'
}

export const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_THEME:
            return state.theme === 'light' ? {theme: 'dark'} : {theme: 'light'}
        default:
            return state
    }
}