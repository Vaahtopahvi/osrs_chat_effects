

var previousClass = "";

document.querySelector('.btn').addEventListener('click', function() {      //valitaan nappi
    var inputText = document.querySelector('.input').value;                //InputTextin arvoksi muuttuu käyttäjän syöttämä teksti
    var h1 = document.querySelector('h1');                                 //h1 arvoksi muuttuu otsikko teksti
    h1.textContent = inputText;                                            //h1 teksti muuttuu käyttäjän syöttämäksi tekstiksi

    var mode = document.querySelector('#select').value;                    //mode arvoksi muuttuu valittu arvo select elementistä

        if (previousClass) {                                               //jos previousClass on totta            
        h1.classList.remove(previousClass);                                //poistetaan h1 elementin luokista previousClassin arvo
    }
    h1.classList.add(mode);                                                //lisätään h1 elementin luokkiin moden arvo
    previousClass = mode;                                                  //previousClass arvoksi muuttuu mode
});