import React from 'react';

import CurrentPane from './CurrentPane';
import ForecastPane from './ForecastPane';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      zipCode: '94111',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { fetchFutureForecast, fetchTodayForecast } = this.props;
    fetchTodayForecast();
    fetchFutureForecast();
  }

  onSubmit() {
    const { fetchFutureForecast, fetchTodayForecast } = this.props;
    fetchTodayForecast();
    fetchFutureForecast();
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value,
    });
  }

  render() {
    const { forecastData, cityInfo, isLoading } = this.props;
    const { zipCode } = this.state;

    return isLoading
      ? <h2>Loading...</h2>
      : (
        <>
          <CurrentPane
            cityInfo={cityInfo}
            currentHiTemp={forecastData[0].high}
            currentLoTemp={forecastData[0].low}
          />

          <ForecastPane forecastData={forecastData} />

          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={zipCode}
            />
          </form>
        </>
      );
  }
}

export default App;
