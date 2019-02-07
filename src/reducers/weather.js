import { SET_COORD, SET_ADDRESS, FORECAST_RES } from '../actions/types';

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
        case FORECAST_RES:
            return {
                ...state,
                forecast: action.payload
            };
        default:
            return state;
    }
}
