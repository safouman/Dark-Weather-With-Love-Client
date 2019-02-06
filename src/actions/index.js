import { SET_COORD } from './types';

export function setCoordinates(coord) {
    console.log('inside action', coord);

    return {
        type: SET_COORD,
        payload: coor
    };
}
