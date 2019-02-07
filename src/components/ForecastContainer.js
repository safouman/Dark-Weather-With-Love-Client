import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodayForecast from './TodayForecast';
class ForecastContainer extends Component {
    render() {
        return (
            <div>
                FORECAST HERE
                <TodayForecast />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        forecast: state.weather.forecast
    };
}
export default connect(mapStateToProps)(ForecastContainer);
