// Code your solutions in this file

function printBadges(arg) {
  for (let i = 0; i < arg.length; i++) {
    console.log(`Welcome ${arg[i]}! You are employee #${i + 1}.`);
  }
  return arg;
}

function tailsNeverFails() {
  let res = 0;
  while (Math.random() >= 0.5) {
    console.log(Math.random());
    res++;
  }
  return `You got ${res} tails in a row!`;
}
