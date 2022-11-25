const n = parseInt(readline()) // the number of temperatures to analyse
var inputs = readline().split(' ')
const goal = 0
let below = []
let above = []

if (n === 0) return console.log(n)

for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]) // a temperature expressed as an integer ranging from -273 to 5526
  if (t < 0) {
    below.push(t)
  } else {
    above.push(t)
  }
}

const sortedNegative = below.sort(function (a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
})
if (above.length === 0) return console.log(sortedNegative[0])

const sortedPositive = above.sort(function (a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
})

if (sortedPositive[0] > Math.abs(sortedNegative[0])) {
  return console.log(sortedNegative[0])
} else if (sortedPositive[0] === Math.abs(sortedNegative[0])) {
  return console.log(sortedPositive[0])
}
return console.log(sortedPositive[0])
