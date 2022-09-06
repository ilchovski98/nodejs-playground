function bar() {
  console.log('bar');
}

function boo() {
  console.log('boo');
}

function foo() {
  console.log('process', process);
  process.nextTick(() => {
    console.log('Processs at the end????');
  });

  bar();

  setTimeout(() => {
    console.log('Set Timeout');
  }, 0);

  new Promise((resolve, reject) => {
    resolve('Promise!!!!!!!!')
  })
  .then(res => console.log(res));

  console.log('yeah');
  console.log('yeah');
  console.log('yeah');

  boo();
}
foo();
