import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skycons from 'react-skycons';
import { get } from 'https';

const styles = {
    icon: {
        width: '25vw'
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
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
};

const currently = {
    time: 1509993277,
    summary: 'Drizzle',
    icon: 'snow',
    nearestStormDistance: 0,
    precipIntensity: 0.0089,
    precipIntensityError: 0.0046,
    precipProbability: 0.9,
    precipType: 'rain',
    temperature: 66.1,
    apparentTemperature: 66.31,
    dewPoint: 60.77,
    humidity: 0.83,
    pressure: 1010.34,
    windSpeed: 5.59
};
const icon = [
    { 'clear-day': 'CLEAR_DAY' },
    { 'clear-night': 'CLEAR_NIGHT' },
    { rain: 'RAIN' },
    { snow: 'SNOW' },
    { sleet: 'SLEET' },
    { wind: 'WIND' },
    { fog: 'FOG' },
    { cloudy: 'CLOUDY' },
    { 'partly-cloudy-day': 'PARTLY_CLOUDY_DAY' },
    { 'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT' }
];

class TodayForeacast extends Component {
    constructor() {
        super();
        this.state = {
            icon: ''
        };
    }
    componentDidMount() {
        let icon = this.getIcon(currently.icon);
        this.setState({ icon });
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

        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Today's Forecast
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {currently.summary}
                    </Typography>
                    <div className={classes.icon}>
                        {' '}
                        <Skycons color="white" icon={icon} autoplay={true} />
                    </div>

                    <Typography component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

TodayForeacast.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodayForeacast);
