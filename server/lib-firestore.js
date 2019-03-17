const admin = require('firebase-admin');
const firebase = require('firebase');
const geofirex = require('geofirex');
const {
  toGeoJSON,
  // get,
} = require('geofirex');

// console.log(process.env);

const serviceAccount = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key.replace(/\\n/g, '\n'),
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
};

const adminconfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://implandb.firebaseio.com',
};

const config = {
  apiKey: 'AIzaSyCuW0T-mYwXUgrU12vv3UfUPA7eo0qiW7Q',
  authDomain: 'implandb.firebaseapp.com',
  databaseURL: 'https://implandb.firebaseio.com',
  projectId: 'implandb',
  storageBucket: 'implandb.appspot.com',
  messagingSenderId: '606208766771',
};

admin.initializeApp(adminconfig);
firebase.initializeApp(config);

const settings = { timestampsInSnapshots: true };

const db = admin.firestore();

const firestore = firebase.firestore();
firestore.settings(settings);

const geo = geofirex.init(firebase);

const DEFAULT_POINT = geo.point(32.520666, -117.021315);


const COLORS = [
  '#b48cc3',
  '#d18a9a',
  '#7e90ca',
  '#ef5659',
];

const TYPES = {
  4001: 'Derrumbe de inmueble',
  4011: 'Riesgo de electrocutamiento',
  4021: 'Inundacion de inmueble',
  4031: 'Arroyo crecido',
  4041: 'Azolves/Taponamientos',
  4051: 'Socavones',
  4061: 'Deslave de talud o cerro',
  4071: 'Elemento vertical colapsado',
  4081: 'Inundacion de vialidades',
  4091: 'Asentamiento grave de inmueble',
  4101: 'Bardas colapsadas o en riesgo',
  4111: 'Interrupción de energía eléctrica',
  4121: 'Fugas',
  4131: 'Otro',
};

const reports = geo.collection('opinions', ref => ref.where('category', '==', 3));

const opinions = db.collection('opinions');
const users = db.collection('users');

const storeOpinion = (uid, info, res) => {
  const {
    address,
    latitude,
    longitude,
    opinion,
  } = info;
  const {
    category,
    message,
    subcategory,
    type,
  } = opinion;
  const categ = parseInt(category, 10);
  const subcateg = parseInt(subcategory, 10);
  const t = parseInt(type, 10);
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  const timestamp = admin.firestore.FieldValue.serverTimestamp();
  const { data } = geo.point(lat, lon);
  const position = {
    geopoint: new admin.firestore.GeoPoint(lat, lon),
    geohash: data.geohash,
  };
  opinions.add({
    address,
    latitude: lat,
    longitude: lon,
    category: categ,
    message,
    subcategory: subcateg,
    type: t,
    timestamp,
    user: uid,
    position,
    open: true,
    resolved: false,
    name: TYPES[t],
    'marker-color': COLORS[categ],
    'marker-size': 'large',
  })
    .then((docRef) => {
      console.log('Document successfully written! direccion');
      users.doc(uid).set({
        [docRef.id]: true,
      }, { merge: true })
        .then(() => {
          res.send({ auth: 'Success' });
        })
        .catch((error) => {
          console.error('Error al guardar en usuario', error);
          res.send({ auth: '404' });
        });
    })
    .catch((error) => {
      console.error('Error al guardar', error);
      res.send({ auth: '404' });
    });
};

module.exports = {
  admin,
  firebase,
  toGeoJSON,
  reports,
  DEFAULT_POINT,
  storeOpinion,
};
