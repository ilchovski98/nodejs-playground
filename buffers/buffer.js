const firstBuffer = Buffer.alloc(1024, 1, 'ascii');
console.log('firstBuffer', firstBuffer);
const stringBuff = Buffer.from('My name is Nikola');
console.log('stringBuff', stringBuff);
const firstBufferCopy = Buffer.from(firstBuffer);
console.log('firstBufferCopy', firstBufferCopy);


console.log(firstBuffer.toString());
console.log(stringBuff.toString());

const bro = Buffer.from('bro!');
console.log('Bro! to hex code: ', bro.toString('hex'));
