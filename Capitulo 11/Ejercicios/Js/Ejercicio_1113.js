// Ejercicio 11.13: Determinar número de ocurrencias de un carácter usando indexOf
function iniciar()
{
   document.getElementById( "btnContarCaracter" ).addEventListener( "click", contarCaracter, false );
   contarCaracter();
}

function contarCaracter()
{
   var texto = document.getElementById( "textoLineas" ).value;
   var caracter = document.getElementById( "caracterBuscar" ).value;

   if ( caracter === "" )
   {
      document.getElementById( "resultadoOcurrencias" ).textContent = "Introduzca un carácter para buscar.";
      return;
   }

   var contador = 0;
   var posicion = texto.indexOf( caracter );

   while ( posicion !== -1 )
   {
      ++contador;
      posicion = texto.indexOf( caracter, posicion + 1 );
   }

   document.getElementById( "resultadoOcurrencias" ).innerHTML =
      "El carácter '<span class='respuesta'>" + caracter + "</span>' aparece <span class='respuesta'>" +
      contador + "</span> veces en el texto.";
}

window.addEventListener( "load", iniciar, false );