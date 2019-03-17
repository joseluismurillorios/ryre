import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import {
  auth,
  provider,
} from '../../../helpers/helper-firebase';
import $ from '../../../helpers/helper-jquery';
import {
  userLogged,
} from './index';

const DEVELOMPENT = (process.env.NODE_ENV === 'development');

const setAppCookie = () => auth.currentUser && (
  auth.currentUser.getIdToken().then((token) => {
    Cookies.set('token', token, {
      domain: window.location.hostname,
      expire: 1 / 24, // One hour
      path: '',
      secure: !DEVELOMPENT,
    });
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
      // user is logged in
      setAppCookie();
      // Reset cookie before hour expires
      setInterval(setAppCookie, 3500);

      const { displayName, email } = user;
      $('#Login').modal('hide');
      toast.success(`Hola ${displayName || email}`, { autoClose: 2000 });
      dispatch(userLogged(user));
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
        .then(() => {
          unsetAppCookie();
        })
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
        dispatch(userLogged());
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 5000 });
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
