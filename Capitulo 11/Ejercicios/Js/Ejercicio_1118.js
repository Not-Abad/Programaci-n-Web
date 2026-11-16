// Ejercicio 11.18: Generar todos los códigos de tres dígitos del 000 al 255
function iniciar()
{
   var salida = "";

   for ( var codigo = 0; codigo <= 255; ++codigo )
   {
      var codigoTresDigitos = ( "00" + codigo ).slice( -3 );
      var representacion = ( codigo < 32 || codigo === 127 ) ? "[Ctrl]" : String.fromCharCode( codigo );

      salida += codigoTresDigitos + ": " + representacion + "\t";

      if ( ( codigo + 1 ) % 8 === 0 )
      {
         salida += "\n";
      }
   }

   document.getElementById( "tablaCodigos" ).value = salida;
}

window.addEventListener( "load", iniciar, false );