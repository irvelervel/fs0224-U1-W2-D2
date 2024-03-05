// ESEMPI "REALI" :)

const arrayOfDogs = [
  {
    type: 'Dog',
    breed: 'Pomeranian',
    numberOfPaws: 4,
    furColor: ['orange'],
    name: 'Fufo',
  },
  {
    type: 'Dog',
    breed: 'Shepard',
    numberOfPaws: 4,
    furColor: ['brown', 'black', 'grey', 'white', 'lightgrey'],
    name: 'Lola',
  },
  {
    type: 'Dog',
    breed: 'Bulldog',
    numberOfPaws: 4,
    furColor: ['brown'],
    name: 'Cagnaccio',
  },
]

console.log(arrayOfDogs[1]) // un OGGETTO!
const nameOfTheSecondDog = arrayOfDogs[1].name // 'Lola'
console.log(nameOfTheSecondDog)

const colorOfTheThirdDog = arrayOfDogs[2].furColor[0]
console.log(colorOfTheThirdDog)

const secondColorOfTheSecondDog = arrayOfDogs[1].furColor[1]

const lastColorOfTheSecondDog =
  arrayOfDogs[1].furColor[arrayOfDogs[1].furColor.length - 1]

console.log(lastColorOfTheSecondDog)

arrayOfDogs[1].furColor[arrayOfDogs[1].furColor.length - 1]

// ESEMPIO DI CODICE STRUTTURATO MEGLIO
arrayOfDogs[1].furColor[arrayOfDogs[1].furColor.length - 1]

const lolaObject = arrayOfDogs[1] // { oggetto del cane lola }
const lastValidIndexOfFurColor = lolaObject.furColor.length - 1 // il numero 4
const lastColorOfLola = lolaObject.furColor[lastValidIndexOfFurColor]
console.log(lastColorOfLola)

arrayOfDogs[1].furColor.push('darkbrown')
