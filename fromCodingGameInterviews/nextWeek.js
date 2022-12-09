function nextWeek(date) {
  date.setDate(date.getDate() + 7)
  return date
}

console.log(nextWeek(new Date()))
