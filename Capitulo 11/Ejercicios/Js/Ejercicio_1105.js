// Ejercicio 11.5: Funciones de redondeo utilizando Math.round
function iniciar()
{
   document.getElementById( "btnRedondear" ).addEventListener( "click", procesarNumero, false );
   procesarNumero();
}

function redondearAEntero( numero )
{
   return Math.round( numero );
}

function redondearADecimas( numero )
{
   return Math.round( numero * 10 ) / 10;
}

function redondearACentesimas( numero )
{
   return Math.round( numero * 100 ) / 100;
}

function redondearAMilesimas( numero )
{
   return Math.round( numero * 1000 ) / 1000;
}

function procesarNumero()
{
   var x = parseFloat( document.getElementById( "numeroInput" ).value );
   if ( isNaN( x ) )
   {
      return;
   }

   var html = "<table><caption>Resultados de redondeo con Math.round</caption>" +
      "<thead><tr><th>Valor original</th><th>Entero</th><th>Décimas</th><th>Centésimas</th><th>Milésimas</th></tr></thead>" +
      "<tbody><tr>" +
      "<td><strong>" + x + "</strong></td>" +
      "<td>" + redondearAEntero( x ) + "</td>" +
      "<td>" + redondearADecimas( x ) + "</td>" +
      "<td>" + redondearACentesimas( x ) + "</td>" +
      "<td>" + redondearAMilesimas( x ) + "</td>" +
      "</tr></tbody></table>";

   document.getElementById( "tablaResultados" ).innerHTML = html;
}

window.addEventListener( "load", iniciar, false );