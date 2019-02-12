import {
    SET_COORD,
    SET_ADDRESS,
    FORECAST_RES,
    TIME_MACHINE_RES
} from '../actions/types';

const INITIAL_STATE = {
    address: '',
    coord: {},
    tm_forecast: {},
    forecast: {}
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
        case TIME_MACHINE_RES:
            return {
                ...state,
                tm_forecast: action.payload
            };
        default:
            return state;
    }
}
