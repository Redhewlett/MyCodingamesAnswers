//  not done yet

function computeGameState(nameP1, nameP2, wins) {
  let score = {
    [`${nameP1}`]: 0,
    [`${nameP2}`]: 0
  }
  for (let i = 0; i < wins.length; i++) {
    if (score[wins[i]] === 0) {
      score[wins[i]] = 15
    } else if (score[wins[i]] === 15) {
      score[wins[i]] = 30
    } else if (score[wins[i]] === 30) {
      score[wins[i]] = 40
    } else if (score[wins[i]] >= 40) {
      score[wins[i]] = 'ADVANTAGE'
    }
  }

  const result = Object.entries(score).map((element) => {
    return element[0] + ' ' + element[1]
  })

  if (score[nameP1] === score[nameP2]) {
    if (score[nameP1] === 15) {
      return '15a'
    } else if (score[nameP1] === 30) {
      return '30a'
    }
    //
  }
  if (score[nameP1] === 'ADVANTAGE') {
    return nameP1 + ' ' + 'ADVANTAGE'
  } else if (score[nameP2] === 'ADVANTAGE') {
    return nameP2 + ' ' + 'ADVANTAGE'
  }
  // return result
  return result.join(' - ')
}

console.log(computeGameState('P1', 'P2', ['P1', 'P2', 'P1', 'P2', 'P1', 'P2', 'P1']))
