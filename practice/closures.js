function makeFunc() {
  const name = 'Nikola';

  function displayName() {
    console.log(`My name is ${name}`);
  }

  return displayName;
}

const newFunc = makeFunc();

newFunc();
