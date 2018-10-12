import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './LineChart.css';

class LineChart extends Component {
  constructor(props) {
    super(props);
    const config = {
      chart: {
        width: 800,
        polar: true,
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      }],
    };
    this.state = { config };
  }

  render() {
    return (
      <div className="chart">
        <ReactHighcharts config={this.state.config} ref="chart" />
      </div>
    );
  }
}

export default LineChart;
