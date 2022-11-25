// A growing number is a number where each digit, from left to right, is greater than or equal to the previous one.
// Given a number n, which may or may not be a growing number, you have to find the first growing number > n.
// Example:
// With n = 19, the first growing number greater than n is 22, because both 20 and 21 have a second digit that is smaller than the first one.
// Note: This problem can be solved without converting n to a number.
// Note2: this should be true for the whole string, meaning in 111252 all the pairs([1,1],[1,1],[1,2],[2,5]) are good excetp 5 and 2

const nPlusOne = String(+n + 1).split('')
let nextNumb = []

for (let i = 0; i < nPlusOne.length - 1; i++) {
  if (+nPlusOne[i + 1] < +nPlusOne[i]) {
    const begin = nPlusOne.slice(0, i + 1)
    const replace = nPlusOne.slice(i + 1, nPlusOne.length).map((element) => (element = nPlusOne[i]))

    nextNumb = [...begin, ...replace]
    break
  }
}

console.log(nextNumb.join(''))
