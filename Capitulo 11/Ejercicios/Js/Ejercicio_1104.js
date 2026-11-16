// Ejercicio 11.4: Funciones de redondeo utilizando Math.floor
function iniciar()
{
   document.getElementById( "btnRedondear" ).addEventListener( "click", procesarNumero, false );
   procesarNumero();
}

function redondearAEntero( numero )
{
   return Math.floor( numero + 0.5 );
}

function redondearADecimas( numero )
{
   return Math.floor( numero * 10 + 0.5 ) / 10;
}

function redondearACentesimas( numero )
{
   return Math.floor( numero * 100 + 0.5 ) / 100;
}

function redondearAMilesimas( numero )
{
   return Math.floor( numero * 1000 + 0.5 ) / 1000;
}

function procesarNumero()
{
   var x = parseFloat( document.getElementById( "numeroInput" ).value );
   if ( isNaN( x ) )
   {
      return;
   }

   var html = "<table><caption>Resultados de redondeo con Math.floor</caption>" +
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