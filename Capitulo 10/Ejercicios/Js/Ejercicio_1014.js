// Ejercicio 10.14: Simulación de 36,000 tiros de dos dados con arreglo bidimensional
function iniciar()
{
   document.getElementById( "botonSimular" ).addEventListener( "click", simularTiros, false );
   simularTiros();
}

function simularTiros()
{
   var totalTiros = 36000;
   // Arreglo bidimensional 7x7 (usando índices 1 a 6 para cada dado)
   var combinaciones = new Array( 7 );
   for ( var i = 0; i < 7; ++i )
   {
      combinaciones[ i ] = [ 0, 0, 0, 0, 0, 0, 0 ];
   }

   var frecuenciasSuma = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
   var formasTeoricas = [ 0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 ];

   for ( var tiro = 0; tiro < totalTiros; ++tiro )
   {
      var dado1 = Math.floor( 1 + Math.random() * 6 );
      var dado2 = Math.floor( 1 + Math.random() * 6 );

      ++combinaciones[ dado1 ][ dado2 ];
      ++frecuenciasSuma[ dado1 + dado2 ];
   }

   // Tabla de frecuencias por suma (2 a 12)
   var htmlSumas = "<table><caption>Frecuencias obtenidas por suma (36,000 tiros)</caption>" +
      "<thead><tr><th>Suma</th><th>Combinaciones</th><th>Esperado</th><th>Obtenido</th><th>% Esperado</th><th>% Obtenido</th></tr></thead><tbody>";

   for ( var suma = 2; suma <= 12; ++suma )
   {
      var esperado = formasTeoricas[ suma ] * 1000;
      var porcEsperado = ( formasTeoricas[ suma ] / 36 * 100 ).toFixed( 2 );
      var porcObtenido = ( frecuenciasSuma[ suma ] / totalTiros * 100 ).toFixed( 2 );

      htmlSumas += "<tr><td><strong>" + suma + "</strong></td>" +
         "<td>" + formasTeoricas[ suma ] + "/36</td>" +
         "<td>" + esperado + "</td>" +
         "<td>" + frecuenciasSuma[ suma ] + "</td>" +
         "<td>" + porcEsperado + "%</td>" +
         "<td>" + porcObtenido + "%</td></tr>";
   }
   htmlSumas += "</tbody></table>";
   document.getElementById( "tablaSumas" ).innerHTML = htmlSumas;

   // Matriz bidimensional de las 36 combinaciones
   var htmlMatriz = "<table><caption>Matriz bidimensional de combinaciones (Dado 1 vs Dado 2)</caption>" +
      "<thead><tr><th>Dado 1 \\ Dado 2</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody>";

   for ( var d1 = 1; d1 <= 6; ++d1 )
   {
      htmlMatriz += "<tr><th>" + d1 + "</th>";
      for ( var d2 = 1; d2 <= 6; ++d2 )
      {
         htmlMatriz += "<td>" + combinaciones[ d1 ][ d2 ] + "</td>";
      }
      htmlMatriz += "</tr>";
   }
   htmlMatriz += "</tbody></table>";
   document.getElementById( "matrizCombinaciones" ).innerHTML = htmlMatriz;

   var porcSiete = ( frecuenciasSuma[ 7 ] / totalTiros * 100 ).toFixed( 2 );
   document.getElementById( "conclusionRazonable" ).innerHTML =
      "<strong>Evaluación:</strong> Los resultados son razonables; la suma 7 apareció <strong>" +
      frecuenciasSuma[ 7 ] + "</strong> veces (" + porcSiete + "%), muy cerca del valor teórico esperado de 1/6 (6,000 tiros o 16.67%).";
}

window.addEventListener( "load", iniciar, false );