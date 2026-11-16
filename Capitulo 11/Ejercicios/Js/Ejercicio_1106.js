// Ejercicio 11.6: Comparación de cadenas con operadores relacionales y de igualdad
function iniciar()
{
   document.getElementById( "btnComparar" ).addEventListener( "click", compararCadenas, false );
   compararCadenas();
}

function compararCadenas()
{
   var s1 = document.getElementById( "cadena1" ).value;
   var s2 = document.getElementById( "cadena2" ).value;
   var mensaje = "";

   if ( s1 === s2 )
   {
      mensaje = "La primera cadena (\"" + s1 + "\") es <span class='respuesta'>igual</span> que la segunda (\"" + s2 + "\").";
   }
   else if ( s1 < s2 )
   {
      mensaje = "La primera cadena (\"" + s1 + "\") es <span class='respuesta'>menor</span> que la segunda (\"" + s2 + "\").";
   }
   else if ( s1 > s2 )
   {
      mensaje = "La primera cadena (\"" + s1 + "\") es <span class='respuesta'>mayor</span> que la segunda (\"" + s2 + "\").";
   }

   document.getElementById( "resultadoComparacion" ).innerHTML = mensaje;
}

window.addEventListener( "load", iniciar, false );