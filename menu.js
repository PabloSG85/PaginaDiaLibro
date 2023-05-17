// Datos del menú
var menuItems = [
    { text: 'Inicio', url: 'index.html' },
    { text: 'Miguel de Cervantes', url: 'Miguel_Cervantes.html' },
    { text: 'Don Quijote', url: 'don_quijote.html' },
    { text: 'William Shakespeare', url: 'William_Shakespeare.html' },
    { text: 'Hamlet', url: 'Hamlet.html' },
    { text: 'Garcilaso de la Vega', url: 'Garcilaso_De_La_Vega.html' },
    { text: 'La Florida del Inca', url: 'La_Florida_del_Inca.html' },
    { text: 'Contacto', url: 'formulario.html' }
  ];
  
  // Obtener el elemento de navegación
  var nav = document.querySelector('nav');
  
  // Generar el contenido del menú
  var menuHTML = '';
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuHTML += '<a href="' + menuItem.url + '">' + menuItem.text + '</a>';
  }
  
  // Agregar el contenido del menú al elemento de navegación
  nav.innerHTML = menuHTML;
  
