const os = require("os");

console.log(os.freemem()/(1024*1024*1024)+"GB");
console.log(os.homedir());
console.log(os.machine());
console.log(os.loadavg());