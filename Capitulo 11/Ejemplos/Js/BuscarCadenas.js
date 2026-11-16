// Fig. 11.7: BuscarCadenas.js
// Búsqueda en cadenas con indexOf y lastIndexOf.
var letras = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function botonPresionado()
{
   var campoEntrada = document.getElementById( "campoEntrada" );

   document.getElementById( "resultados" ).innerHTML =
      "<p>La primera ocurrencia se encuentra en el &iacute;ndice " +
         letras.indexOf( campoEntrada.value ) + "</p>" +
      "<p>La &uacute;ltima ocurrencia se encuentra en el &iacute;ndice " +
         letras.lastIndexOf( campoEntrada.value ) + "</p>" +
      "<p>La primera ocurrencia del &iacute;ndice 12 se encuentra en el &iacute;ndice " +
         letras.indexOf( campoEntrada.value, 12 ) + "</p>" +
      "<p>La &uacute;ltima ocurrencia del &iacute;ndice 12 se encuentra en el &iacute;ndice " +
         letras.lastIndexOf( campoEntrada.value, 12 ) + "</p>";
} // fin de la función botonPresionado

// registrar manejador de evento click para botonBuscar
function iniciar()
{
   var botonBuscar = document.getElementById( "botonBuscar" );
   botonBuscar.addEventListener( "click", botonPresionado, false );
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );