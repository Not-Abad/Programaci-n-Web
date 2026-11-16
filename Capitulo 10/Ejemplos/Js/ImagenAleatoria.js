// Fig. 10.12: ImagenAleatoria2.js
// Selección de imágenes al azar usando arreglos
var imgIcono;
var imagenes = [ "Felipe", "Juan", "Maria", "Tomo", "Angel" ];
var descripciones = [ "Error com&uacute;n de programaci&oacute;n",
   "Tip para prevenir errores", "Buena pr&aacute;ctica de programaci&oacute;n",
   "Observaci&oacute;n de apariencia visual", "Tip de rendimiento", "Tip de portabilidad",
   "Observaci&oacute;n de ingenier&iacute;a de software" ];

// elegir una imagen al azar y su descripción correspondiente, después modificar
// el elemento img en el cuerpo del documento
function elegirImagen()
{
   var indice = Math.floor( Math.random() * 5 );
   imgIcono.setAttribute( "src", "../Assets/Ejemplo_1005/" + imagenes[ indice ] + ".png" );
   imgIcono.setAttribute( "alt", descripciones[ indice ] );
} // fin de la función elegirImagen

// registra el manejador de eventos de clic de imgIcono
function iniciar()
{
   imgIcono = document.getElementById( "imagen" );
   imgIcono.addEventListener( "click", elegirImagen, false );
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );