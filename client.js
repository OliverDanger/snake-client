const net = require('net');

const connect = function() {
  conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  
  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    conn.write('Name: ODD');
    // setInterval(() => {
    //   conn.write('Move: up');
    // },50)
  });
  
  // conn.on('connect', () => {
  // });
  
  conn.on('data', (serverData) => {
    console.log('Server says: ', serverData);
  });

  return conn;
};

module.exports = {
  net,
  connect
};