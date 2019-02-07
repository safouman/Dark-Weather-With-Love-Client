import { FORECAST_RES, SET_COORD, SET_ADDRESS } from './types';
import Geocode from 'react-geocode';
import axios from 'axios';

Geocode.setApiKey('AIzaSyDyA4BWuL_v2eDkYCVKUFrBeLRamTx08Mc');
const DARKSKY_API_KEY = '304840d9d3d6e250ab1f3dda0273969d';
const API = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/`;

export function setCoordinates(coord) {
    return function(dispatch) {
        Geocode.fromLatLng(coord.lat, coord.lng).then(response => {
            const address = response.results[0].formatted_address;

            dispatch(setAddress(address));
            dispatch({
                type: SET_COORD,
                payload: coord
            });
            dispatch(forecastRequest(coord));
        });
    };
}

export function setAddress(address) {
    return {
        type: SET_ADDRESS,
        payload: address
    };
}

export function forecastRequest(coord) {
    return function(dispatch) {
        //fetch data
        axios
            .get(API + coord.lat + ',' + coord.lng)
            .then(function(response) {
                // handle success save data to Redux state

                dispatch({ type: FORECAST_RES, payload: response.data });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });

        //dispatch
    };
}
