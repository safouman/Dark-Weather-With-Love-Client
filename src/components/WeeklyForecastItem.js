import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skycons from 'react-skycons';
import ForecastDetails from './ForecastDetails';
const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    icon: {
        width: '70px'
    }
});
class WeeklyForecastItem extends Component {
    state = {
        icon: 'CLEAR_DAY'
    };
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

    componentDidMount() {
        const { forecast } = this.props;

        if (forecast) {
            let icon = this.getIcon(forecast.icon);

            this.setState({ icon });
        }
    }
    render() {
        const { classes, forecast, expanded, handleChange } = this.props;

        if (forecast) {
            const { time, summary } = forecast;
            const { icon } = this.state;

            return (
                <ExpansionPanel
                    expanded={expanded === time}
                    onChange={handleChange(time)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>
                            {new Date(time * 1000).toDateString()}
                        </Typography>

                        <Typography className={classes.secondaryHeading}>
                            {summary}
                        </Typography>
                        <div className={classes.icon}>
                            <Skycons
                                color='white'
                                icon={icon}
                                autoplay={false}
                            />
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                        style={{ display: 'flex', justifyContent: 'center' }}>
                        <ForecastDetails
                            title={new Date(time * 1000).toDateString()}
                            forecast={forecast}
                        />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        } else {
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress color='primary' size={80} />
                </div>
            );
        }
    }
}
WeeklyForecastItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeeklyForecastItem);
