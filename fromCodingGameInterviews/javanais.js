//  this is a typscript exercice, add type to make it work(takes a string, returns a string)
function translate(text) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  let result = []
  const textArr = text.split('')
  console.log(textArr)
  for (let i = 0; i < textArr.length; i++) {
    if (vowel.includes(text[i])) {
      result.push('av')
      result.push(text[i])
    } else {
      result.push(text[i])
    }
  }
  return result.join('')
}

translate('codingame')
