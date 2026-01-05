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