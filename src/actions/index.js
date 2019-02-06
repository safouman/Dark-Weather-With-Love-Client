import { SET_COORD, SET_ADDRESS } from './types';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyDyA4BWuL_v2eDkYCVKUFrBeLRamTx08Mc');
export function setCoordinates(coord) {
    return function(dispatch) {
        Geocode.fromLatLng(coord.lat, coord.lng).then(response => {
            const address = response.results[0].formatted_address;
            console.log(address);
            dispatch(setAddress(address));
            dispatch({
                type: SET_COORD,
                payload: coord
            });
        });
    };
}

export function setAddress(address) {
    return {
        type: SET_ADDRESS,
        payload: address
    };
}
