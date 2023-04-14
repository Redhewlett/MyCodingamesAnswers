function isTwin(a, b) {
  if (a.length !== b.length) return false

  const orderedA = [...a.toLowerCase()].sort().join("")
  const orderedB = [...b.toLowerCase()].sort().join("")
  return orderedA == orderedB
}

console.log(isTwin("abC", "cBa"))
