# Parcial 1 - Aplicaciones Web II (Parte Práctica)

Este proyecto consiste en la implementación de un servidor backend utilizando **Node.js** y el framework **Express**.

## 🛠️ Estructura del Proyecto

El código se encuentra organizado en módulos independientes para facilitar su mantenimiento y escalabilidad:

*   **`index.mjs`**: Punto de entrada de la aplicación. Configura el servidor, los puertos y define las rutas de acceso.
*   **`animes.mjs`**: Actúa como fuente de datos persistente en formato JSON, exportando el array de objetos de animes.
*   **`funciones.mjs`**: Contiene la lógica de negocio y los controladores de las rutas (obtención de datos y procesamiento estadístico).
*   **`middlewares.mjs`**: Módulo dedicado a las funciones intermedias para validación y seguridad de las peticiones.

## 📡 Endpoints Disponibles

### API REST (Recursos)
*   `GET /api/v1/animes`: Devuelve la lista completa de animes disponibles.
*   `GET /api/v1/animes/:id`: Devuelve un anime específico filtrado por su ID. Cuenta con validación previa.

### Procedimientos (Acciones)
*   `GET /ejecutar-proceso-resumen`: Endpoint orientado a procedimientos que procesa la totalidad de los datos para devolver un reporte estadístico (Total de capítulos, promedio, etc.).

## 🛡️ Middlewares Implementados

Se ha desarrollado el middleware **`validarId`**, el cual intercepta las peticiones dirigidas a rutas con parámetros ID. Su función es verificar que el carácter ingresado sea numérico antes de permitir el acceso al controlador, mejorando la robustez del servidor.

## 🚦 Gestión de Estados (HTTP Status Codes)

La aplicación implementa un manejo de errores basado en estándares oficiales:
*   **200 (OK)**: Para peticiones exitosas.
*   **400 (Bad Request)**: Cuando las validaciones de entrada fallan (ej: ID no numérico).
*   **404 (Not Found)**: Cuando el recurso solicitado no existe en el sistema.

---
**Desarrollado por Nahuel Scarone**
