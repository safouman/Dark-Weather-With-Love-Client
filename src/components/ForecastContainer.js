import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tab from '@material-ui/core/Tab';
import WeeklyForecast from './WeeklyForecast';
import ForecastDetails from './ForecastDetails';
import TimeMachineForecast from './TimeMachineForecast';
import * as actions from '../actions';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: '5%'
    },
    components: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class ForecastContainer extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.clear_data();
    };

    render() {
        const { forecast, classes } = this.props;

        if (forecast) {
            return (
                <div>
                    <ForecastDetails
                        title={" Today's Forecast"}
                        forecast={forecast.currently}
                        chart={true}
                        hourly={forecast.hourly}
                    />
                    <div>
                        <Paper className={classes.root}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab value={0} label="Weekly Forecast" />
                                <Tab value={1} label="Pick A Date Forecast" />
                            </Tabs>
                        </Paper>

                        <div className={classes.components}>
                            {this.state.value === 0 && (
                                <WeeklyForecast forecast={forecast.daily} />
                            )}
                            {this.state.value === 1 && <TimeMachineForecast />}
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
ForecastContainer.propTypes = {
    classes: PropTypes.object.isRequired
};
function mapStateToProps(state) {
    return {
        forecast: state.weather.forecast
    };
}
export default connect(
    mapStateToProps,
    actions
)(withStyles(styles)(ForecastContainer));
