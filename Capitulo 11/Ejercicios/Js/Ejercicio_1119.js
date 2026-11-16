// Ejercicio 11.19: Implementación personalizada del método String indexOf
function iniciar()
{
   document.getElementById( "btnProbarIndexOf" ).addEventListener( "click", probarBusqueda, false );
   probarBusqueda();
}

function miIndexOf( cadena, subcadena, posicionInicial )
{
   var inicio = posicionInicial || 0;
   if ( inicio < 0 )
   {
      inicio = 0;
   }

   if ( subcadena.length === 0 )
   {
      return Math.min( inicio, cadena.length );
   }

   for ( var i = inicio; i <= cadena.length - subcadena.length; ++i )
   {
      var coincide = true;
      for ( var j = 0; j < subcadena.length; ++j )
      {
         if ( cadena.charAt( i + j ) !== subcadena.charAt( j ) )
         {
            coincide = false;
            break;
         }
      }

      if ( coincide )
      {
         return i;
      }
   }

   return -1;
}

function probarBusqueda()
{
   var texto = document.getElementById( "cadenaBase" ).value;
   var sub = document.getElementById( "subcadenaBuscar" ).value;
   var pos = parseInt( document.getElementById( "indiceInicio" ).value, 10 ) || 0;

   var resultado = miIndexOf( texto, sub, pos );
   document.getElementById( "salidaMiIndexOf" ).innerHTML =
      "Resultado de <code class='inline'>miIndexOf</code>: <span class='respuesta'>" + resultado + "</span>";
}

window.addEventListener( "load", iniciar, false );