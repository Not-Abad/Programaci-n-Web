// Ejercicio 11.10: Extracción de código de área y número telefónico con split
function iniciar()
{
   document.getElementById( "btnExtraer" ).addEventListener( "click", separarTelefono, false );
   separarTelefono();
}

function separarTelefono()
{
   var cadena = document.getElementById( "telefonoInput" ).value.trim();
   var partesParentesis = cadena.split( ")" );

   if ( partesParentesis.length === 2 && partesParentesis[ 0 ].charAt( 0 ) === "(" )
   {
      var area = partesParentesis[ 0 ].split( "(" )[ 1 ];
      var partesGuion = partesParentesis[ 1 ].split( "-" );

      if ( partesGuion.length === 2 )
      {
         document.getElementById( "codigoArea" ).value = area;
         document.getElementById( "numeroSiete" ).value = partesGuion[ 0 ] + partesGuion[ 1 ];
         return;
      }
   }

   document.getElementById( "codigoArea" ).value = "Formato inválido";
   document.getElementById( "numeroSiete" ).value = "Use (555)555-5555";
}

window.addEventListener( "load", iniciar, false );