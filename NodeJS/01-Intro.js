// NODE JS

let age = 18;

if(age < 18) {
    console.log(`
    Current Age: ${age}
    You can apply for Driver Liscence after ${18 - age} years.
    Currently, you are not eligible for Driver Liscence.
    `);
}
else {
    console.log(`
    Current Age: ${age}
    You are eligible for Driver Liscence.
    `);
}

console.log(`\nThanks for your Query!`);