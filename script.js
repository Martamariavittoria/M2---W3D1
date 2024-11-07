/* /* ✅ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(numero1, numero2) {

    if (numero1 === numero2) {
        return (numero1 + numero2) * 3
    }

    else {
        return numero1 + numero2
    }
}

console.log(crazySum(5, 5))

/* ✅ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/


function boundary(numero3) {

    if (numero3 === 400 || (numero3 > 20 && numero3 <= 100)) {
        return true
    }
    else {
        return false
    }
}

console.log(boundary(99))


/* ✅ ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(stringaDue) {
    return stringaDue.split("").reverse("").join("")
}

console.log(reverseString("Guglielmo"))



/* function reverseString(stringaDue){
    let stringa78 =  stringaDue.split("").reverse("").join("")
    console.log(stringa78)
}

(reverseString("Guglielmo")) */

//DOVE : 
//str.split(''): Trasforma la stringa in un array di caratteri.
//reverse(): Inverte l'ordine degli elementi nell'array.
//join(''): Concatena gli elementi dell'array per formare una nuova stringa (e quindi me li restituisce al contrario perchè reverse li ha invertiti). 



/* ✅ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa) {
    let parola = stringa.split(" ");

    for (let i = 0; i < parola.length; i++) {
        parola[i] = parola[i][0].toUpperCase() + parola[i].slice(1);
    }
    console.log(parola.join(" "))
}
upperFirst("Ciao come va")



/*✅ ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

let numeroRandom = [];
function giveMeRandom(n) {
    for (let j = 0; j < n ; j++) {
         let numeroRandom1 = Math.floor(Math.random(n) * (n + 1))
         //SPIEGAZIONE MATH.FLOOR E MATH.RANDOM
         //math.random invece prende un numero random da n * n + 1, Funzione per numeri casuali: Math.random() è una funzione
         // in JavaScript che genera un numero casuale. Questo numero è sempre un decimale (ad esempio, 0.45 o 0.78) e si trova
         // tra 0 (incluso) e 1 (escluso). Significa che può essere 0, ma non può mai essere 1 (per questo mi serve math.Floor)
         //math.Floor arrotonda il numero per difetto, quindi mi impedisce di avere numeri con la virgola 
        numeroRandom.push(numeroRandom1)  
    }
    console.log(numeroRandom)
}

giveMeRandom(8)

/* SCRIVI QUI LA TUA RISPOSTA */

//✅ EXTRA:
/*✅ ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let area = function (lato1, lato2) {
    return (lato1 * lato2) 
}

console.log(area(5,5))


/* ✅ ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(n) {
    if (n > 19) {
        
        return (n - 19) * 3
    }
    else {
        // posso usare il comando Math.abs() per calcolare la differenza assoluta tra n e 19.
        return Math.abs(n - 19)
    }
}
console.log(crazyDiff(17))
console.log(crazyDiff(20))


/*✅ ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(stringa) {
    if (stringa.startsWith("code")) {
        // startsWith() per verificare se la stringa inizia con "code"
        return stringa
    }
    else {
        return "code" + stringa
    }
}

console.log(codify("codeCiao"))
console.log(codify("Ciao"))


/* ✅ ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(n) {
    if ((n % 3 === 0 || n % 7 === 0)) {
        return true
    }
    else {
        return false
    }
}
console.log(check3and7(5))


/* ✅ ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(stringaUno) {
    return stringaUno.slice(1, -1)
}
console.log(cutString("Guglielmo"))


