// Ejercicio 11.7: Creación de historia corta con 20 enunciados aleatorios
var articulo = [ "el", "un", "algún", "ningún" ];
var sustantivo = [ "niño", "niña", "perro", "ciudad", "auto" ];
var verbo = [ "manejó", "saltó", "corrió", "caminó", "omitió" ];
var preposicion = [ "a", "desde", "encima de", "debajo de", "sobre" ];

function iniciar()
{
   document.getElementById( "btnGenerarHistoria" ).addEventListener( "click", generarHistoria, false );
   generarHistoria();
}

function palabraAlAzar( arreglo )
{
   return arreglo[ Math.floor( Math.random() * arreglo.length ) ];
}

function crearEnunciado()
{
   var oracion = palabraAlAzar( articulo ) + " " +
      palabraAlAzar( sustantivo ) + " " +
      palabraAlAzar( verbo ) + " " +
      palabraAlAzar( preposicion ) + " " +
      palabraAlAzar( articulo ) + " " +
      palabraAlAzar( sustantivo );

   return oracion.charAt( 0 ).toUpperCase() + oracion.slice( 1 ) + ".";
}

function generarHistoria()
{
   var historia = "Había una vez...\n\n";

   for ( var i = 1; i <= 20; ++i )
   {
      historia += i + ". " + crearEnunciado() + "\n";
   }

   historia += "\nFIN";
   document.getElementById( "historiaSalida" ).value = historia;
}

window.addEventListener( "load", iniciar, false );