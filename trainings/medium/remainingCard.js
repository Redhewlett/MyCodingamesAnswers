const N = 566373192
function calcPrevPow() {
  let x = 1
  while (x < N / 2) {
    x *= 2
  }
  return x
}

function calcResult(prevPow, number) {
  console.log((number - prevPow) * 2)
}
calcResult(calcPrevPow(N / 2), N)
