export async function obtenerDatosAPI() {
    // Realizamos la petición HTTP a la URL de la API externa
    const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users');
    // Convertimos el cuerpo de la respuesta en un formato que JS pueda manejar
    const datosApi = await respuestaApi.json();
    return datosApi;
}
