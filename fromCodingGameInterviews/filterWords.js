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

function checkLetters(word, letters) {
  for (let i = 0; i < letters.length; i++) {
    if (word.includes(letters[i])) {
      return true
    }
  }
}

filterWords(['the', 'dog', 'got', 'a', 'bone'], 'ae')
