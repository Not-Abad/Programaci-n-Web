// Ejercicio 11.14: Frecuencia de cada letra del alfabeto usando indexOf y un arreglo
function iniciar()
{
   document.getElementById( "btnAnalizarAlfabeto" ).addEventListener( "click", analizarAlfabeto, false );
   analizarAlfabeto();
}

function analizarAlfabeto()
{
   var alfabeto = "abcdefghijklmnopqrstuvwxyz";
   var totales = new Array( alfabeto.length );
   var texto = document.getElementById( "textoEntrada" ).value.toLowerCase();

   for ( var i = 0; i < alfabeto.length; ++i )
   {
      var letra = alfabeto.charAt( i );
      var cuenta = 0;
      var pos = texto.indexOf( letra );

      while ( pos !== -1 )
      {
         ++cuenta;
         pos = texto.indexOf( letra, pos + 1 );
      }

      totales[ i ] = cuenta;
   }

   var salida = "Letra\t| Ocurrencias\t|| Letra\t| Ocurrencias\n";
   salida += "-".repeat( 54 ) + "\n";

   for ( var j = 0; j < 13; ++j )
   {
      salida += alfabeto.charAt( j ).toUpperCase() + "\t| " + totales[ j ] + "\t\t|| " +
         alfabeto.charAt( j + 13 ).toUpperCase() + "\t| " + totales[ j + 13 ] + "\n";
   }

   document.getElementById( "salidaTablaAlfabeto" ).value = salida;
}

window.addEventListener( "load", iniciar, false );