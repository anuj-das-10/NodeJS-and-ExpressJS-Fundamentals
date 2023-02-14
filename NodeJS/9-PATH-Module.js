const path = require('path')

console.log(path.sep);

const filePath = path.join('/Content', '/Subfolder', 'path.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'Content', 'Subfolder', 'path.txt');
console.log(absolute);