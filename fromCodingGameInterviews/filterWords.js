function filterWords(words, letters) {
  const lettersArr = [...letters]
  let result = []
  for (let i = 0; i < words.length; i++) {
    if (checkLetters(words[i], lettersArr)) {
      result.push(words[i])
    }
  }
  console.log(result)
}

function checkLetters(word, arr) {
  let match = 0
  for (let j = 0; j < arr.length; j++) {
    if (word.includes(arr[j])) {
      match++
    }
  }
  if (match > 0) {
    return true
  }
  return false
}

filterWords(['the', 'dog', 'got', 'a', 'bone'], 'ae')
