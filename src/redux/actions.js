import { TOGGLE_THEME } from "./types";
import { CHANGE_TEXT } from "./types";

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