// transformer en flotant, enlever la, et mettre un .
const LON = parseFloat(readline().replace(',', '.'))
const LAT = parseFloat(readline().replace(',', '.'))
const N = parseInt(readline())

// table de hashage
let defibs = []

for (let i = 0; i < N; i++) {
  const DEFIB = readline().split(';')
  // on récupère juste les valeurs qu'on veut
  const long = parseFloat(DEFIB[4].replace(',', '.'))
  const lat = parseFloat(DEFIB[5].replace(',', '.'))
  const name = DEFIB[1]
  // on utilise notre fonction de calcule
  const d = calcDist(LAT, lat, LON, long)
  // envoie a table de hashage
  defibs[d] = name
}
// fonction qui calcule la distance entre deux points
// qui nous est fournis
function calcDist(latA, latB, longA, longB) {
  const x = (longB - longA) * Math.cos((latA + latB) / 2)
  const y = latB - latA
  return Math.sqrt(x * x + y * y) * 6371
}

// la réponse correspond au premier résultat dans le tableau
// ordonné du plus petit au plus grand
console.log(defibs[Object.keys(defibs).sort((a, b) => a - b)[0]])
