import { SONG_LIST_STATE } from "../../constants/actionTypes";

export const songListReducer = (state = [], action) => {
    switch (action.type){
        case SONG_LIST_STATE.SET_SONG_LIST: 
            return action.songList;
        default:
            return state;
    }
}