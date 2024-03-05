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

// ordinare un array in ordine alfabetico
animals.sort() // animals è cambiato, ed è diventato ['cane', 'gatto']
const arrayOfThreeNumbers = [2, 3, 1]
arrayOfThreeNumbers.sort()
console.log(arrayOfThreeNumbers) // [1, 2, 3]

// aggiungere un elemento ad un array
// in ultima posizione
arrayOfThreeNumbers.push(4)
// arrayOfThreeNumbers è cambiato, ora è diventato [1, 2, 3, 4]
console.log('arrayOfThreeNumbers', arrayOfThreeNumbers)
arrayOfThreeNumbers.push(5, 6)
console.log('arrayOfThreeNumbers', arrayOfThreeNumbers)
// [1, 2, 3, 4, 5, 6]

// oppure in prima posizione
arrayOfThreeNumbers.unshift(0)
// [0, 1, 2, 3, 4, 5, 6]

console.log('arrayOfThreeNumbers', arrayOfThreeNumbers)

// rimuovere l'ultimo elemento di un array
arrayOfThreeNumbers.pop() // tolgo il 6
console.log('arrayOfThreeNumbers', arrayOfThreeNumbers)
arrayOfThreeNumbers.pop() // tolgo il 5
arrayOfThreeNumbers.pop() // tolgo il 4
arrayOfThreeNumbers.pop() // tolgo il 3
console.log('arrayOfThreeNumbers', arrayOfThreeNumbers)

const arrayOfComputers = ['macbook', 'xps15', 'surfacepro']
// delete arrayOfComputers[1] // funziona, ma lascia un "buco" (non altera la lunghezza dell'array)
arrayOfComputers.splice(1, 1) // splice richiede tra parentesi l'indice da cui cominciare a rimuovere elementi, e il numero
// di elementi da rimuovere
console.log(arrayOfComputers)

const students = [
  'Federico',
  'Francesco',
  'Gabriele',
  'Giovanni',
  'Giulio',
  'Kassandra',
]
// inseriamo tra Gabriele e Giovanni il nuovo studente Marco
students.splice(3, 0, 'Marco') // all'indice 3 (terzo elemento, Giovanni) eliminane 0 e inserisci prima di lui 'Marco'
console.log('students', students)
