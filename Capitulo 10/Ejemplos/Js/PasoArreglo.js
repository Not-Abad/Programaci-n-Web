// Fig. 10.14: PasoArreglo.js
// Paso de arreglos y elementos individuales de arreglos a funciones.
function iniciar()
{
   var a = [ 1, 2, 3, 4, 5 ];

   // pasar todo un arreglo
   imprimirArreglo( "Arreglo original: ", a,
      document.getElementById( "arregloOriginal" ) );
   modificarArreglo( a ); // el arreglo a pasado por referencia
   imprimirArreglo( "Arreglo modificado: ", a,
      document.getElementById( "arregloModificado" ) );

   // pasar un elemento individual del arreglo
   document.getElementById( "elementoOriginal" ).innerHTML =
      "a[3] antes de modificarElemento: " + a[ 3 ];
   modificarElemento( a[ 3 ] ); // elemento del arreglo a[3] pasado por valor
   document.getElementById( "elementoModificado" ).innerHTML =
      "a[3] despu&eacute;s de modificarElemento: " + a[ 3 ];
} // fin de la función iniciar()

// imprime encabezado seguido del contenido de "elArreglo"
function imprimirArreglo( encabezado, elArreglo, salida )
{
   salida.innerHTML = encabezado + elArreglo.join( " " );
} // fin de la función imprimirArreglo

// función que modifica los elementos de un arreglo
function modificarArreglo( elArreglo )
{
   for ( var j in elArreglo )
   {
      elArreglo[ j ] *= 2;
   } // fin de for
} // fin de la función modificarArreglo

// función que modifica el valor que se pasó
function modificarElemento( e )
{
   e *= 2; // escala el elemento e sólo mientras dure la función
   document.getElementById( "enModificarElemento" ).innerHTML =
      "Valor en modificarElemento: " + e;
} // fin de la función modificarElemento

window.addEventListener( "load", iniciar, false );