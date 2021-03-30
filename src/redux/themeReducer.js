import LocalStorage from "../js/localStorage"
import { TOGGLE_THEME } from "./types"

const localStorage = new LocalStorage()

const initialState = {
    theme: localStorage.check()
}

export const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_THEME:
            const newTheme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.set(newTheme)
            return {theme: newTheme}
        default:
            return state
    }
}