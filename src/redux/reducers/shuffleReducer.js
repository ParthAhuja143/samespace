import { SHUFFLE_STATE } from "../../constants/actionTypes";

export const shuffleReducer = (state=false, action) => {
    switch (action.type){
        case SHUFFLE_STATE.SET_OFF:
            return false;
        case SHUFFLE_STATE.SET_ON:
            return true;
        default:
            return state;
    }
}