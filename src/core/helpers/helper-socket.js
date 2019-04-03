import io from 'socket.io-client';

const socketIO = io();

socketIO.on('connect', () => {
  console.log('online');
});

socketIO.io.on('connect_error', () => {
  console.log('offline');
});

export default socketIO;
