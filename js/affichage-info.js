///==========================///
/// ==== affichage info ==== ///
///==========================///


/// INFO : recup des données ///

let nom_afichage = document.querySelectorAll(".nom_afichage")
let age_afichage = document.querySelectorAll(".age_afichage")


/// INFO : utilisation des données ///

nom_afichage.forEach(element => {
    element.innerHTML = localStorage.getItem("nom")
})

age_afichage.forEach(element => {
    element.innerHTML = localStorage.getItem("age")
})


/// INFO : débogueur ///

console.log("[ UTILISATION INFO ]")
console.log(localStorage.getItem("nom"))
console.log(localStorage.getItem("age"))