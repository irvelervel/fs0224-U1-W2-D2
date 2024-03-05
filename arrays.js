// ARRAY IN JS
// Un array è un'altra struttura dati complessa in JS. Un array è una lista di VALORI, separati da virgola.
// Al contrario di un oggetto, che rappresenta un insieme di coppie chiave/valore, un array è semplicemente un'insieme di VALORI.
// Un array in JS si dichiara con una variabile inizializzata con const e come valore una coppia di parentesi QUADRE

const emptyArray = [] // un array vuoto

const studentsNames = ['Cristian', 'Carmen', 'Francesco', 'Giulio'] // un array di 4 elementi, tutte stringhe
const favouriteNumbers = [10, 50, 777, 1000, 200000] // un array di numeri
const mixedArray = ['EPICODE', 49, false, 50, 'Stefano'] // un array misto, poco usato nel quotidiano

// un array può contenere dati di qualunque tipo: stringhe, numeri, undefined, booleani, altri array, oggetti etc.

const animals = ['gatto', 'cane']
const people = ['stefano', 'claudia', 'jacopo']
const schools = ['epicode']
const otherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(animals[0]) // 'gatto'
console.log(schools[0]) // 'epicode'
console.log(schools[1]) // undefined

otherNumbers[0] // 1

console.log(animals.length) // 2
console.log(schools.length) // 1
console.log(emptyArray.length) // 0

// l'ultimo elemento di un array ha SEMPRE posizione length - 1
console.log('ULTIMO ELEMENTO DI ANIMALS', animals[animals.length - 1])
console.log('ULTIMO ELEMENTO DI PEOPLE', people[people.length - 1])
console.log('ULTIMO ELEMENTO DI SCHOOLA', schools[schools.length - 1])
console.log(
  'ULTIMO ELEMENTO DI OTHERNUMBERS',
  otherNumbers[otherNumbers.length - 1]
)
