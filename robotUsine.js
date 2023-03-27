// bulky if the package's dimensions are greater than or equal to 150 cm (any side) or the volume is greater than or equal to 1,000,000 cm3
// heavy if the package weighs more than 20 kg
// STANDARD if the package is neither heavy nor bulky
// SPECIAL if the package is either heavy or bulky but not both
// REJECTED if the package is both heavy and bulky

function solve(width, height, length, mass) {
  const maxVolume = 1000000
  const targetCm = 150
  const isHeavy = mass >= 20

  const isMaxVolume = width * height * length >= maxVolume
  let bulky = false

  if (width >= targetCm || height >= targetCm || length >= targetCm || isMaxVolume) {
    bulky = true
  }

  if (isHeavy && bulky) {
    return "REJECTED"
  } else if (isHeavy || bulky) {
    return "SPECIAL"
  }
  console.log(isMaxVolume, bulky)
  return "STANDARD"
}

// tests
console.log(solve(10, 10, 10, 10)) // STANDARD
console.log(solve(100, 100, 100, 10)) // SPECIAL
console.log(solve(100, 100, 100, 20)) // REJECTED
