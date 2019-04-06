import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import socketIO from '../../../helpers/helper-socket';

import {
  auth,
  provider,
} from '../../../helpers/helper-firebase';
import $ from '../../../helpers/helper-jquery';
import {
  userLogged,
  // setLoader,
  setAdmin,
} from './index';
import { clearOpinion } from '../info';

const DEVELOMPENT = (process.env.NODE_ENV === 'development');


let connected = true;
let toastId = null;

socketIO.on('connect', () => {
  if (!connected) {
    toast.update(toastId, {
      render: 'Servidor online',
      type: toast.TYPE.SUCCESS,
      autoClose: false,
    });
    // toast.info('Servidor online', { autoClose: 20000 });
    connected = true;
  }
});

socketIO.io.on('connect_error', () => {
  if (connected) {
    toastId = toast.error('Servidor offline', { autoClose: false });
    // toast.error('Servidor offline', { autoClose: 20000 });
    connected = false;
  }
});

const setAppCookie = dispatch => auth.currentUser && (
  auth.currentUser.getIdToken().then((token) => {
    Cookies.set('token', token, {
      domain: window.location.hostname,
      expire: 1 / 24, // One hour
      path: '',
      secure: !DEVELOMPENT,
    });
    console.log(dispatch);
    if (dispatch) {
      fetch('/api/authorize', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'GET',
        credentials: 'include',
      })
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          if (data.auth !== 'error') {
            dispatch(userLogged(data.auth));
            return true;
          }
          dispatch(setAdmin(false));
          return false;
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
          dispatch(setAdmin(false));
        });
    }
  })
);

const unsetAppCookie = () => Cookies.remove('token', {
  domain: window.location.hostname,
  path: '',
});


export const onAuthChange = () => (
  dispatch => auth.onAuthStateChanged((user) => {
    // console.log(user);
    if (user) {
      const { displayName, email, photoURL } = user;
      dispatch(userLogged({ displayName, email, photoURL }));

      // user is logged in
      setAppCookie(dispatch);
      // Reset cookie before hour expires
      setInterval(setAppCookie, 3500);

      // isAdmin();

      $('#Login').modal('hide');
      toast.info(`Hola ${displayName || email}`, { autoClose: 2000 });
      // dispatch(userLogged(user));
    } else {
      unsetAppCookie();
      dispatch(userLogged());
    }
  })
);

export const userLogin = (email, password) => (
  () => (
    auth.signInWithEmailAndPassword(email, password)
      .catch((er) => {
        console.log(er);
        if (er.code === 'auth/wrong-password') {
          toast.error('El usuario o contraseña no coincide', { autoClose: 5000 });
        } else {
          auth.createUserWithEmailAndPassword(email, password)
            .catch((error) => {
              // Handle Errors here.
              console.log(error);
              toast.error('Error inesperado, vuelva a intentarlo', { autoClose: 5000 });
            });
        }
      })
  )
);

export const authLogin = () => (
  (dispatch) => {
    if (window.cordova) {
      window.plugins.googleplus.login(
        {},
        (obj) => {
          const credential = provider.credential(obj.idToken, obj.accessToken);
          // console.log(obj, credential);
          return auth.signInAndRetrieveDataWithCredential(credential)
            .catch((error) => {
              console.log(error);
              dispatch(userLogged());
              toast.error(JSON.stringify(error));
            });
        },
      );
    } else {
      return auth.signInWithPopup(provider)
        .catch((error) => {
          // Handle Errors here.
          toast.error(error.message, { autoClose: 5000 });
        });
    }
    return false;
  }
);

export const authLogout = () => (
  dispatch => (
    auth.signOut()
      .then(() => {
        unsetAppCookie();
        dispatch(clearOpinion());
        dispatch(userLogged());
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 5000 });
      })
  )
);

export const isAdmin = () => (
  dispatch => (
    fetch('/api/authorize', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.auth !== 'error') {
          dispatch(userLogged(data.auth));
          return true;
        }
        dispatch(setAdmin(false));
        return false;
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        toast.error('Error en el servidor', { autoClose: 5000 });
        dispatch(setAdmin(false));
      })
  )
);

// export const opinionesFetch = (value = DEFAULT_POS) => (
//   dispatch => (
//     getGeoJSON(opiniones, value.latitude, value.longitude, 1)
//       .then((geoj) => {
//         // console.log('opinions', value, geoj);
//         dispatch(setOpiniones(geoj));
//       })
//       .catch((error) => {
//         toast.error(error.message, { autoClose: 5000 });
//       })
//   )
// );

// export const opinionesSubscribe = () => (
//   (dispatch) => {
//     const query2 = opiniones.within(DEFAULT_POINT, 5, 'position');
//     const obs2 = query2.pipe(toGeoJSON('position', true));
//     obs2.subscribe(geoj => dispatch(setOpiniones(geoj)));
//   }
// );
