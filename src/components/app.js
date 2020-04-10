import React, { Component } from 'react';
import ForecastContainer from './ForecastContainer';
import SearchPlaces from './SearchPlaces';
import * as actions from '../actions';
import { connect } from 'react-redux';
class App extends Component {
    componentDidMount() {
        if (navigator.geolocation) {
            if (Object.keys(navigator.geolocation).length === 0) {
                setTimeout(() => {
                    this.props.setCoordinates({
                        lat: 40.7127753,
                        lng: -74.0059728
                    });
                }, 3000);
            }
            navigator.geolocation.getCurrentPosition(position => {
                this.props.setCoordinates({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        } else {
            this.props.setCoordinates({
                lat: 40.7127753,
                lng: -74.0059728
            });
            console.log('Geolocation is not supported by this browser.');
        }
    }
    render() {
        return (
            <div>
                <SearchPlaces />
                <ForecastContainer />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        address: state.weather.address
    };
}
export default connect(
    mapStateToProps,
    actions
)(App);
