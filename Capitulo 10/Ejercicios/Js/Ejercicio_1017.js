// Ejercicio 10.17: Simulación de la carrera de la tortuga y la liebre
var META = 70;
var temporizador = null;
var tortuga = 1;
var liebre = 1;
var tic = 0;
var historial = "";

function iniciar()
{
   document.getElementById( "botonAnimada" ).addEventListener( "click", iniciarCarreraAnimada, false );
   document.getElementById( "botonInstantanea" ).addEventListener( "click", ejecutarInstantanea, false );
   ejecutarInstantanea();
}

function reiniciarVariables()
{
   if ( temporizador !== null )
   {
      clearInterval( temporizador );
      temporizador = null;
   }

   tortuga = 1;
   liebre = 1;
   tic = 0;
   historial = "PUM!!!\nY ARRANCAN!!!\n\n";
   document.getElementById( "estadoCarrera" ).innerHTML =
      "<strong>PUM!!! Y ARRANCAN!!!</strong>";
}

function moverTortuga()
{
   var i = Math.floor( 1 + Math.random() * 10 );

   if ( i >= 1 && i <= 5 )        // Paso pesado rápido (50%)
   {
      tortuga += 3;
   }
   else if ( i >= 6 && i <= 7 )   // Resbalón (20%)
   {
      tortuga -= 6;
   }
   else                           // Paso pesado lento (30%)
   {
      tortuga += 1;
   }

   if ( tortuga < 1 )
   {
      tortuga = 1;
   }
}

function moverLiebre()
{
   var i = Math.floor( 1 + Math.random() * 10 );

   if ( i >= 1 && i <= 2 )        // Dormir (20%)
   {
      liebre += 0;
   }
   else if ( i >= 3 && i <= 4 )   // Gran salto (20%)
   {
      liebre += 9;
   }
   else if ( i === 5 )            // Gran resbalón (10%)
   {
      liebre -= 12;
   }
   else if ( i >= 6 && i <= 8 )   // Pequeño salto (30%)
   {
      liebre += 1;
   }
   else                           // Pequeño resbalón (20%)
   {
      liebre -= 2;
   }

   if ( liebre < 1 )
   {
      liebre = 1;
   }
}

function construirLineaPista()
{
   var pista = new Array( META );
   for ( var p = 0; p < META; ++p )
   {
      pista[ p ] = " ";
   }

   var posT = Math.min( tortuga, META ) - 1;
   var posH = Math.min( liebre, META ) - 1;

   if ( posT === posH )
   {
      var mordida = "OUCH!!!";
      for ( var c = 0; c < mordida.length && ( posT + c ) < META; ++c )
      {
         pista[ posT + c ] = mordida.charAt( c );
      }
   }
   else
   {
      pista[ posT ] = "T";
      pista[ posH ] = "H";
   }

   var numTic = ( tic < 10 ? "0" : "" ) + tic;
   return "Tic " + numTic + " |" + pista.join( "" ) + "| (T:" + tortuga + ", H:" + liebre + ")";
}

function evaluarGanador()
{
   if ( tortuga >= META && liebre >= META )
   {
      return "Es un empate.";
   }
   else if ( tortuga >= META )
   {
      return "LA TORTUGA GANA!!! YAY!!!";
   }
   else if ( liebre >= META )
   {
      return "La liebre gana. Que mal.";
   }
   return null;
}

function avanzarUnTic()
{
   ++tic;
   moverTortuga();
   moverLiebre();

   var linea = construirLineaPista();
   historial += linea + "\n";

   var escala = "       1" + " ".repeat( 68 ) + "70\n";
   document.getElementById( "pistaActual" ).textContent = escala + linea;
   document.getElementById( "registroCarrera" ).textContent = historial;

   var resultado = evaluarGanador();
   if ( resultado !== null )
   {
      if ( temporizador !== null )
      {
         clearInterval( temporizador );
         temporizador = null;
      }

      historial += "\n" + resultado + "\n";
      document.getElementById( "registroCarrera" ).textContent = historial;
      document.getElementById( "estadoCarrera" ).innerHTML =
         "Resultado final en el tic <strong>" + tic + "</strong>: <span class='respuesta'>" + resultado + "</span>";
      return true;
   }

   return false;
}

function iniciarCarreraAnimada()
{
   reiniciarVariables();
   avanzarUnTic();
   temporizador = setInterval( avanzarUnTic, 1000 );
}

function ejecutarInstantanea()
{
   reiniciarVariables();
   var terminada = false;

   while ( !terminada )
   {
      terminada = avanzarUnTic();
   }
}

window.addEventListener( "load", iniciar, false );