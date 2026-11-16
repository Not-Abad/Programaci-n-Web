// Ejercicio 11.15: Imprimir cadenas que comiencen con el carácter "b"
function iniciar()
{
   document.getElementById( "btnFiltrarB" ).addEventListener( "click", filtrarCadenasB, false );
   filtrarCadenasB();
}

function filtrarCadenasB()
{
   var lineas = document.getElementById( "cadenasEntrada" ).value.split( "\n" );
   var coincidentes = [];

   for ( var i = 0; i < lineas.length; ++i )
   {
      var palabra = lineas[ i ].trim();
      if ( palabra.charAt( 0 ) === "b" )
      {
         coincidentes.push( palabra );
      }
   }

   document.getElementById( "cadenasSalida" ).value =
      "Cadenas que comienzan con 'b':\n" + coincidentes.join( "\n" );
}

window.addEventListener( "load", iniciar, false );