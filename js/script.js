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




///============================///
/// ==== INFO UTILISATEUR ==== ///
///============================///


let nom = document.getElementById("nom")
let boutton_valide = document.getElementById("btn_valide")
let affichage = document.getElementById("NOM")


boutton_valide.onclick = function(){
    let prenom = nom.value;
    affichage.innerHTML = prenom
}



//  débogueur  //
console.log("[ INFO UTILISATEUR ]")
console.log("donner brut :", nom)




///===============///
/// ==== API ==== ///
///===============///


let button_charger = document.getElementById("charger");

button_charger.onclick = function(){
    let url = "https://worldtimeapi.org/api/timezone/Europe/Paris";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let heure = data.datetime;
        
        document.getElementById("HEURE").innerHTML = heure;
    })
}


//  débogueur  //
console.log("[ API ]")