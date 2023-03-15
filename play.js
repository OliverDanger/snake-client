const net = require('net');

let conn;
const connect = function() {
  conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.setEncoding('utf-8');

  return conn;
};

console.log('Connecting ...');
connect();

conn.on('connect', (serverData) => {
  console.log('Server says: ', serverData);
});
conn.on('data', (serverData) => {
  console.log('Server says: ', serverData);
});