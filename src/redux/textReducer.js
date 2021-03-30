import { AXIOS_TEXT, CHANGE_TEXT } from "./types"

const initialState = {
    text: ''
}

export const textReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:
            return {text: action.payLoad}
        case AXIOS_TEXT:
            return {text: action.payLoad}
        default:
            return state
    }
}