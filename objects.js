// GLI OGGETTI IN JS!
// un oggetto è una struttura dati complessa. Serve a rappresentare delle entità più "realistiche",
// composte da diverse proprietà che fanno a capo alla stessa risorsa.
// Sostanzialmente raggruppano diverse proprietà in un'unica entità.

// per definire un oggetto, solitamente lo si assegna ad una variabile
// la dichiarazione di questa variabile solitamente avviene con la keyword "const"

const firstObject = {}
// questo è un oggetto vuoto, privo di proprietà.

// creiamo ora un oggetto con delle proprietà
const character = {
  // un oggetto è composto potenzialmente da infinite coppie -> chiave: valore
  // ogni coppia è separata dalla successiva tramite una virgola
  firstName: 'Jill',
  lastName: 'Valentine',
  age: 20,
  gender: 'F',
  originalCharacter: true,
  initialWeapons: {
    gun: true,
    knife: true,
  },
  'name-of-team': 'Alpha',
  skills: ['shooting', 'killingZombies', 'lockpicking'],
}

// le proprietà in un oggetto non necessitano di keywork per la dichiarazione (non ci va let, non ci va const)
// un oggetto non può avere due proprietà dotate della stessa chiave

// come estraiamo, leggiamo una delle proprietà?
// DUE METODOLOGIE:
// 1) DOT NOTATION
// andiamo a leggere una proprietà dell'oggetto utilizzando "nome.chiave"
console.log(character.firstName) // "Jill"
console.log(character.gender) // "F"
console.log(character.age) // "F"
console.log(character)

console.log(character.gun) // undefined
console.log(character.initialWeapons.gun) // true
// console.log(character.name-of-team) -> non funziona

// 2) SQUARE BRACKET NOTATION []
// andiamo a leggere una proprietà dell'oggetto utilizzando "nome[chiave]"
console.log(character['firstName']) // 'Jill'
// perchè devo complicarmi la vita con la square bracket notation? ogni tanto è necessaria, es:
console.log(character['name-of-team']) // 'alpha'
console.log(character['initialWeapons']['gun']) // true

// altra situazione
let property = 'gender'

console.log(character.property) // undefined :(
console.log(character[property]) // 'F', sarebbe come fare character.gender

// immaginiamo di avere un'e-commerce con vari prodotti, ciascuno dotati di due prezzi, uno in sconto e uno regolare

const obj1 = {
  name: 'pen',
  qty: 50,
  price: 2.99,
  discountedPrice: 1.99,
}

const obj2 = {
  name: 'notebook',
  qty: 30,
  price: 4.99,
  discountedPrice: 3.99,
}

const obj3 = {
  name: 'briefcase',
  qty: 30,
  price: 9.99,
  discountedPrice: 7.99,
}

// non dico all'e-commerce di leggere sempre la proprietà "price" o sempre la proprietà "discountedPrice" per ogni oggetto,
// ma mi baso sul valore di una variabile che rappresenta la proprietà da mostrare nelle card dell'e-commerce
const priceToRead = 'price'
// qualora volessi mettere TUTTI i prodotti in sconto, mi basterebbe cambiare il valore di priceToRead da "price" a "discountedPrice"

console.log(obj1[priceToRead]) // 2.99
console.log(obj2[priceToRead]) // 3.99

// con le stesse tecniche è anche possibile modificare il valore di una proprietà, crearne di nuove o eliminarne di esistenti
// MODIFICA
obj3.qty = 50
obj3.discountedPrice = 6.99

// CREAZIONE NUOVE PROPRIETÀ
obj3.available = false

// ELIMINAZIONE PROPRIETÀ ESISTENTI
delete obj3.available

// il fatto che obj3 sia stata inizializzata con const previene solamente la sua riassegnazione,
// ma non pregiudica la modifica, la creazione e la eliminazione delle proprietà in essa contenute
// obj3 = 'Stefano' // ERRORE
console.log(obj3)

const newObj3 = obj3
newObj3.qty = 100

// abbiamo appena modificato ANCHE la qty di obj3 :(
