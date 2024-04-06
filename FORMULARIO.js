const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const ticketType = document.getElementById('ticket-type').value;
    
    if (fullName.trim() === '' || email.trim() === '' || phone.trim() === '' || ticketType === '') {
        alert('Por favor completa todos los campos.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }
    
    // Aquí podrías enviar los datos del formulario a través de AJAX o realizar cualquier otra acción necesaria.
    alert('Formulario enviado correctamente.');
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

