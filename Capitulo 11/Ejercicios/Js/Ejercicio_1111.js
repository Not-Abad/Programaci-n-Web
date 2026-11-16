// Ejercicio 11.11: Mostrar los tokens de una línea en orden inverso
function iniciar()
{
   document.getElementById( "btnInvertir" ).addEventListener( "click", invertirTokens, false );
   invertirTokens();
}

function invertirTokens()
{
   var texto = document.getElementById( "lineaInput" ).value.trim();
   var tokens = texto.split( " " );
   var invertidos = [];

   for ( var i = tokens.length - 1; i >= 0; --i )
   {
      invertidos.push( tokens[ i ] );
   }

   document.getElementById( "salidaInvertida" ).innerHTML =
      "Tokens invertidos: <span class='respuesta'>" + invertidos.join( " " ) + "</span>";
}

window.addEventListener( "load", iniciar, false );