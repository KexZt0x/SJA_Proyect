# Gimnasio_SJA

Este repositorio contiene el código y la documentación del proyecto **Gimnasio_SJA**, un sistema de gestión de inventario desarrollado para el **Colegio Bilingüe San Juan de Ávila**. El propósito de este sistema es administrar de manera eficiente el inventario del gimnasio escolar, permitiendo registrar, gestionar y controlar el uso del equipo disponible.

## Descripción del proyecto

El sistema **Gimnasio_SJA** fue diseñado para:

- Registrar equipos del gimnasio, incluyendo detalles como nombre, categoría, estado, y una foto del equipo.
- Administrar préstamos y devoluciones de equipos realizados por estudiantes e instructores.
- Gestionar usuarios con roles definidos (administradores, instructores, y estudiantes).
- Generar reportes sobre préstamos, devoluciones y el estado del inventario.

## Tecnologías utilizadas

El sistema se desarrolló utilizando las siguientes tecnologías:

- **Frontend**: Angular para la interfaz de usuario.
- **Backend**: Node.js con Express para la gestión de la lógica de negocio y la API.
- **Base de datos**: SQL Server para el almacenamiento de datos.
- **Otros**:
  - JSON Web Tokens (JWT) para autenticación.
  - CORS y body-parser como middleware.
  

## Estructura del repositorio

```plaintext
├── frontend/          # Código fuente del cliente (Angular)
├── backend/           # Código fuente del servidor (Node.js y Express)
├── database/          # Scripts y modelos de base de datos
├── README.md          # Archivo de descripción del proyecto
