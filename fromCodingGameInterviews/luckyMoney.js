// rules
// no 4$ envelop because 4 = death
// best luck if 8$ envelop
// not good to give nothing....

// return number of gift = to 8$
// use all budget unless there is enough 8$ gifts
// give 0 only if the budget is not enough
function luckyMoney(money, giftees) {
  if (money / giftees === 8) {
    return giftees
  }
  let budget = money
  const envelops = {}

  for (let i = 0; i < giftees; i++) {
    envelops[i] = 4
    budget -= 4
  }
  while (budget > 0) {
    for (let envelop in envelops) {
      envelops[envelop] += 1
      budget -= 1
      console.log(envelops, budget)
    }
  }
}

luckyMoney(24, 4)
