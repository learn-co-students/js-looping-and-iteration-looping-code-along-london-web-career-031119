// Code your solutions in this file
function printBadges(array){
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array
}


function tailsNeverFails(){
  let counter = 0.5
  while (counter >= 0.5) {
    Math.random()
    counter++
  }
  return `You got ${counter} tails in a row!`
}
