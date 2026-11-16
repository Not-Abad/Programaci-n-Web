// Ejercicio 11.9: Codificación de frases en español a latín cerdo
function iniciar()
{
   document.getElementById( "btnTraducir" ).addEventListener( "click", codificarFrase, false );
   document.getElementById( "btnLimpiar" ).addEventListener( "click", function() {
      document.getElementById( "historialLatin" ).value = "";
   }, false );
   codificarFrase();
}

function imprimirPalabraEnLatin( palabra )
{
   return palabra.substring( 1 ) + palabra.charAt( 0 ) + "ae";
}

function codificarFrase()
{
   var entrada = document.getElementById( "fraseInput" ).value.trim();
   if ( entrada === "" )
   {
      return;
   }

   var tokens = entrada.split( " " );
   var traducidas = [];

   for ( var i = 0; i < tokens.length; ++i )
   {
      if ( tokens[ i ].length >= 2 )
      {
         traducidas.push( imprimirPalabraEnLatin( tokens[ i ] ) );
      }
   }

   var area = document.getElementById( "historialLatin" );
   area.value += "Original: " + entrada + "\nLatín cerdo: " + traducidas.join( " " ) + "\n\n";
}

window.addEventListener( "load", iniciar, false );