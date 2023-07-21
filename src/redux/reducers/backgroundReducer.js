import { APP_BACKGROUND } from "../../constants/actionTypes";

export const backgroundReducer = (state = null, action) => {
    switch (action.type){
        case APP_BACKGROUND.SET_BACKBROUND: 
            return action.background;
        default:
            return state;
    }
}