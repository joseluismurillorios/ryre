import { combineReducers } from 'redux';
import common from './common';
import forecast from './forecast';
import esri from './esri';
import info from './info';
import reports from './reports';

const reducers = combineReducers({
  common,
  forecast,
  esri,
  info,
  reports,
});

export default reducers;
