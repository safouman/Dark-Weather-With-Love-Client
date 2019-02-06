import React, { Component } from 'react';
import Geocode from 'react-geocode';
import SearchPlaces from './SearchPlaces';
export default class App extends Component {
    componentDidMount() {
        Geocode.setApiKey('AIzaSyDyA4BWuL_v2eDkYCVKUFrBeLRamTx08Mc');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords, 'user location');
                Geocode.fromLatLng('48.8583701', '2.2922926').then(
                    response => {
                        const address = response.results[0].formatted_address;
                        console.log(address);
                    },
                    error => {
                        console.error(error);
                    }
                );
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }
    render() {
        return <SearchPlaces />;
    }
}
