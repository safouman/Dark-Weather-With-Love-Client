import {
    FORECAST_RES,
    SET_COORD,
    SET_ADDRESS,
    TIME_MACHINE_RES
} from './types';
import Geocode from 'react-geocode';
import axios from 'axios';

Geocode.setApiKey('AIzaSyDyA4BWuL_v2eDkYCVKUFrBeLRamTx08Mc');

const API = 'https://madewithloveweather.herokuapp.com/api/';

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
            .get(API + 'forecast?lat=' + coord.lat + '&lon=' + coord.lng)
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

export function timemachineRequest(coord, date) {
    return function(dispatch) {
        //send request for timemachine
        //fetch data

        let unixstamp = new Date(date).getTime() / 1000;

        axios
            .get(
                API +
                    'timemachine?lat=' +
                    coord.lat +
                    '&lon=' +
                    coord.lng +
                    '&time=' +
                    unixstamp
            )

            .then(function(response) {
                // handle success save data to Redux state

                dispatch({ type: TIME_MACHINE_RES, payload: response.data });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
        //dispatch to redux
    };
}
