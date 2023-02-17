// It does not require (./before module name)

const os = require('os')

// Info about current User
let user = os.userInfo();
console.log(user);


// Get the System Uptime Info
console.log(`The System Uptime is ${os.uptime()} seconds`)

// setInterval(() => {
//     console.log(os.uptime());
// }, 1000);



const currentOSInfo = {
    name: os.type(),
    release: os.release(),
    totalMEM: os.totalmem(),
    freeMEM: os.freemem(),
}

console.log(currentOSInfo);