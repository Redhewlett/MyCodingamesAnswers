function average(table) {
  if (table.length === 0 || table.length === 'null') return 0
  return table.reduce((a, b) => a + b) / table.length
}
