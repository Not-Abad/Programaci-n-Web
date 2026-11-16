// Ejercicio 11.8: Generador de quintillas (esquema de rima AABBA)
var rimasA = [
   [
      "Había un joven programador en León,",
      "que compilaba código con gran emoción,",
      "y al final celebró con una canción."
   ],
   [
      "Un gato curioso subió al balcón,",
      "mirando la luna con mucha atención,",
      "hasta quedarse dormido en un rincón."
   ],
   [
      "Un marinero perdió su timón,",
      "en medio de una enorme embarcación,",
      "y navegó guiado por una constelación."
   ]
];

var rimasB = [
   [
      "Saltó de alegría al ver la pantalla,",
      "sin que apareciera ni una sola falla,"
   ],
   [
      "Corrió por el techo con gran rapidez,",
      "contando estrellas de diez en diez,"
   ],
   [
      "Cantó bajo el viento con buen humor,",
      "buscando el rumbo con gran valor,"
   ]
];

function iniciar()
{
   document.getElementById( "btnQuintilla" ).addEventListener( "click", generarQuintilla, false );
   generarQuintilla();
}

function generarQuintilla()
{
   var grupoA = rimasA[ Math.floor( Math.random() * rimasA.length ) ];
   var grupoB = rimasB[ Math.floor( Math.random() * rimasB.length ) ];

   var poema = grupoA[ 0 ] + "\n" +
      grupoA[ 1 ] + "\n" +
      grupoB[ 0 ] + "\n" +
      grupoB[ 1 ] + "\n" +
      grupoA[ 2 ];

   document.getElementById( "salidaQuintilla" ).value = poema;
}

window.addEventListener( "load", iniciar, false );