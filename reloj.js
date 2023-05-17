function actualizarReloj() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    // Ajustar el formato de las horas, minutos y segundos si es necesario
    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;
  
    // Mostrar el reloj en el elemento con el id "reloj"
    document.getElementById('reloj').innerHTML = horas + ':' + minutos + ':' + segundos;
  }
  
  // Actualizar el reloj cada segundo (1000 milisegundos)
  setInterval(actualizarReloj, 1000);
  