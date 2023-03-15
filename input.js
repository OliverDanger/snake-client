const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setExncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput(key));
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('goodbye!');
    process.exit;
  }
};

module.exports = {
  setupInput
}