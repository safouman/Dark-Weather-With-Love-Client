import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    DatePicker,
    InlineDatePicker
} from 'material-ui-pickers';
import Typography from '@material-ui/core/Typography';
import ForecastDetails from './ForecastDetails';

class TimeMachineForcast extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: null
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        const { coord, timemachineRequest } = this.props;
        this.setState({ selectedDate: date });
        timemachineRequest(coord, date);
    }
    renderForecast() {
        const { tm_forecast } = this.props;
        if (Object.keys(tm_forecast).length > 0) {
            const { currently } = tm_forecast;

            return (
                <ForecastDetails
                    title={new Date(currently.time * 1000).toDateString()}
                    forecast={currently}
                    chart={false}
                />
            );
        } else {
            return (
                <Typography
                    style={{
                        textAlign: 'center'
                    }}
                    variant="h6"
                >
                    Pick A Date To Check Forecast{' '}
                </Typography>
            );
        }
    }
    render() {
        const today = new Date();
        const minDate = new Date(new Date().setDate(today.getDate() - 30));
        const { selectedDate } = this.state;

        //date picker
        //once date picked launch request load then display
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignitems: 'center',
                    marginBottom: '5%'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignSelf: 'center'
                    }}
                >
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <InlineDatePicker
                            style={{
                                width: '25vw'
                            }}
                            variant="outlined"
                            margin="normal"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            minDate={minDate}
                            maxDate={today}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div>{this.renderForecast()}</div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        tm_forecast: state.weather.tm_forecast,
        coord: state.weather.coord
    };
}
export default connect(
    mapStateToProps,
    actions
)(TimeMachineForcast);
