import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skycons from 'react-skycons';
import '../weather-icons/css/weather-icons.css';
import TemperatureChart from './TemperatureChart';

const styles = {
    weatherIndicatorContainer: {
        display: 'flex'
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    weatherIndicator: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '2vw'
    },

    icon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    card: {
        minWidth: 275
    },

    title: {
        fontSize: 25,
        fontWeight: 500
    },
    pos: {
        marginBottom: 12
    }
};

class ForecastDetails extends Component {
    constructor() {
        super();
        this.state = {
            icon: ''
        };
    }
    componentDidMount() {
        const { forecast } = this.props;
        if (forecast) {
            let icon = this.getIcon(forecast.icon);

            this.setState({ icon });
        }
    }
    componentWillReceiveProps(props) {
        const { forecast } = props;
        if (forecast) {
            let icon = this.getIcon(forecast.icon);

            this.setState({ icon });
        }
    }
    getIcon(current) {
        switch (current) {
            case 'clear-day':
                return 'CLEAR_DAY';
            case 'clear-night':
                'CLEAR_NIGHT';
            case 'rain':
                return 'RAIN';
            case 'snow':
                return 'SNOW';
            case 'sleet':
                return 'SLEET';
            case 'wind':
                return 'WIND';
            case 'fog':
                return 'FOG';
            case 'cloudy':
                return 'CLOUDY';

            case 'partly-cloudy-day':
                return 'PARTLY_CLOUDY_DAY';
            case 'partly-cloudy':
                return 'PARTLY_CLOUDY_DAY';
            case 'partly-cloudy-night':
                return 'PARTLY_CLOUDY_NIGHT';
        }
    }
    renderTemperature() {
        const { forecast } = this.props;
        if (forecast) {
            if (forecast.temperature) {
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant="h5" component="h2">
                            Temperature : {forecast.temperature} ˚
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Feels like : {forecast.apparentTemperature} ˚
                        </Typography>
                    </div>
                );
            } else {
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant="h5" component="h2">
                            Lowest : {forecast.temperatureLow} ˚
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Highest : {forecast.temperatureHigh} ˚
                        </Typography>
                    </div>
                );
            }
        }
    }
    render() {
        const { icon } = this.state;

        const { classes, forecast, title } = this.props;

        if (forecast) {
            return (
                <div style={{ width: '100%' }}>
                    <Card raised className={classes.card}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                {title}
                            </Typography>
                            <div className={classes.statsContainer}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div className={classes.icon}>
                                        {' '}
                                        <Skycons
                                            color="white"
                                            icon={`${icon}`}
                                            autoplay={true}
                                        />
                                    </div>

                                    {this.renderTemperature()}
                                </div>
                                <Typography variant="h5" component="h2">
                                    {forecast.summary}
                                </Typography>
                                <div
                                    className={
                                        classes.weatherIndicatorContainer
                                    }
                                >
                                    <div className={classes.weatherIndicator}>
                                        <i
                                            className="wi wi-humidity  wi-fw"
                                            style={{
                                                fontSize: '35px',
                                                color: '#ffffff'
                                            }}
                                        />
                                        <Typography variant="h6" component="h2">
                                            {forecast.humidity}%
                                        </Typography>
                                    </div>
                                    <div className={classes.weatherIndicator}>
                                        <i
                                            className="wi wi-raindrop  wi-fw"
                                            style={{
                                                fontSize: '35px',
                                                color: '#ffffff'
                                            }}
                                        />
                                        <Typography variant="h6" component="h2">
                                            {forecast.precipIntensity}
                                        </Typography>
                                    </div>
                                    <div className={classes.weatherIndicator}>
                                        <i
                                            className="wi wi-barometer  wi-fw"
                                            style={{
                                                fontSize: '35px',
                                                color: '#ffffff'
                                            }}
                                        />
                                        <Typography variant="h6" component="h2">
                                            {forecast.pressure}mb
                                        </Typography>
                                    </div>
                                    <div className={classes.weatherIndicator}>
                                        <i
                                            className="wi wi-strong-wind  wi-fw"
                                            style={{
                                                fontSize: '35px',
                                                color: '#ffffff'
                                            }}
                                        />
                                        <Typography variant="h6" component="h2">
                                            {forecast.windSpeed}mph
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
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

ForecastDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ForecastDetails);
