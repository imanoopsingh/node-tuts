const { writeFileSync} = require('fs');

for (let i=0; i <= 100000; i++ ) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}

console.log('This file will create long long txt file.')
