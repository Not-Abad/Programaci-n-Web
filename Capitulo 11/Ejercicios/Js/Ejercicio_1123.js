// Ejercicio 11.23: Análisis de textos (frecuencia de letras, longitudes y palabras distintas)
function iniciar()
{
   document.getElementById( "btnAnalizarTexto" ).addEventListener( "click", analizarTextoCompleto, false );
   analizarTextoCompleto();
}

function normalizarSinAcentos( cadena )
{
   return cadena.toLowerCase().normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" );
}

function extraerPalabras( texto )
{
   var limpio = texto.toLowerCase().replace( /[¿?¡!:;.,()"']/g, " " );
   return limpio.split( /\s+/ ).filter( Boolean );
}

function analizarTextoCompleto()
{
   var textoOriginal = document.getElementById( "textoAnalisis" ).value;
   var textoNormalizado = normalizarSinAcentos( textoOriginal );
   var palabras = extraerPalabras( textoOriginal );

   // a) Ocurrencias de cada letra del alfabeto
   var alfabeto = "abcdefghijklmnopqrstuvwxyz";
   var htmlLetras = "<table><caption>Frecuencia de letras (A–Z)</caption>" +
      "<thead><tr><th>Letra</th><th>Ocurrencias</th><th>Letra</th><th>Ocurrencias</th></tr></thead><tbody>";

   for ( var i = 0; i < 13; ++i )
   {
      var l1 = alfabeto.charAt( i );
      var l2 = alfabeto.charAt( i + 13 );
      htmlLetras += "<tr>" +
         "<td><strong>" + l1 + "</strong></td><td>" + contarLetra( textoNormalizado, l1 ) + "</td>" +
         "<td><strong>" + l2 + "</strong></td><td>" + contarLetra( textoNormalizado, l2 ) + "</td>" +
         "</tr>";
   }
   htmlLetras += "</tbody></table>";
   document.getElementById( "tablaLetras" ).innerHTML = htmlLetras;

   // b) Ocurrencias por longitud de palabra
   var maxLen = 8;
   for ( var p = 0; p < palabras.length; ++p )
   {
      if ( palabras[ p ].length > maxLen )
      {
         maxLen = palabras[ p ].length;
      }
   }

   var conteoLongitudes = new Array( maxLen + 1 );
   for ( var len = 0; len <= maxLen; ++len )
   {
      conteoLongitudes[ len ] = 0;
   }

   for ( var w = 0; w < palabras.length; ++w )
   {
      ++conteoLongitudes[ palabras[ w ].length ];
   }

   var htmlLong = "<table><caption>Distribución por longitud de palabra</caption>" +
      "<thead><tr><th>Longitud de palabra</th><th>Ocurrencias</th></tr></thead><tbody>";

   for ( var k = 1; k <= maxLen; ++k )
   {
      htmlLong += "<tr><td>" + k + "</td><td>" + conteoLongitudes[ k ] + "</td></tr>";
   }
   htmlLong += "</tbody></table>";
   document.getElementById( "tablaLongitudes" ).innerHTML = htmlLong;

   // c) Palabras distintas en orden de aparición y en orden alfabético
   var palabrasUnicas = [];
   var frecuenciasUnicas = [];

   for ( var u = 0; u < palabras.length; ++u )
   {
      var idx = palabrasUnicas.indexOf( palabras[ u ] );
      if ( idx === -1 )
      {
         palabrasUnicas.push( palabras[ u ] );
         frecuenciasUnicas.push( 1 );
      }
      else
      {
         ++frecuenciasUnicas[ idx ];
      }
   }

   var htmlAparicion = "<table><caption>Palabras distintas (en orden de aparición)</caption>" +
      "<thead><tr><th>Palabra</th><th>Ocurrencias</th></tr></thead><tbody>";

   for ( var a = 0; a < palabrasUnicas.length; ++a )
   {
      htmlAparicion += "<tr><td><strong>" + palabrasUnicas[ a ] + "</strong></td><td>" + frecuenciasUnicas[ a ] + "</td></tr>";
   }
   htmlAparicion += "</tbody></table>";
   document.getElementById( "tablaPalabrasOrden" ).innerHTML = htmlAparicion;

   // Orden alfabético
   var ordenadas = palabrasUnicas.slice().sort();
   var htmlAlfabetico = "<table><caption>Palabras distintas (en orden alfabético)</caption>" +
      "<thead><tr><th>Palabra</th><th>Ocurrencias</th></tr></thead><tbody>";

   for ( var b = 0; b < ordenadas.length; ++b )
   {
      var posOriginal = palabrasUnicas.indexOf( ordenadas[ b ] );
      htmlAlfabetico += "<tr><td><strong>" + ordenadas[ b ] + "</strong></td><td>" + frecuenciasUnicas[ posOriginal ] + "</td></tr>";
   }
   htmlAlfabetico += "</tbody></table>";
   document.getElementById( "tablaPalabrasAlfabetico" ).innerHTML = htmlAlfabetico;
}

function contarLetra( texto, letra )
{
   var total = 0;
   var pos = texto.indexOf( letra );
   while ( pos !== -1 )
   {
      ++total;
      pos = texto.indexOf( letra, pos + 1 );
   }
   return total;
}

window.addEventListener( "load", iniciar, false );