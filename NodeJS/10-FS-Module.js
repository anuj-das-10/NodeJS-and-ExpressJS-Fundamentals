const { readFileSync , writeFileSync , readFile , writeFile} = require('fs')

// fs - synchronous approach
const first = readFileSync('./Content/first.txt', 'utf-8')
const second = readFileSync('./Content/second.txt', 'utf-8')

console.log(first, second);
writeFileSync('./Content/result-sync.txt', `\nHere is the result: ${first}, ${second}`, {flag: 'a'})




// fs - asynchronous approach
console.log("Start ");
readFile('./Content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const second = result

    writeFile('./Content/result-async.txt', `Here is the result:  ${first}, ${second}`, (err,result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("Task is done");
    })
})

console.log("Starting Next Task");          // Executed irrespective of the above code execution is completed or not
