import React from 'react';
import { connect } from 'react-redux';

import CurrentPane from './CurrentPane';
import ForecastPane from './ForecastPane';
import { FETCH_FORECAST } from '../redux/actions/forecastActions';

const initialState = {
  cityInfo: {
    name: 'San Francisco',
  },
  forecastData: [
    {
      dt: 1553202000,
      dtText: '2019-03-21 21:00:00',
      status: 'Clear sky',
      high: 15,
      low: 14,
      humidity: 82,
      wind: 3,
      rain: 0,
    },
    {
      dt: 1553212800,
      dtText: '2019-03-22 00:00:00',
      status: 'Clear sky',
      high: 14,
      low: 13,
      humidity: 81,
      wind: 4,
      rain: 0,
    },
    {
      dt: 1553223600,
      dtText: '2019-03-23 03:00:00',
      status: 'Clear sky',
      high: 10,
      low: 11,
      humidity: 89,
      wind: 2,
      rain: 0,
    },
  ],
};

class App extends React.Component {
  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
  }

  render() {
    return (
      <>
        <CurrentPane />
        <ForecastPane forecastData={initialState.forecastData} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchForecast: () => dispatch({
    type: FETCH_FORECAST,
  }),
});

const AppContainer = connect(
  null,
  mapDispatchToProps,
)(App);

export default AppContainer;
