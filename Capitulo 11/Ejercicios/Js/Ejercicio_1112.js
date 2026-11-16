// Ejercicio 11.12: Imprimir texto en mayúsculas y minúsculas
function iniciar()
{
   document.getElementById( "btnConvertir" ).addEventListener( "click", convertirTexto, false );
   convertirTexto();
}

function convertirTexto()
{
   var texto = document.getElementById( "textoInput" ).value;
   document.getElementById( "resultadosCase" ).innerHTML =
      "<p><strong>Mayúsculas:</strong> <span class='respuesta'>" + texto.toUpperCase() + "</span></p>" +
      "<p><strong>Minúsculas:</strong> <span class='respuesta'>" + texto.toLowerCase() + "</span></p>";
}

window.addEventListener( "load", iniciar, false );