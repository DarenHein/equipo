document.addEventListener('DOMContentLoaded', function () {
  
    document.getElementById('slider').addEventListener('input', function (event) {
        document.getElementById('value').innerText = event.target.value;
    });

    
    document.getElementById('logButton').addEventListener('click', function () {
        var sliderValue = document.getElementById('slider').value;
        var lista = [];
        var lista2 = [];
        let abecedario = 'abcdefghijklmnopqrstuvwxyz';
        let abecedario2 = abecedario.toUpperCase();
        let numerosComoStrings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let caracteresEspeciales = [
            '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'
        ];
        
        for (let i = 0; i < abecedario.length; i++) {
            lista.push(abecedario[i]);
            lista2.push(abecedario2[i]);
        }

       
        let todosLosCaracteres = lista.concat(lista2, numerosComoStrings, caracteresEspeciales);

        
        let password = '';
        for (let i = 0; i < sliderValue; i++) {
            let randomIndex = Math.floor(Math.random() * todosLosCaracteres.length);
            password += todosLosCaracteres[randomIndex];
        }

      
        console.log('Contrasena generAda: ' + password);
    });
});
