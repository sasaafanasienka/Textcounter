import axios from "axios";
import { AXIOS_TEXT, TOGGLE_THEME } from "./types";
import { CHANGE_TEXT } from "./types";
const API = 'https://fish-text.ru/get?type=paragraph&number=10'

export function toggleTheme() {
    return {
        type: TOGGLE_THEME
    }
}

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        payLoad: text
    }
}

export function axiosText(text) {
    return async dispatch => {
        const response = await axios.get(API)
        let text = response.data.text
        const textToReplace = /\\n\\n/g
        text = text.replace(textToReplace, '\n')
        dispatch({
            type: AXIOS_TEXT,
            payLoad: text
        })
    }
}