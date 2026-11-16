// Ejercicio 11.20: Implementación personalizada del método String lastIndexOf
function iniciar()
{
   document.getElementById( "btnProbarLastIndexOf" ).addEventListener( "click", probarBusquedaInversa, false );
   probarBusquedaInversa();
}

function miLastIndexOf( cadena, subcadena, posicionInicial )
{
   var maxInicio = cadena.length - subcadena.length;
   var inicio = ( posicionInicial === undefined || isNaN( posicionInicial ) )
      ? maxInicio
      : Math.min( posicionInicial, maxInicio );

   if ( inicio < 0 )
   {
      return -1;
   }

   for ( var i = inicio; i >= 0; --i )
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

function probarBusquedaInversa()
{
   var texto = document.getElementById( "cadenaBase" ).value;
   var sub = document.getElementById( "subcadenaBuscar" ).value;
   var pos = parseInt( document.getElementById( "indiceInicio" ).value, 10 );

   var resultado = miLastIndexOf( texto, sub, pos );
   document.getElementById( "salidaMiLastIndexOf" ).innerHTML =
      "Resultado de <code class='inline'>miLastIndexOf</code>: <span class='respuesta'>" + resultado + "</span>";
}

window.addEventListener( "load", iniciar, false );