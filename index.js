// Code your solutions in this file
function printBadges(names) {
  for (let index = 0; index < names.length; index++) {
    console.log(`Welcome ${names[index]}! You are employee #${index + 1}.`);
  };
  return names;
};


 function tailsNeverFails() {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  let count = 0;
  while (maybeTrue()) {
    count++;
  }
  return `You got ${count} tails in a row!`
 }
