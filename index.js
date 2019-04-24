// Code your solutions in this file
function printBadges(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(`Welcome ${string[i]}! You are employee #${i+1}.`);
    }
    return string;
}

function tailsNeverFails() {
    let counter = 0
    while (Math.random() >= 0.5) {
        counter++
    }
    return `You got ${counter} tails in a row!`;
}