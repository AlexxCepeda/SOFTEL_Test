
## Instalación


Para correr este proyecto localmente se necesitan seguir los siguientes pasos:


    1. Clonar repositorio de forma local
    2. Abrir Visual Studio Code 
    3. Abrir dos terminales correspondientes:
        - Para Backend:  cd Backend
        - Para Frontend: cd Frontend
    4. Instalar dependencias para cada side:
        - "npm i" en ambas terminales
    5. Para correr localmente en ambas terminales:
        - Correr el comando "npm start" (correr primero el Backend)



## Notas

- El Frontend se corre en el puerto:3000 (marcará error si está ocupado)
- El Backend corre en el puerto:8800 (marcará error si está ocupado)

## Conexión con MySQL

- Para crear la conexión con MySQL se establecen los siguientes parámetros:
    - user : 'root'
    - password : 'root'

En caso de que no se establezca la conexión con estos valores (agregados por defecto), modificar la línea 10 y 11 del archivo index.js en la carpeta Backend.

En caso de olvidar la contraseña para la conexión, se puede correr el siguiente comando en un query:

    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; en caso de no recordar la contraseña
