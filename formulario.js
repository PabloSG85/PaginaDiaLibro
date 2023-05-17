// Obtener referencia al formulario
const formulario = document.getElementById('miFormulario');

// Agregar evento 'submit' al formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Obtener valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  
  // Validar los campos (puedes agregar tus propias validaciones)
  if (nombre === '' || email === '') {
    alert('Por favor, completa todos los campos');
    return;
  }
  
  // Crear objeto con los datos del formulario
  const datosFormulario = {
    nombre: nombre,
    email: email
  };
  
  // Enviar los datos del formulario (puedes hacer una llamada a una API aquí)
  console.log(datosFormulario);
  
  // Restablecer el formulario
  formulario.reset();
});
