// Ejercicio 11.16: Imprimir cadenas que terminen con los caracteres "ed"
function iniciar()
{
   document.getElementById( "btnFiltrarEd" ).addEventListener( "click", filtrarCadenasEd, false );
   filtrarCadenasEd();
}

function filtrarCadenasEd()
{
   var lineas = document.getElementById( "cadenasEntrada" ).value.split( "\n" );
   var coincidentes = [];

   for ( var i = 0; i < lineas.length; ++i )
   {
      var palabra = lineas[ i ].trim();
      if ( palabra.length >= 2 && palabra.substring( palabra.length - 2 ) === "ed" )
      {
         coincidentes.push( palabra );
      }
   }

   document.getElementById( "cadenasSalida" ).value =
      "Cadenas que terminan con 'ed':\n" + coincidentes.join( "\n" );
}

window.addEventListener( "load", iniciar, false );