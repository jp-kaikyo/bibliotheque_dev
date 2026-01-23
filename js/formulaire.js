///======================///
/// ==== formulaire ==== ///
///======================///


document.addEventListener("DOMContentLoaded", function() {
    btn_valide.onclick = function() {


        /// INFO : recup des données  ///

        let nom_input = document.getElementById("nom")
        let age_input = document.getElementById("date")

        let btn_valide = document.getElementById("btn_valide")

        let prenom = nom_input.value
        let age = Number(age_input.value)


        /// INFO : utilisation des données  ///

        if ( prenom !== "" && age >= 10 ){
            localStorage.setItem("nom", prenom)
            localStorage.setItem("age", age)

            alert("il vous suffit de cliquer sur votre nom/age pour accéder à mon CV et lettre de motivation")

            window.location ='html/documents.html';
        } else {
            alert("il faut avoir un nom et un âge minimal de 10 ans")
        }
    }
})