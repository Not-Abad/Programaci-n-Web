// Ejercicio 11.17: Obtener carácter a partir de su código entero
function iniciar()
{
   document.getElementById( "btnConvertirCodigo" ).addEventListener( "click", mostrarCaracter, false );
   mostrarCaracter();
}

function mostrarCaracter()
{
   var codigo = parseInt( document.getElementById( "codigoInput" ).value, 10 );

   if ( isNaN( codigo ) )
   {
      document.getElementById( "caracterSalida" ).textContent = "Ingrese un número entero válido.";
      return;
   }

   var caracter = String.fromCharCode( codigo );
   document.getElementById( "caracterSalida" ).innerHTML =
      "El código <strong>" + codigo + "</strong> corresponde al carácter: <span class='respuesta'>" +
      caracter + "</span>";
}

window.addEventListener( "load", iniciar, false );