// import { toast } from 'react-toastify';
import $ from '../../../helpers/helper-jquery';
import socketIO from '../../../helpers/helper-socket';
import {
  setReports,
} from './index';


const DEVELOMPENT = (process.env.NODE_ENV === 'development');
const serverUrl = DEVELOMPENT ? 'http://192.168.1.72:3000/' : '/';

export const onReportsChange = () => (
  dispatch => socketIO.on('reports', (msg) => {
    console.log('reports', msg.metric);
    dispatch(setReports(msg.metric));
  })
);

export const getReports = () => (
  dispatch => $.getJSON(`${serverUrl}reports`, {}, (result) => {
    // console.log('getReports', result);
    dispatch(setReports(result));
  })
);
