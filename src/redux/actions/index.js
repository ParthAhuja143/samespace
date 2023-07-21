import { APP_BACKGROUND, PLAYING_STATE, PLAYLIST_STATE, SHUFFLE_STATE, SONG_LIST_STATE, SONG_STATE } from "../../constants/actionTypes";

export const setCurrentSong = (song) => ({
    type: SONG_STATE.SET_CURRENT_SONG,
    song: song,
});

export const setShuffleOn = () => ({
    type: SHUFFLE_STATE.SET_ON,
});

export const setShuffleOff = () => ({
    type: SHUFFLE_STATE.SET_OFF,
});

export const setCurrentPlaylist = (playlistId) => ({
    type: PLAYLIST_STATE.SET_PLAYLIST,
    playlistId: playlistId
});

export const setAppBackground = (background) => ({
    type: APP_BACKGROUND.SET_BACKBROUND,
    background: background,
});

export const setSongList = (songList) => ({
    type: SONG_LIST_STATE.SET_SONG_LIST,
    songList: songList
});