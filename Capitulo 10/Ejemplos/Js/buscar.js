// Fig. 10.18: buscar.js
// Buscar en un arreglo mediante indexOf.
var a = new Array( 100 ); // crear un arreglo

// llenar el arreglo con valores enteros pares de 0 a 198
for ( var i = 0; i < a.length; ++i )
{
   a[ i ] = 2 * i;
} // fin de for

// la función se invoca cuando se presiona el botón "Buscar"
function botonPresionado()
{
   // obtener el campo de texto de entrada
   var valEntrada = document.getElementById( "valEntrada" );

   // obtener el párrafo de resultado
   var resultado = document.getElementById( "resultado" );

   // obtener la clave de búsqueda del campo de texto de entrada y luego realizar la búsqueda
   var claveBusqueda = parseInt( valEntrada.value );
   var elemento = a.indexOf( claveBusqueda );

   if ( elemento != -1 )
   {
      resultado.innerHTML = "Se encontr&oacute; el valor en el elemento " + elemento;
   } // fin de if
   else
   {
      resultado.innerHTML = "No se encontr&oacute; el valor";
   } // fin de else
} // fin de la función botonPresionado

// registra el manejador de eventos de clic de botonBuscar
function iniciar()
{
   var botonBuscar = document.getElementById( "botonBuscar" );
   botonBuscar.addEventListener( "click", botonPresionado, false );
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );