// COSTRUTTO IF

// un blocco IF è composto da una condizione () e una serie di istruzioni {}

// if(condizione) {
//     codice da eseguire
// }

// Se la condizione si verifica (risulterà true) il blocco di istruzioni verrà eseguito
// Se la condizione NON si verifica (risulterà false) il blocco di istruzioni NON verrà eseguito (verrà ignorato)

const myName = 'Mario'
const writtenScore = 15
const passedOralExam = false

// La condizione deve diventare true in due situazioni:
// - esame orale passato e esame scritto >= 18
// - ti chiami Mario

if ((writtenScore >= 18 && passedOralExam === true) || myName === 'Mario') {
  // passo l'esame solamente se l'orale è andato bene e ho preso un voto allo scritto di almeno 18
  console.log("Hai passato l'esame!")
} else {
  console.log("NON hai passato l'esame!")
}

if (writtenScore >= 18 && passedOralExam === true) {
  console.log("Complimenti, hai passato l'esame!")
} else if (myName === 'Mario') {
  console.log('Chiedo scusa, Mario! Ecco il tuo certificato di laurea!')
} else {
  console.log('Ci rivediamo al prossimo appello!')
}

const studentName = 'Stefano'

if (studentName) {
  console.log('Ciao, ', studentName)
}

let myNumber = 1

if (myNumber) {
  console.log('numero valido!')
}

// stringhe vuote -> falsy
// numero 0 -> falsy
// null o undefined -> falsy

// tutto il resto è truthy!
