// Ejercicio 11.21: Generar todas las cadenas de 3 letras a partir de una palabra de 5 letras
function iniciar()
{
   document.getElementById( "btnGenerarTres" ).addEventListener( "click", generarCadenasTres, false );
   generarCadenasTres();
}

function generarCadenasTres()
{
   var palabra = document.getElementById( "palabraCinco" ).value.trim();
   var area = document.getElementById( "salidaTresLetras" );

   if ( palabra.length !== 5 )
   {
      area.value = "Por favor, introduzca una palabra de exactamente 5 letras.";
      return;
   }

   var combinaciones = [];

   for ( var i = 0; i < 5; ++i )
   {
      for ( var j = 0; j < 5; ++j )
      {
         for ( var k = 0; k < 5; ++k )
         {
            if ( i !== j && i !== k && j !== k )
            {
               var cadena = palabra.charAt( i ) + palabra.charAt( j ) + palabra.charAt( k );
               if ( combinaciones.indexOf( cadena ) === -1 )
               {
                  combinaciones.push( cadena );
               }
            }
         }
      }
   }

   area.value = "Total de cadenas de 3 letras generadas (" + combinaciones.length + "):\n\n" +
      combinaciones.join( ", " );
}

window.addEventListener( "load", iniciar, false );