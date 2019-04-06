/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const cookieParser = require('cookie-parser');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const {
  admin,
  toGeoJSON,
  reports,
  DEFAULT_POINT,
  storeOpinion,
  deleteOpinion,
  updateUser,
} = require('./server/lib-firestore');

// const serviceAccount = require('./serviceAccount.json');

require('pug');

const logger = t => console.log(t);

const mainWeatherData = {
  weather: {},
  forecast: {},
};

const mainReportsData = {
  geo: {},
};

const opinionesSubscribe = () => {
  const query2 = reports.within(DEFAULT_POINT, 22, 'position');
  const obs2 = query2.pipe(toGeoJSON('position', true));
  obs2.subscribe((geoj) => {
    console.log('reports changed');
    mainReportsData.geo = geoj;
    io.emit('reports', {
      metric: mainReportsData.geo,
    });
  });
};

opinionesSubscribe();

// getReportsGeoJSON(32.476784, -116.952631, 20);

const getData = () => {
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tijuana,mx&units=metric&lang=es&APPID=e55ac5454485f43016d78b600a54208c')
    .then((response) => {
      // logger('saving weather');
      io.emit('weather', {
        metric: response.data,
      });
      mainWeatherData.weather.metric = response.data;
    })
    .catch((error) => {
      logger(error);
    });
  axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Tijuana,mx&units=metric&lang=es&APPID=e55ac5454485f43016d78b600a54208c')
    .then((response) => {
      // logger('saving forecast');
      io.emit('forecast', {
        metric: response.data,
      });
      mainWeatherData.forecast.metric = response.data;
    })
    .catch((error) => {
      logger(error);
    });
};

app.set('PORT', process.env.PORT || 3000);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
// app.use(express.json());
// app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/weather', (req, res) => {
  logger('getting weather');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(mainWeatherData.weather.metric);
});

app.get('/forecast', (req, res) => {
  logger('getting forecast');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(mainWeatherData.forecast.metric);
});

app.get('/api/authorize', (req, res) => {
  const { token } = req.cookies;
  // logger(token);
  // res.setHeader('Access-Control-Allow-Origin', '*');
  if (!token) {
    res.send({ auth: 'error' });
  } else {
    admin.auth().verifyIdToken(token)
      .then((claims) => {
        // console.log(claims);
        // const role = claims.admin ? 'admin' : 'error';
        const {
          name: displayName,
          email,
          uid,
          picture: photoURL,
        } = claims;
        const newUser = {
          displayName,
          email,
          uid,
          photoURL,
          isAdmin: claims.admin,
        };
        updateUser(newUser);
        res.send({ auth: newUser });
      })
      .catch(console.log);
  }
});

app.post('/api/report', (req, res) => {
  const { token } = req.cookies;
  const {
    uid,
    info,
  } = req.body;
  // res.setHeader('Access-Control-Allow-Origin', '*');
  if (!token) {
    res.send({ auth: 'error' });
  } else {
    admin.auth().verifyIdToken(token)
      .then(() => {
        storeOpinion(uid, info, res);
      });
  }
});

app.post('/api/report-delete', (req, res) => {
  const { token } = req.cookies;
  const {
    uid,
    id,
  } = req.body;
  // res.setHeader('Access-Control-Allow-Origin', '*');
  if (!token && !!(uid)) {
    res.send({ auth: 'error' });
  } else {
    admin.auth().verifyIdToken(token)
      .then(() => {
        deleteOpinion(uid, id, res);
      })
      .catch((error) => {
        console.error('Error al guardar', error);
        res.send({ auth: 'error' });
      });
  }
});

app.use(express.static('www'));

io.on('connection', (socket) => {
  // console.log('a user connected');
  socket.emit('weather', {
    metric: mainWeatherData.weather.metric,
  });
  socket.emit('forecast', {
    metric: mainWeatherData.forecast.metric,
  });
  socket.emit('reports', {
    metric: mainReportsData.geo,
  });
  // socket.on('disconnect', () => {
  //   // console.log('user disconnected');
  // });
});

http.listen(app.get('PORT'), (error) => {
  if (error) {
    logger('Server started with an error', error);
    process.exit(1);
  }
  logger(`Server started and is listening at:${app.get('PORT')}`);
  getData();
});

cron.schedule('*/3 * * * *', () => {
  logger('fetching mainWeatherData');
  getData();
});
