function isTwin(a, b) {
  if (a.length !== b.length) return false

  const orderedA = [...a.toLowerCase()].sort()
  const orderedB = [...b.toLowerCase()].sort()

  let pass = 0
  for (let i = 0; i < a.length; i++) {
    if (orderedA[i] === orderedB[i]) {
      pass++
    }
  }
  if (pass !== a.length) {
    return false
  }
  return true
}

console.log(isTwin("abC", "cBa"))
