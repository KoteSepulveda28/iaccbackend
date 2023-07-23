Pasos a seguir para la instalacion

1:  Tener una BDD Postgres en su localhost
        .Nombre de la instacia: iacc_db_test
        .Configurar instancia y credenciales en el archivo /src/app.module.ts

2:  Ejecutar los siguientes comandos en la raiz del proyecto
        . npm install
        . npm start

Se levantara el servicio de Backend en su localhost:3000



<!-- LLAMADOS DE CURL PARA PRUEBAS -->

<!-- [ALUMNOS] -->

    <!-- OBTENER GET -->
        curl -X GET http://localhost:3000/alumnos
        curl -X GET http://localhost:3000/alumnos/{identificador}

    <!-- INGRESO POST -->
        curl -X POST -H "Content-Type: application/json" -d '{"nombre":"Alumno 1", "edad": 25}' http://localhost:3000/alumnos

    <!-- EDICION PUT -->
        curl -X PUT -H "Content-Type: application/json" -d '{"nombre":"Alumno Update", "edad": 32}' http://localhost:3000/alumnos/{identificador}

    <!-- ELIMINAR DELETE -->
        curl -X DELETE http://localhost:3000/alumnos/{identificador}

<!-- [FIN][ALUMNOS] -->


<!-- CURSOS -->

    <!-- OBTENER GET -->
        curl -X GET http://localhost:3000/cursos
        curl -X GET http://localhost:3000/cursos/{identificador}

    <!-- INGRESO POST -->
        curl -X POST -H "Content-Type: application/json" -d '{"nombre":"Curso 1", "descripcion": "Curso Nro 1"}' http://localhost:3000/cursos

    <!-- EDICION PUT -->
        curl -X PUT -H "Content-Type: application/json" -d '{"nombre":"Curso Update", "descripcion": "Curso Nro 1"}' http://localhost:3000/cursos/{identificador}

    <!-- ELIMINAR DELETE -->
        curl -X DELETE http://localhost:3000/cursos/{1}

<!-- [FIN] CURSOS -->


