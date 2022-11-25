const N = parseInt(readline())
const horses = []
let maxPower = 10000000

for (let i = 0; i < N; i++) {
  horses.push(parseInt(readline()))
}

horses.sort(function (a, b) {
  return a - b
})

for (let j = 0; j < N; j++) {
  if (horses[j] - horses[j - 1] < maxPower) {
    maxPower = horses[j] - horses[j - 1]
  }
}
console.log(maxPower)
