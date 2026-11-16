// Ejercicio 11.2: Diálogos de alerta con fechas relativas a la hora actual
function iniciar()
{
   document.getElementById( "btnAhora" ).addEventListener( "click", function() {
      var ahora = new Date();
      alert( "Ahora:\n" + ahora.toLocaleString() );
   }, false );

   document.getElementById( "btnAyer" ).addEventListener( "click", function() {
      var ahora = new Date();
      var ayer = new Date( ahora.getTime() - 24 * 60 * 60 * 1000 );
      alert( "Ayer (hace 24 horas):\n" + ayer.toLocaleString() );
   }, false );

   document.getElementById( "btnDiezAnios" ).addEventListener( "click", function() {
      var ahora = new Date();
      var haceDiezAnios = new Date( ahora.getFullYear() - 10, ahora.getMonth(),
         ahora.getDate(), ahora.getHours(), ahora.getMinutes(), ahora.getSeconds() );
      alert( "Hace diez años:\n" + haceDiezAnios.toLocaleString() );
   }, false );

   document.getElementById( "btnUnaSemana" ).addEventListener( "click", function() {
      var ahora = new Date();
      var unaSemana = new Date( ahora.getTime() + 7 * 24 * 60 * 60 * 1000 );
      alert( "Una semana a partir de hoy:\n" + unaSemana.toLocaleString() );
   }, false );
}

window.addEventListener( "load", iniciar, false );