import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Skycons from 'react-skycons';
import '../weather-icons/css/weather-icons.css';
import IndicatorsChart from './IndicatorsChart';

const styles = {
    weatherIndicatorContainer: {
        display: 'flex',
        flexWrap: 'wrap'
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
            icon: '',
            label: 'Next 12 Hours',
            showHourly: false
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
    renderChart() {
        const { chart } = this.props;
        const { label, showHourly } = this.state;
        if (chart) {
            const { hourly } = this.props;
            let time = [];
            let temperature = [];
            let humidity = [];
            for (let item = 0; item <= 12; item++) {
                time.push(new Date(hourly.data[item].time * 1000).getHours());
                temperature.push(hourly.data[item].temperature);
                humidity.push(hourly.data[item].humidity);
            }

            let options = {
                chart: {
                    id: 'Hourly Temperature',
                    height: 400,

                    type: 'line',
                    shadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 1
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#ff4747', '#ffffff'],

                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'smooth'
                },
                legend: {
                    show: true,
                    fontSize: '12px',
                    labels: {
                        colors: '#ffffff'
                    }
                },
                xaxis: {
                    categories: time,
                    tickAmount: 6,
                    title: {
                        text: 'Hourly',
                        style: {
                            fontSize: '12px',
                            color: '#ffffff'
                        }
                    },

                    labels: {
                        show: true,

                        style: {
                            colors: '#ffffff',
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: 'Temperature',
                            style: {
                                fontSize: '12px',
                                color: '#ff4747'
                            }
                        },
                        labels: {
                            style: {
                                fontSize: '10px',
                                color: '#ff4747'
                            }
                        }
                    },
                    {
                        seriesName: 'Humidity',
                        opposite: true,

                        labels: {
                            style: {
                                color: '#ffffff'
                            }
                        },
                        title: {
                            text: 'Humidity',
                            style: {
                                color: '#ffffff'
                            }
                        }
                    }
                ],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                height: 300
                            }
                        }
                    }
                ]
            };
            let series = [
                {
                    name: 'Temperature',
                    data: temperature
                },
                {
                    name: 'Humidity',
                    data: humidity
                }
            ];

            return (
                <div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            style={{ width: '10vw' }}
                            color="primary"
                            onClick={() =>
                                this.setState(
                                    {
                                        showHourly: !showHourly
                                    },
                                    () => {
                                        if (label === 'hide') {
                                            this.setState({
                                                label: ' next 12 hours'
                                            });
                                        } else {
                                            this.setState({
                                                label: 'hide'
                                            });
                                        }
                                    }
                                )
                            }
                        >
                            {label}
                        </Button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {showHourly && (
                            <IndicatorsChart
                                options={options}
                                series={series}
                            />
                        )}
                    </div>
                </div>
            );
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
                            Temperature : {forecast.temperature} ˚C
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Feels like : {forecast.apparentTemperature} ˚C
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
                            Lowest : {forecast.temperatureLow} ˚C
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Highest : {forecast.temperatureHigh} ˚C
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
                                            {forecast.precipIntensity} mm/h
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
                                            {forecast.pressure} hPa
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
                                            {forecast.windSpeed} m/s
                                        </Typography>
                                    </div>
                                </div>
                                {this.renderChart()}
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
