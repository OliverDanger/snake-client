let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit;
  }
  if (key === 'w') {
    console.log('it\'s w!')
    conn.write('Move: up')
  }
  if (key === 'a') {
    console.log('it\'s a!')
    conn.write('Move: left')
  }
  if (key === 's') {
    console.log('it\'s s!')
    conn.write('Move: down')
  }
  if (key === 'd') {
    console.log('it\'s d!')
    conn.write('Move: right')
  }
};

module.exports = {
  setupInput
};