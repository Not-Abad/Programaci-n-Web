// Fig. 11.5: ProcesamientoCaracteres.js
// Los métodos de String charAt, charCodeAt, fromCharCode,
// toLowerCase y toUpperCase.
function iniciar()
{
   var s = "CEBRA";
   var s2 = "AbCdEfG";
   var resultado = "";

   resultado = "<p>El car&aacute;cter en el &iacute;ndice 0 en '" + s + "' es " +
      s.charAt( 0 ) + "</p>";
   resultado += "<p>El c&oacute;digo del car&aacute;cter en el &iacute;ndice 0 en '" + s + "' es " +
      s.charCodeAt( 0 ) + "</p>";

   resultado += "<p>'" + String.fromCharCode( 72, 79, 76, 65 ) +
      "' contiene los c&oacute;digos de caracteres 72, 79, 76 y 65</p>";

   resultado += "<p>'" + s2 + "' en min&uacute;sculas es '" +
      s2.toLowerCase() + "'</p>";
   resultado += "<p>'" + s2 + "' en may&uacute;sculas es '" +
      s2.toUpperCase() + "'</p>";

   document.getElementById( "resultados" ).innerHTML = resultado;
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );