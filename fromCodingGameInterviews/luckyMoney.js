// rules
// no 4$ envelop because 4 = death
// best luck if 8$ envelop
// not good to give nothing....

// return number of gift = to 8$
// use all budget unless there is enough 8$ gifts
// give 0 only if the budget is not enough
function luckyMoney(money, giftees) {
  if (money >= giftees * 8) {
    return giftees
  }
  if (money < 8 + giftees - 1 || money === 12) {
    return 0
  }

  return 1 + luckyMoney(money - 8, giftees - 1)
}

console.log(luckyMoney(24, 4))
