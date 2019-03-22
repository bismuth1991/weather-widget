import { connect } from 'react-redux';

import App from './App';
import { fetchFutureForecast, fetchTodayForecast } from '../redux/actions/forecastActions';

const mapStateToProps = ({ entities, ui }) => ({
  forecastData: entities.forecastData,
  cityInfo: entities.cityInfo,
  isLoading: ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchFutureForecast: (zipCode = 94111) => dispatch(fetchFutureForecast(zipCode)),
  fetchTodayForecast: (zipCode = 94111) => dispatch(fetchTodayForecast(zipCode)),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
