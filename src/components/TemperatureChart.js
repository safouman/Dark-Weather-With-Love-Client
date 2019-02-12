import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chart from 'react-apexcharts';

const data = [
    {
        time: 1549558800,
        summary: 'Clear',
        icon: 'clear-day',
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 43.99,
        apparentTemperature: 42.28,
        dewPoint: 35.23,
        humidity: 0.71,
        pressure: 1026.25,
        windSpeed: 3.61,
        windGust: 7.05,
        windBearing: 89,
        cloudCover: 0.21,
        uvIndex: 1,
        visibility: 10,
        ozone: 309.55
    },
    {
        time: 1549562400,
        summary: 'Mostly Cloudy',
        icon: 'partly-cloudy-day',
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 45.4,
        apparentTemperature: 43.4,
        dewPoint: 35.98,
        humidity: 0.69,
        pressure: 1026.31,
        windSpeed: 4.19,
        windGust: 7.19,
        windBearing: 91,
        cloudCover: 0.61,
        uvIndex: 2,
        visibility: 10,
        ozone: 310.02
    },
    {
        time: 1549566000,
        summary: 'Mostly Cloudy',
        icon: 'partly-cloudy-day',
        precipIntensity: 0.0007,
        precipProbability: 0.02,
        precipType: 'rain',
        temperature: 47.06,
        apparentTemperature: 44.83,
        dewPoint: 36.32,
        humidity: 0.66,
        pressure: 1025.78,
        windSpeed: 4.89,
        windGust: 7.74,
        windBearing: 89,
        cloudCover: 0.71,
        uvIndex: 2,
        visibility: 10,
        ozone: 314.48
    },
    {
        time: 1549569600,
        summary: 'Mostly Cloudy',
        icon: 'partly-cloudy-day',
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 49.15,
        apparentTemperature: 46.96,
        dewPoint: 36.89,
        humidity: 0.62,
        pressure: 1025.41,
        windSpeed: 5.46,
        windGust: 8.31,
        windBearing: 88,
        cloudCover: 0.86,
        uvIndex: 3,
        visibility: 10,
        ozone: 317.29
    },
    {
        time: 1549573200,
        summary: 'Overcast',
        icon: 'cloudy',
        precipIntensity: 0.0015,
        precipProbability: 0.03,
        precipType: 'rain',
        temperature: 51.01,
        apparentTemperature: 51.01,
        dewPoint: 37.35,
        humidity: 0.59,
        pressure: 1024.83,
        windSpeed: 5.28,
        windGust: 7.58,
        windBearing: 89,
        cloudCover: 0.94,
        uvIndex: 2,
        visibility: 10,
        ozone: 316.87
    },
    {
        time: 1549576800,
        summary: 'Mostly Cloudy',
        icon: 'partly-cloudy-day',
        precipIntensity: 0.0009,
        precipProbability: 0.03,
        precipType: 'rain',
        temperature: 52.29,
        apparentTemperature: 52.29,
        dewPoint: 37.45,
        humidity: 0.57,
        pressure: 1024.38,
        windSpeed: 4.42,
        windGust: 6.2,
        windBearing: 92,
        cloudCover: 0.77,
        uvIndex: 2,
        visibility: 10,
        ozone: 320.55
    }
];

class TemperatureChart extends Component {
    render() {
        const { options, series } = this.props;
        if (options && series) {
            return (
                <div className="app">
                    <div className="row">
                        <div className="mixed-chart">
                            <Chart
                                options={options}
                                series={series}
                                type="line"
                                width="600"
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress color="primary" size={80} />
                </div>
            );
        }
    }
}

export default TemperatureChart;
