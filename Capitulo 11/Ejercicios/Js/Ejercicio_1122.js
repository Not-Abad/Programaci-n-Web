// Ejercicio 11.22: Mostrar una fecha en varios formatos utilizando el objeto Date
var meses = [
   "enero", "febrero", "marzo", "abril", "mayo", "junio",
   "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

function iniciar()
{
   document.getElementById( "btnFormatearFecha" ).addEventListener( "click", mostrarFormatos, false );
   mostrarFormatos();
}

function mostrarFormatos()
{
   var valor = document.getElementById( "fechaInput" ).value;
   if ( !valor )
   {
      return;
   }

   var partes = valor.split( "-" );
   var fecha = new Date( parseInt( partes[ 0 ], 10 ),
      parseInt( partes[ 1 ], 10 ) - 1,
      parseInt( partes[ 2 ], 10 ) );

   var dia = ( "0" + fecha.getDate() ).slice( -2 );
   var mes = ( "0" + ( fecha.getMonth() + 1 ) ).slice( -2 );
   var anio = fecha.getFullYear();
   var formatoLargo = fecha.getDate() + " de " + meses[ fecha.getMonth() ] + " de " + anio;

   var html = "<table><caption>Representaciones de la fecha seleccionada</caption>" +
      "<thead><tr><th>Formato / Método</th><th>Resultado</th></tr></thead><tbody>" +
      "<tr><td><strong>DD/MM/AAAA</strong></td><td>" + dia + "/" + mes + "/" + anio + "</td></tr>" +
      "<tr><td><strong>Formato largo en español</strong></td><td>" + formatoLargo + "</td></tr>" +
      "<tr><td><code class='inline'>toDateString()</code></td><td>" + fecha.toDateString() + "</td></tr>" +
      "<tr><td><code class='inline'>toLocaleDateString()</code></td><td>" + fecha.toLocaleDateString() + "</td></tr>" +
      "<tr><td><code class='inline'>toISOString()</code></td><td>" + fecha.toISOString() + "</td></tr>" +
      "<tr><td><code class='inline'>toUTCString()</code></td><td>" + fecha.toUTCString() + "</td></tr>" +
      "<tr><td><code class='inline'>toString()</code></td><td>" + fecha.toString() + "</td></tr>" +
      "</tbody></table>";

   document.getElementById( "tablaFormatosFecha" ).innerHTML = html;
}

window.addEventListener( "load", iniciar, false );