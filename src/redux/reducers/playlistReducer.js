import { PLAYLIST_STATE } from "../../constants/actionTypes";

export const playlistReducer = (state = null, action) => {
    switch (action.type){
        case PLAYLIST_STATE.SET_PLAYLIST:
            return action.playlistId;
        default:
            return state;
    }
};