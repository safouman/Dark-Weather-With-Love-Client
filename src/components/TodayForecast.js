import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skycons from 'react-skycons';
import '../weather-icons/css/weather-icons.css';

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
        width: '1   5vw'
    },
    card: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 25,
        fontWeight: 500
    },
    pos: {
        marginBottom: 12
    }
};

class TodayForeacast extends Component {
    constructor() {
        super();
        this.state = {
            icon: ''
        };
    }
    componentWillReceiveProps(props) {
        const { forecast } = props;
        if (forecast) {
            let icon = this.getIcon(forecast.currently.icon);

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
            case 'partly-cloudy-night':
                return 'PARTLY_CLOUDY_NIGHT';
        }
    }

    render() {
        const { icon } = this.state;

        const { classes, forecast, title } = this.props;

        if (forecast) {
            return (
                <Card className={classes.card}>
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
                                    <Typography variant="h5" component="h2">
                                        {forecast.currently.summary}
                                    </Typography>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Typography variant="h5" component="h2">
                                        Temperature :{' '}
                                        {forecast.currently.temperature} ˚
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Feels like :{' '}
                                        {forecast.currently.apparentTemperature}{' '}
                                        ˚
                                    </Typography>
                                </div>
                            </div>
                            <div className={classes.weatherIndicatorContainer}>
                                <div className={classes.weatherIndicator}>
                                    <i
                                        className="wi wi-humidity  wi-fw"
                                        style={{
                                            fontSize: '40px',
                                            color: '#ffffff'
                                        }}
                                    />
                                    <Typography variant="h6" component="h2">
                                        {forecast.currently.humidity}%
                                    </Typography>
                                </div>
                                <div className={classes.weatherIndicator}>
                                    <i
                                        className="wi wi-raindrop  wi-fw"
                                        style={{
                                            fontSize: '40px',
                                            color: '#ffffff'
                                        }}
                                    />
                                    <Typography variant="h6" component="h2">
                                        {forecast.currently.precipIntensity}
                                    </Typography>
                                </div>
                                <div className={classes.weatherIndicator}>
                                    <i
                                        className="wi wi-barometer  wi-fw"
                                        style={{
                                            fontSize: '40px',
                                            color: '#ffffff'
                                        }}
                                    />
                                    <Typography variant="h6" component="h2">
                                        {forecast.currently.pressure}mb
                                    </Typography>
                                </div>
                                <div className={classes.weatherIndicator}>
                                    <i
                                        className="wi wi-strong-wind  wi-fw"
                                        style={{
                                            fontSize: '40px',
                                            color: '#ffffff'
                                        }}
                                    />
                                    <Typography variant="h6" component="h2">
                                        {forecast.currently.windSpeed}mph
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            );
        } else {
            return <div> Loading </div>;
        }
    }
}

TodayForeacast.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodayForeacast);
