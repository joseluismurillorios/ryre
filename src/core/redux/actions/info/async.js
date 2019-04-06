import { toast } from 'react-toastify';

import {
  clearOpinion,
} from './index';
import { setLoader } from '../common';


export const storeOpinion = (uid, info) => (
  (dispatch) => {
    dispatch(setLoader(true));
    return (
      fetch('/api/report', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          uid,
          info,
        }),
        credentials: 'include',
      })
        .then(response => response.json())
        .then((data) => {
          if (data.auth !== 'error') {
            toast.info('Gracias por su opinión', { autoClose: 8000 });
            dispatch(clearOpinion());
            dispatch(setLoader(false));
            return true;
          }
          toast.error('Error al guardar', { autoClose: 8000 });
          dispatch(setLoader(false));
          return false;
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
          toast.error('Error en el servidor', { autoClose: 5000 });
          return false;
        })
    );
  }
);

export const deleteOpinion = (uid, id) => (
  (dispatch) => {
    dispatch(setLoader(true));
    return (
      fetch('/api/report-delete', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          uid,
          id,
        }),
        credentials: 'include',
      })
        .then(response => response.json())
        .then((data) => {
          if (data.auth !== 'error') {
            toast.info('Reporte eliminado', { autoClose: 8000 });
            dispatch(setLoader(false));
            return true;
          }
          toast.error('Error al eliminar', { autoClose: 8000 });
          dispatch(setLoader(false));
          return false;
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
          toast.error('Error en el servidor', { autoClose: 5000 });
          return false;
        })
    );
  }
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

export default storeOpinion;
