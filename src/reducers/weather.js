import { SET_COORD, SET_ADDRESS } from '../actions/types';

const INITIAL_STATE = {
    coord: {},
    address: ''
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_COORD:
            return {
                ...state,
                coord: action.payload
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        default:
            return state;
    }
}
