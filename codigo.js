async function obtenerPlanes() {
    // Devuelve los planes de suscripción
    return [
        { nombre: 'Básico', precio: 5000, plan: 'basico' },
        { nombre: 'Medio', precio: 10000, plan: 'medio' },
        { nombre: 'Premium', precio: 20000, plan: 'premium' },
    ];
}

document.addEventListener('DOMContentLoaded', async function () {
    const planes = await obtenerPlanes(); // Obtener planes
    mostrarPlanes(planes); // Llamar a mostrarPlanes aquí
    const productosContainer = document.getElementById('productos');
    
    // Puedes agregar productos aquí si necesitas
});

function mostrarPlanes(planes) {
    const planSelect = document.getElementById('plan');
    planSelect.innerHTML = ''; // Limpiar opciones anteriores

    planes.forEach(plane => {
        const option = document.createElement('option');
        option.value = plane.plan;
        option.textContent = `${plane.nombre} - $${plane.precio}/mes`;
        planSelect.appendChild(option);
    });
}

function submitForm(nombre = 'aixa', email = 'aixa.feigel@gmail.com', direccion = 'jujuy 1534', plan = 'premium') {
    // Obtener valores de los campos si no se pasan como argumentos
    nombre = nombre || document.getElementById('nombre').value;
    email = email || document.getElementById('email').value;
    direccion = direccion || document.getElementById('direccion').value;
    plan = plan || document.getElementById('plan').value;


    if (!nombre || !email || !direccion || !plan) {
        mostrarMensaje('Por favor, complete todos los campos.', 'error');
        return;
    }
    const datosUsuario = { nombre, email, direccion, plan };
    localStorage.setItem('suscripcion', JSON.stringify(datosUsuario));
    mostrarMensaje('¡Gracias por suscribirte!', 'success');
    document.getElementById('subscription-form').reset();
}

function cargarDatos() {
    const datosGuardados = localStorage.getItem('suscripcion');
    if (datosGuardados) {
        const datosUsuario = JSON.parse(datosGuardados);
        document.getElementById('nombre').value = datosUsuario.nombre;
        document.getElementById('email').value = datosUsuario.email;
        document.getElementById('direccion').value = datosUsuario.direccion;
        document.getElementById('plan').value = datosUsuario.plan;
        mostrarMensaje('Datos cargados de una sesión anterior.', 'info');
    }
}

function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add(tipo === 'error' ? 'mensaje-error' : 'mensaje-exito');
    mensajeDiv.textContent = mensaje;


    document.querySelector('.container').appendChild(mensajeDiv);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);  
}

