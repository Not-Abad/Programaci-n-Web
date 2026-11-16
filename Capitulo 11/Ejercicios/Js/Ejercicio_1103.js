// Ejercicio 11.3: Evaluación de los métodos de la biblioteca Math (Figura 11.1)
function iniciar()
{
   document.getElementById( "btnEvaluarMath" ).addEventListener( "click", evaluarMath, false );
   evaluarMath();
}

function evaluarMath()
{
   var valores = [ -9.8, -2.3, 0, 1.5, 4.7, 9 ];
   var salida = "=== MÉTODOS DE UN ARGUMENTO ===\n";
   salida += "x\t| abs(x)\t| ceil(x)\t| floor(x)\t| round(x)\t| sin(x)\t| cos(x)\t| tan(x)\n";
   salida += "-".repeat( 98 ) + "\n";

   for ( var i = 0; i < valores.length; ++i )
   {
      var x = valores[ i ];
      salida += x + "\t| " +
         Math.abs( x ).toFixed( 2 ) + "\t\t| " +
         Math.ceil( x ) + "\t\t| " +
         Math.floor( x ) + "\t\t| " +
         Math.round( x ) + "\t\t| " +
         Math.sin( x ).toFixed( 3 ) + "\t| " +
         Math.cos( x ).toFixed( 3 ) + "\t| " +
         Math.tan( x ).toFixed( 3 ) + "\n";
   }

   salida += "\n=== EXPONENCIAL, LOGARITMO Y RAÍZ CUADRADA ===\n";
   var positivos = [ 0.5, 1, 2, Math.E, 9, 16 ];
   salida += "x\t\t| exp(x)\t| log(x)\t| sqrt(x)\n";
   salida += "-".repeat( 62 ) + "\n";

   for ( var j = 0; j < positivos.length; ++j )
   {
      var p = positivos[ j ];
      salida += p.toFixed( 2 ) + "\t\t| " +
         Math.exp( p ).toFixed( 3 ) + "\t| " +
         Math.log( p ).toFixed( 3 ) + "\t\t| " +
         Math.sqrt( p ).toFixed( 3 ) + "\n";
   }

   salida += "\n=== MÉTODOS DE DOS ARGUMENTOS (pow, max, min) ===\n";
   var pares = [ [ 2, 3 ], [ 9, 0.5 ], [ -4, 7 ], [ 5, 2 ] ];
   salida += "(x, y)\t\t| pow(x, y)\t| max(x, y)\t| min(x, y)\n";
   salida += "-".repeat( 62 ) + "\n";

   for ( var k = 0; k < pares.length; ++k )
   {
      var a = pares[ k ][ 0 ];
      var b = pares[ k ][ 1 ];
      salida += "(" + a + ", " + b + ")\t| " +
         Math.pow( a, b ) + "\t\t| " +
         Math.max( a, b ) + "\t\t| " +
         Math.min( a, b ) + "\n";
   }

   salida += "\n=== MUESTRAS DE Math.random() ===\n";
   for ( var r = 1; r <= 4; ++r )
   {
      salida += "Muestra " + r + ": " + Math.random().toFixed( 6 ) + "\n";
   }

   document.getElementById( "salidaMath" ).value = salida;
}

window.addEventListener( "load", iniciar, false );