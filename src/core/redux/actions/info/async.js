import { toast } from 'react-toastify';

import $ from '../../../helpers/helper-jquery';

import {
  clearOpinion,
  setAddress,
} from './index';

// const opinions = geo.collection('opinions');
// const users = db.collection('users');

const DEVELOMPENT = (process.env.NODE_ENV === 'development');
const serverUrl = DEVELOMPENT ? 'http://localhost:3000/' : '/';

export const storeOpinion = (uid, info) => (
  dispatch => (
    $.getJSON(`${serverUrl}api/report`, {
      uid,
      info,
    }, (returnedData) => {
      if (returnedData.auth !== '404') {
        toast.success('Gracias por su opinión', { autoClose: 5000 });
        dispatch(clearOpinion());
      } else {
        console.error('Error al guardar');
        toast.error('Error al guardar', { autoClose: 5000 });
      }
    })
  )
);


export const getAddressInfo = (lat, lon) => (
  dispatch => (
    $.getJSON('https://nominatim.openstreetmap.org/reverse', {
      lat,
      lon,
      format: 'json',
    }, (result) => {
      console.log(result);
      dispatch(setAddress({
        ...result.address,
        latitude: lat,
        longitude: lon,
      }));
    })
  )
);

export const struc = {
  address: 'Calle Inst Tec Regional de Tijuana 1901-1931, Tecnológico, Tijuana, Baja California, 22454',
  category: 0,
  subcategory: 1,
  type: 1102,
  opinion: 'message...',
  user: 'kjdflsk',
  position: '',
};

// const max = 1000;
// const docs = [];

// export const saveDocs = (i) => {
//   if (i < max) {
//     console.log(docs[i]);
//     db.collection('opinions').doc(`test${Math.floor(Math.random() * 10000)}`).set(docs[i])
//       .then(() => {
//         console.log('Document successfully written!', i);

//         setTimeout(() => { saveDocs(i + 1); }, 500);
//       })
//       .catch((error) => {
//         console.error('Error writing document: ', error);
//       });
//   }
// };

// export const createDocs = () => {
//   for (let i = 0; i < 100; i += 1) {
//     const latitude = +(Math.random() * (32.534 - 32.468) + 32.468).toFixed(8);
//     const longitude = +((Math.random() * (117.003 - 116.911) + 116.911) * -1).toFixed(8);
//     const category = Math.floor(Math.random() * (2 + 1));
//     const subcategory = Math.floor(Math.random() * (3 + 1));
//     const doc = {
//       ...struc,
//       category,
//       subcategory,
//       position: geo.point(latitude, longitude).data,
//     };
//     docs.push(doc);
//   }
//   console.log(Math.floor(Math.random() * 1000), docs);
//   saveDocs(0);
// };

// createDocs();

export default storeOpinion;
