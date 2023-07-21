import { combineReducers } from "redux";
import { playlistReducer } from "./playlistReducer";
import { shuffleReducer } from "./shuffleReducer";
import { songReducer } from "./songReducer";
import { backgroundReducer } from "./backgroundReducer";
import { songListReducer } from "./songlistReducer";

export const rootReducer = combineReducers({
    currentSong: songReducer,
    currentPlaylistUUID: playlistReducer,
    isShuffle: shuffleReducer,
    background: backgroundReducer,
    songList: songListReducer
});