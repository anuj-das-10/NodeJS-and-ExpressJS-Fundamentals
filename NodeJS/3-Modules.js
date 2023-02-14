// MODULES: 
// Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.

// CommonJS, every file is a module by default.
// Modules - Encapsulated Code (Only Shares the minimum)



// Imports
const names = require('./5-names');
const sayHello = require('./4-utils');
const data = require('./6-alternative-export-syntax')

sayHello(names.anuj)
sayHello(names.pragati)
sayHello("Joyita")


console.log(data);




// Imports and Run by default if function is invoked in external module
require('./7-addValues')