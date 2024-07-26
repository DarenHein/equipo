document.addEventListener('DOMContentLoaded', function() {
    // Actualizar el valor mostrado junto al slider
    document.getElementById('slider').addEventListener('input', function(event) {
        document.getElementById('value').innerText = event.target.value;
    });

    // Loguear el valor del slider al presionar el botón
    document.getElementById('logButton').addEventListener('click', function() {
        var sliderValue = document.getElementById('slider').value;
        var letras = []
        for(let i = 0 )
    });
});
