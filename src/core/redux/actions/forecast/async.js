// import { toast } from 'react-toastify';
import $ from '../../../helpers/helper-jquery';
import socketIO from '../../../helpers/helper-socket';
import {
  setForecastMetric,
  setWeatherMetric,
  // setOpiniones,
} from './index';


const DEVELOMPENT = (process.env.NODE_ENV === 'development');
const serverUrl = DEVELOMPENT ? 'http://192.168.1.72:3000/' : '/';

export const onWeatherChange = () => (
  dispatch => socketIO.on('weather', (msg) => {
    // console.log('weather', msg.metric);
    dispatch(setWeatherMetric(msg.metric));
  })
);

export const onForecastChange = () => (
  dispatch => socketIO.on('forecast', (msg) => {
    // console.log('forecast', msg.metric);
    dispatch(setForecastMetric(msg.metric));
  })
);

export const getForecastMetric = () => (
  dispatch => $.getJSON(`${serverUrl}forecast`, {}, (result) => {
    // console.log('getForecastMetric', result);
    dispatch(setForecastMetric(result));
  })
);

export const getWeatherMetric = () => (
  dispatch => $.getJSON(`${serverUrl}weather`, {}, (result) => {
    // console.log('getWeatherMetric', result);
    dispatch(setWeatherMetric(result));
  })
);

export const getReports = () => {
  $.getJSON(`${serverUrl}api/reports`, {}, (result) => {
    console.log('getReports', result);
  });
};
