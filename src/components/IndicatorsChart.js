import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chart from 'react-apexcharts';

class IndicatorsChart extends Component {
    render() {
        const { options, series } = this.props;
        if (options && series) {
            return (
                <div>
                    <div className="mixed-chart">
                        <Chart
                            options={options}
                            series={series}
                            type="line"
                            width={700}
                        />
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

export default IndicatorsChart;
