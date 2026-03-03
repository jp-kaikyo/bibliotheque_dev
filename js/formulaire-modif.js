///===================================///
/// ==== formulaire modification ==== ///
///===================================///


let btn_modif = document.getElementById("btn_modif")

document.addEventListener("DOMContentLoaded", function() {
    btn_modif.onclick = function() {


        /// INFO : recup des données  ///

        let modife_nom_input = document.getElementById("modife__prenom")
        let modife_age_input = document.getElementById("modife__age")

        let modife_prenom =  modife_nom_input.value
        let modife_age = Number(modife_age_input.value)

        /// INFO : utilisation des données  ///

        if ( modife_prenom !== "" && modife_age >= 10 ){
            localStorage.setItem("nom", modife_prenom)
            localStorage.setItem("age", modife_age)

            window.location.reload()
        } else {
            alert("il faut avoir un nom et un âge minimal de 10 ans")
        }
    }
})