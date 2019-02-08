import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import WeeklyForecastItem from './WeeklyForecastItem';
const styles = theme => ({
    root: {
        marginBottom: '5%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    }
});

class WeeklyForecast extends React.Component {
    state = {
        expanded: null
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };

    render() {
        const { classes, forecast } = this.props;

        if (forecast) {
            const {
                daily: { summary, data }
            } = forecast;
            return (
                <div>
                    <Typography
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '2vh'
                        }}
                        variant="h5"
                    >
                        Weekly Forecast
                    </Typography>
                    <Typography
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '2vh'
                        }}
                        variant="subtitle2"
                    >
                        {summary}
                    </Typography>
                    <div className={classes.root}>
                        {data.map(item => {
                            return (
                                <WeeklyForecastItem
                                    key={item.time}
                                    forecast={item}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return <div>Loading</div>;
        }
    }
}

WeeklyForecast.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeeklyForecast);
