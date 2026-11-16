// Fig. 10.16: Ordenar.js
// Ordenar un arreglo mediante sort.
function iniciar()
{
   var a = [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];

   imprimirArreglo( "Elementos de datos en el orden original: ", a,
      document.getElementById( "arregloOriginal" ) );
   a.sort( compararEnteros ); // ordenar el arreglo
   imprimirArreglo( "Elementos de datos en orden ascendente: ", a,
      document.getElementById( "arregloOrdenado" ) );
} // fin de la función iniciar

// imprimir el encabezado seguido del contenido de elArreglo
function imprimirArreglo( encabezado, elArreglo, salida )
{
   salida.innerHTML = encabezado + elArreglo.join( " " );
} // fin de la función imprimirArreglo

// función de comparación para usar con sort
function compararEnteros( valor1, valor2 )
{
   return parseInt( valor1 ) - parseInt( valor2 );
} // fin de la función compararEnteros

window.addEventListener( "load", iniciar, false );