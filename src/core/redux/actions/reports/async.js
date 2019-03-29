// import { toast } from 'react-toastify';
import socketIO from '../../../helpers/helper-socket';
import {
  setReports,
} from './index';

export const onReportsChange = () => (
  dispatch => socketIO.on('reports', (msg) => {
    // console.log('reports', msg.metric);
    dispatch(setReports(msg.metric));
  })
);

export default onReportsChange;
