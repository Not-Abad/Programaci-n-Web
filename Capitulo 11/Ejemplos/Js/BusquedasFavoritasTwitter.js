// Fig. 11.19: BusquedasFavoritasTwitter.js
// Almacenamiento y recuperación de pares clave/valor mediante el uso de
// localStorage y sessionStorage de HTML5
var etiquetas; // arreglo de etiquetas para consultas

// carga las búsquedas etiquetadas anteriormente y las muestra en la página
function cargarBusquedas()
{
   if ( !window.sessionStorage.getItem( "aquiPreviamente" ) )
   {
      sessionStorage.setItem( "aquiPreviamente", "true" );
      document.getElementById( "mensajeBienvenida" ).innerHTML =
         "Bienvenido a la App de B&uacute;squedas favoritas de Twitter";
   } // fin de if

   var longitud = localStorage.length; // número de pares clave-valor
   etiquetas = []; // crear un arreglo vacío

   // cargar todas las claves
   for (var i = 0; i < longitud; ++i)
   {
      etiquetas[i] = localStorage.key(i);
   } // fin de for

   etiquetas.sort(); // ordenar las claves

   var marcado = "<ul>"; // se usa para almacenar el marcado de los vínculos de búsqueda
   var url = "http://twitter.com/search?q=";

   // crear lista de vínculos
   for (var etiqueta in etiquetas)
   {
      var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
      marcado += "<li><span><a href = '" + consulta + "'>" + etiquetas[etiqueta] +
         "</a></span>" +
         "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " +
            "value = 'Editar' onclick = 'editarEtiqueta(id)'>" +
         "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " +
            "value = 'Eliminar' onclick = 'eliminarEtiqueta(id)'>";
   } // fin de for

   marcado += "</ul>";
   document.getElementById("busquedas").innerHTML = marcado;
} // fin de la función cargarBusquedas

// elimina todos los pares clave-valor de localStorage
function borrarTodasLasBusquedas()
{
   localStorage.clear();
   cargarBusquedas(); // volver a cargar las búsquedas
} // fin de la función borrarTodasLasBusquedas

// guarda una búsqueda recién etiquetada en localStorage
function guardarBusqueda()
{
   var consulta = document.getElementById("consulta");
   var etiqueta = document.getElementById("etiqueta");
   localStorage.setItem(etiqueta.value, consulta.value);
   etiqueta.value = ""; // borrar entrada de etiqueta
   consulta.value = ""; // borrar entrada de consulta
   cargarBusquedas(); // vuelve a cargar las búsquedas
} // fin de la función guardarBusqueda

// elimina un par clave-valor específico de localStorage
function eliminarEtiqueta( etiqueta )
{
   localStorage.removeItem( etiqueta );
   cargarBusquedas(); // recargar búsquedas
} // fin de la función eliminarEtiqueta

// mostrar la consulta etiquetada existente para editarla
function editarEtiqueta( etiqueta )
{
   document.getElementById("consulta").value = localStorage[ etiqueta ];
   document.getElementById("etiqueta").value = etiqueta;
   cargarBusquedas(); // vuelve a cargar las búsquedas
} // fin de la función editarEtiqueta

// registrar manejadores de eventos y luego cargar búsquedas
function iniciar()
{
   var botonGuardar = document.getElementById( "botonGuardar" );
   botonGuardar.addEventListener( "click", guardarBusqueda, false );
   var botonBorrar = document.getElementById( "botonBorrar" );
   botonBorrar.addEventListener( "click", borrarTodasLasBusquedas, false );
   cargarBusquedas(); // cargar las búsquedas guardadas previamente
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );