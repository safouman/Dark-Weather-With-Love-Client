import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodayForecast from './TodayForecast';
class ForecastContainer extends Component {
    render() {
        const { forecast } = this.props;
        return (
            <div>
                <TodayForecast
                    title={" Today's Forecast"}
                    forecast={forecast}
                />
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
