(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation');
  const nombre = document.getElementById('nombre');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');

  const nombreFeedback = document.getElementById('nombre-mensaje');
  const asuntoFeedback = document.getElementById('asunto-mensaje');
  const mensajeFeedback = document.getElementById('mensaje-mensaje');

  // Función para mostrar u ocultar el mensaje de validación dependiendo de la longitud del valor del campo
  function toggleFeedback(input, feedbackElement, maxLength) {
    if (input.value.length > maxLength) {
      feedbackElement.classList.add('active');
    } else {
      feedbackElement.classList.remove('active');
    }
  }

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      let preventDefault = false;

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()

      }
      toggleFeedback(nombre, nombreFeedback, 50);
      toggleFeedback(asunto, asuntoFeedback, 50);
      toggleFeedback(mensaje, mensajeFeedback, 300);

      // Prevenir el envío del formulario si algún campo excede el límite
      if (nombre.value.length > 50 || asunto.value.length > 50 || mensaje.value.length > 300) {
        preventDefault = true;
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);

    // Event listeners para detectar cambios en los campos de entrada y actualizar el mensaje de validación
    nombre.addEventListener('input', function () {
      toggleFeedback(nombre, nombreFeedback, 50);
    });

    asunto.addEventListener('input', function () {
      toggleFeedback(asunto, asuntoFeedback, 50);
    });

    mensaje.addEventListener('input', function () {
      toggleFeedback(mensaje, mensajeFeedback, 300);
    });
  });
})();
