import { SONG_STATE } from "../../constants/actionTypes";

export const songReducer = (state = null, action) => {
    switch(action.type) {
        case SONG_STATE.SET_CURRENT_SONG:
            return action.song;
        default:
            return state;
    }
}