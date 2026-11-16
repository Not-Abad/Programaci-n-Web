// Ejercicio 10.16: La criba de Eratóstenes (números primos entre 1 y 999)
function iniciar()
{
   var limite = 1000;
   var criba = new Array( limite );

   // a) Inicializar todos los elementos en 1 (true)
   for ( var i = 0; i < limite; ++i )
   {
      criba[ i ] = 1;
   }

   // b) Establecer los índices 0 y 1 en 0 (no son primos)
   criba[ 0 ] = 0;
   criba[ 1 ] = 0;

   // Iterar desde el índice 2 y marcar como 0 los múltiplos de cada número primo
   for ( var i = 2; i < limite; ++i )
   {
      if ( criba[ i ] === 1 )
      {
         for ( var multiplo = i * 2; multiplo < limite; multiplo += i )
         {
            criba[ multiplo ] = 0;
         }
      }
   }

   // Recopilar e imprimir los índices que permanecieron en 1 (ignorando el elemento 0)
   var primos = [];
   for ( var indice = 1; indice < limite; ++indice )
   {
      if ( criba[ indice ] === 1 )
      {
         primos.push( indice );
      }
   }

   document.getElementById( "resumenPrimos" ).innerHTML =
      "Se encontraron <span class='respuesta'>" + primos.length +
      "</span> números primos entre 1 y 999:";

   // Presentar los primos en una tabla de 10 columnas para facilitar su lectura
   var html = "<table><caption>Números primos menores a 1000</caption><tbody>";
   for ( var k = 0; k < primos.length; ++k )
   {
      if ( k % 10 === 0 )
      {
         html += "<tr>";
      }

      html += "<td><strong>" + primos[ k ] + "</strong></td>";

      if ( k % 10 === 9 )
      {
         html += "</tr>";
      }
   }

   if ( primos.length % 10 !== 0 )
   {
      html += "</tr>";
   }

   html += "</tbody></table>";
   document.getElementById( "tablaPrimos" ).innerHTML = html;
}

window.addEventListener( "load", iniciar, false );