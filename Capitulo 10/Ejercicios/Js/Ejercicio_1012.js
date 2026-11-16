// Ejercicio 10.12: Eliminación de duplicados usando el arreglo más pequeño posible (máx. 10 elementos)
var unicos = [];
var recibidos = 0;

function iniciar()
{
   document.getElementById( "botonAgregar" ).addEventListener( "click", procesarNumero, false );
   document.getElementById( "botonReiniciar" ).addEventListener( "click", reiniciar, false );
}

function procesarNumero()
{
   if ( recibidos >= 10 )
   {
      return;
   }

   var input = document.getElementById( "numeroInput" );
   var valor = parseInt( input.value, 10 );

   if ( isNaN( valor ) || valor < 10 || valor > 100 )
   {
      document.getElementById( "mensajeEstado" ).textContent = "Error: introduzca un entero entre 10 y 100.";
      return;
   }

   ++recibidos;
   document.getElementById( "contadorTexto" ).textContent = recibidos + "/10";

   if ( unicos.indexOf( valor ) === -1 )
   {
      unicos.push( valor );
      document.getElementById( "mensajeEstado" ).innerHTML =
         "Nuevo valor aceptado: <span class='respuesta'>" + valor + "</span>";
   }
   else
   {
      document.getElementById( "mensajeEstado" ).textContent =
         "El número " + valor + " ya fue ingresado (duplicado omitido).";
   }

   document.getElementById( "listaUnicos" ).textContent = unicos.join( " - " );
   input.value = "";
   input.focus();

   if ( recibidos === 10 )
   {
      input.disabled = true;
      document.getElementById( "botonAgregar" ).disabled = true;
      document.getElementById( "mensajeEstado" ).textContent += " | Se completaron los 10 ingresos.";
   }
}

function reiniciar()
{
   unicos = [];
   recibidos = 0;
   var input = document.getElementById( "numeroInput" );
   input.disabled = false;
   input.value = "";
   document.getElementById( "botonAgregar" ).disabled = false;
   document.getElementById( "contadorTexto" ).textContent = "0/10";
   document.getElementById( "mensajeEstado" ).textContent = "";
   document.getElementById( "listaUnicos" ).textContent = "Aún no se han ingresado números.";
}

window.addEventListener( "load", iniciar, false );