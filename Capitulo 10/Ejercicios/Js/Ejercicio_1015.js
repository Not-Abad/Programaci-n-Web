// Ejercicio 10.15: Gráficos de tortuga sobre piso 20x20
function iniciar()
{
   document.getElementById( "botonEjecutar" ).addEventListener( "click", ejecutarTortuga, false );
   document.getElementById( "botonCuadrado" ).addEventListener( "click", function() {
      document.getElementById( "comandosInput" ).value = "2, 5,12, 3, 5,12, 3, 5,12, 3, 5,12, 1, 6, 9";
      ejecutarTortuga();
   }, false );

   ejecutarTortuga();
}

function crearPiso()
{
   var piso = new Array( 20 );
   for ( var f = 0; f < 20; ++f )
   {
      piso[ f ] = new Array( 20 );
      for ( var c = 0; c < 20; ++c )
      {
         piso[ f ][ c ] = 0;
      }
   }
   return piso;
}

function ejecutarTortuga()
{
   var piso = crearPiso();
   var fila = 0;
   var col = 0;
   var plumaAbajo = false;
   // Direcciones: 0 = derecha, 1 = abajo, 2 = izquierda, 3 = arriba
   var direccion = 0;
   var deltaFila = [ 0, 1, 0, -1 ];
   var deltaCol = [ 1, 0, -1, 0 ];

   var texto = document.getElementById( "comandosInput" ).value;
   var tokens = texto.split( /[\s,]+/ ).filter( Boolean ).map( Number );
   var impreso = false;

   for ( var i = 0; i < tokens.length; ++i )
   {
      var cmd = tokens[ i ];

      if ( cmd === 9 )
      {
         break;
      }
      else if ( cmd === 1 )
      {
         plumaAbajo = false;
      }
      else if ( cmd === 2 )
      {
         plumaAbajo = true;
         piso[ fila ][ col ] = 1;
      }
      else if ( cmd === 3 )
      {
         direccion = ( direccion + 1 ) % 4;
      }
      else if ( cmd === 4 )
      {
         direccion = ( direccion + 3 ) % 4;
      }
      else if ( cmd === 5 )
      {
         var pasos = tokens[ ++i ] || 0;
         for ( var p = 0; p < pasos; ++p )
         {
            var sigFila = fila + deltaFila[ direccion ];
            var sigCol = col + deltaCol[ direccion ];

            if ( sigFila >= 0 && sigFila < 20 && sigCol >= 0 && sigCol < 20 )
            {
               fila = sigFila;
               col = sigCol;
               if ( plumaAbajo )
               {
                  piso[ fila ][ col ] = 1;
               }
            }
         }
      }
      else if ( cmd === 6 )
      {
         imprimirPiso( piso );
         impreso = true;
      }
   }

   if ( !impreso )
   {
      imprimirPiso( piso );
   }
}

function imprimirPiso( piso )
{
   var salida = "<div class='lienzo-tortuga'>";
   for ( var f = 0; f < 20; ++f )
   {
      var linea = "";
      for ( var c = 0; c < 20; ++c )
      {
         linea += ( piso[ f ][ c ] === 1 ) ? "*" : ".";
      }
      salida += linea + "<br>";
   }
   salida += "</div>";
   document.getElementById( "salidaTortuga" ).innerHTML = salida;
}

window.addEventListener( "load", iniciar, false );