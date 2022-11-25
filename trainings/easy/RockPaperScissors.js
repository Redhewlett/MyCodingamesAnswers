//rules
const rules = ['CP', 'PR', 'RL', 'LS', 'SC', 'CL', 'LP', 'PS', 'SR', 'RC']

const N = parseInt(readline())
const totalRounds = N - 1
let currentMatch = 0
const players = []

for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ')
  const NUMPLAYER = parseInt(inputs[0])
  const SIGNPLAYER = inputs[1]
  players.push({
    num: NUMPLAYER,
    sign: SIGNPLAYER,
    adv: []
  })
}

function round() {
  let winner
  let loser
  for (let i = 0; i < players.length; i++) {
    const playerA = players[i]
    const playerB = players[i + 1]

    //delete the loser and push him inside the adv array
    if (playerA.sign === playerB.sign) {
      //tie situation

      winner = playerA.num > playerB.num ? playerB : playerA
      if (winner === playerB) {
        playerB.adv.push(playerA.num)
        loser = playerA
      } else {
        playerA.adv.push(playerB.num)
        loser = playerB
      }
    } else if (rules.includes(playerA.sign + playerB.sign)) {
      //check the initials in the rules array to decide the winner
      winner = playerA
      loser = playerB
      playerA.adv.push(playerB.num)
    } else if (rules.includes(playerB.sign + playerA.sign)) {
      //check the initials in the rules array to decide the winner
      winner = playerB
      loser = playerA
      playerB.adv.push(playerA.num)
    }
    deleteFromArray(players, loser)
    //end loop
  }
}

function deleteFromArray(array, object) {
  const index = array.indexOf(object)
  array.splice(index, 1)
}

// round()
while (players.length !== 1) round()
console.log(players[0].num)
console.log(players[0].adv.join(' '))
