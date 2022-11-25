function average(table) {
  if (!table || table.length === null) return 0
  return table.reduce((a, b) => a + b) / table.length
}
