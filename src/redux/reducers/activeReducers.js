import {SET_ACTIVE} from '../constants/actionTypes'

const initialState = false;

const activeReducers = (state=initialState, {type, payload}) => {
    switch (type) {
        case SET_ACTIVE:
            state = !state;
            return state;
        default:
            return state;
    }
}

export default activeReducers;