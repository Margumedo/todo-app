# Todo App con React y Django

Este proyecto es una aplicación de tareas pendientes (todo app) que utiliza React para el frontend y Django para el backend.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Recomendaciones

> Recuerda crear y activar tu entorno virtual antes de instalar los requerimientos.

## Setup

### Requisitos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- Python (versión 3.9) o superior.
- Dependencias: se incluyen en el repo.
- Nodejs (versión 18 o superior) para utilizar npm.

## Instalación

Sigue estos pasos para configurar el entorno y ejecutar el proyecto:

1. Clona el repositorio desde GitHub:

   ```
   git clone https://github.com/Margumedo/todo-app.git
   ```

2. Navega al directorio del proyecto:

   cd tu-repositorio

3. Crea un entorno virtual (recomendado):

   ```
   python -m venv venv
   ```

4. Activa el entorno virtual:

- En Windows:

  ```
  venv\Scripts\activate
  ```

- En macOS y Linux:

  ```
  source venv/bin/activate
  ```

5. **Installation of Dependencies**:
   ```
   pip install -r requirements.txt
   ```

# Database Setup

## Configuración de la Base de Datos

Para configurar la base de datos `db.sqlite3` localmente, sigue estos pasos, asegúrate de haber clonado el repositorio:

1.  Verifica que estás en el directorio raíz del proyecto Django donde se encuentra el archivo `manage.py`.

2.  Recuerda activar tu entorno virtual de Python, por si no lo hiciste:

```sh
    source venv/bin/activate  # En sistemas basados en Unix/Linux/MacOS
    .\venv\Scripts\activate   # En Windows
```

3. Ejecuta las migraciones para crear la estructura de la base de datos:

```bash
 python manage.py migrate
```

4. (Opcional) Si deseas crear un usuario administrador para acceder al panel de administración de Django, ejecuta:

```bash
 python manage.py createsuperuser
```

y sigue las instrucciones en pantalla para completar la creación del usuario.

Con estos pasos, tendrás una base de datos lista para usar con tu aplicación Django.

# React

Antes de arrancar el frontend de la apliación es necesario instalar todas las depencias con el siguiente comando:
`npm install`

Executa la aplicación dentro de la carpeta /user con:
`npm run dev`

Esto iniciará tu aplicación React y estará disponible en la dirección http://localhost:5173

###End
