// Configure the app settings here such as Web port, certificates, etc.



// read from the file system (used for SSL certs)
var fs = require('fs');

module.exports = {
  port: 8020,
  key  : fs.readFileSync(''),
  cert : fs.readFileSync(''),
  ca: [fs.readFileSync('')]
};
