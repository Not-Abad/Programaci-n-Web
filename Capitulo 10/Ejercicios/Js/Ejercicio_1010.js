// Ejercicio 10.10: Comisiones de ventas con arreglo de contadores
var contadores = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var etiquetasRangos = [
   "a) $200 a $299",
   "b) $300 a $399",
   "c) $400 a $499",
   "d) $500 a $599",
   "e) $600 a $699",
   "f) $700 a $799",
   "g) $800 a $899",
   "h) $900 a $999",
   "i) $1000 y más"
];

function iniciar()
{
   document.getElementById( "botonRegistrar" ).addEventListener( "click", registrarVenta, false );
   document.getElementById( "botonReiniciar" ).addEventListener( "click", reiniciarContadores, false );
   actualizarTabla();
}

function registrarVenta()
{
   var input = document.getElementById( "ventasInput" );
   var ventas = parseFloat( input.value );

   if ( isNaN( ventas ) || ventas < 0 )
   {
      document.getElementById( "ultimoRegistro" ).textContent = "Ingrese un monto de ventas válido mayor o igual a 0.";
      return;
   }

   var salario = Math.floor( 200 + 0.09 * ventas );
   var indice = Math.floor( salario / 100 ) - 2;

   if ( indice > 8 )
   {
      indice = 8;
   }

   ++contadores[ indice ];
   document.getElementById( "ultimoRegistro" ).innerHTML =
      "Ventas: <strong>$" + ventas.toFixed( 2 ) + "</strong> &rarr; Salario truncado: <span class='respuesta'>$" +
      salario + "</span> (Rango " + etiquetasRangos[ indice ] + ")";

   input.value = "";
   input.focus();
   actualizarTabla();
}

function reiniciarContadores()
{
   for ( var i = 0; i < contadores.length; ++i )
   {
      contadores[ i ] = 0;
   }
   document.getElementById( "ultimoRegistro" ).textContent = "";
   actualizarTabla();
}

function actualizarTabla()
{
   var html = "<table><caption>Distribución de salarios del personal de ventas</caption>" +
      "<thead><tr><th>Rango salarial</th><th>Cantidad de vendedores</th></tr></thead><tbody>";

   for ( var i = 0; i < contadores.length; ++i )
   {
      html += "<tr><td>" + etiquetasRangos[ i ] + "</td><td>" + contadores[ i ] + "</td></tr>";
   }

   html += "</tbody></table>";
   document.getElementById( "tablaRangos" ).innerHTML = html;
}

window.addEventListener( "load", iniciar, false );