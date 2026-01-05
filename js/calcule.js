///===================///
/// ==== CALCULE ==== ///
///===================///


//  recup les nombre  //
let valeur_une = document.getElementById("A");
let A = valeur_une.innerHTML;
A = Number(A)

let valeur_deux = document.getElementById("B");
let B = valeur_deux.innerHTML;
B = Number(B)

let valeur_resulta = document.getElementById("AB");
let AB = valeur_resulta.innerHTML;
AB = Number(AB)


//  addition et affichage  //
AB = A + B
valeur_resulta.innerHTML = AB


//  débogueur  //
console.log("[ CALCULE ]")
console.log("valeur 1 :", A, "+")
console.log("valeur 2 :", B, "=")
console.log("resulta  :", AB)