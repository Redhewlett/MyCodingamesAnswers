function countFrequencies(words) {
  words.sort()
  const count = {}

  for (const word of words) {
    if (count[word]) {
      count[word] += 1
    } else {
      count[word] = 1
    }
  }

  return Object.values(count)
}
