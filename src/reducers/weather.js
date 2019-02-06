import { SET_COORD } from '../actions/types';

const INITIAL_STATE = {
    coord: {}
};

export default function(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case SET_COORD:
            return {
                ...state,
                coord: action.payload
            };

        default:
            return state;
    }
}
