const { writeFileSync } = require('fs')

for (let i = 0; i <= 100000; i++) {
    writeFileSync('./Content/big.txt', `Hello World with Iteration: ${i}\n`, {flag: 'a'})
}