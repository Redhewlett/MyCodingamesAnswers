function encode(str) {
  const letters = str.split('')
  let encoded = ''
  let count = 0
  let firstOccurenceRef = null

  for (let i = 0; i < letters.length; i++) {
    if (firstOccurenceRef === null) firstOccurenceRef = i
    console.log(letters[i], firstOccurenceRef)
    if (letters[i] === letters[i + 1]) {
      count++
    } else if (letters[i] !== letters[i + 1]) {
      count++
      encoded += String(count) + letters.slice(firstOccurenceRef, i + 1)[0]
      firstOccurenceRef = null
      count = 0
    }
  }
  console.log(encoded)
}

encode('aabaa')
// aabaa output 2a1b2a
// aaaabcccaaa output 4a1b3c3a
