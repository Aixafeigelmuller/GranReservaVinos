async function obtenerProductos() {
    try {
    const response = await fetch('./data/productos.json');
    if (!response.ok) {
        throw new Error('No se pudo cargar los productos');
    }
    const productos = await response.json();
    return productos;
    } catch (error) {
    mostrarMensaje(error.message, 'error');
    }
}