// src/controllers/movieController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require('../db/db');
const { get } = require('../routes/podcastsRouter');

//2- Método para obtener todas las podcasts
const getAllPodcasts = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM podcasts';

    // Utilizamos .query para enviar la consulra a la bbdd
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //si sucede algun error
        if (err) {console.log(err);} 
        //enviamos el resultado en formato json
        res.json(results);
    });
};

//3- Método para obtener peliculas con consultas parametrizadas
const getPodcastsById = (req, res) => {
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    // en la req viaja /movies/1, la expresion {id} estrae el nro 1 de la ruta
    // y la almacena dentro de la variable id
    const { id } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM podcasts WHERE id = ?';

    // Los marcadores de posición se utilizan para evitar la inyección de SQL, 
    // ya que los valores se escapan automáticamente.

    // Interactuamos con la bbdd, pasamos la consulta anterior
    db.query(sql, [id], (err, result) => {
        //en caso de error
        if (err) {console.log(err);} 
        //enviamos en formato json
        res.json(result);
    });
};

//4- Método para crear una película
const createPodcasts = (req, res) => {
    // Desestructuramos la request
    const { title, name, year } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO podcasts (title, name, year) VALUES (?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [title, name, year], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'podcasts creado', Id: result.insertId });
    });
};

//5- Método para modificar una película
const updatePodcasts = (req, res) => {
    // Desestructuramos la peticion
    const { id } = req.params;
    const { title, name, year } = req.body;
    // Consulta con marcadores
    const sql = 'UPDATE podcasts SET title = ?, name = ?, year = ? WHERE id = ?';
    // Pasamos la consulta
    db.query(sql, [title, name, year, id], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);} 
        //mensaje de éxito
        res.json({ message: 'Podcast updated' });
    });
};

//6- Método para borrar una película
const deletePodcasts = (req, res) => {
    // desestructuracion
    const { id } = req.params;
    // consulta sql
    const sql = 'DELETE FROM podcasts WHERE id = ?';
    // Pasamos la consulta
    db.query(sql, [id], (err, result) => {
        //error
        if (err)  {console.log(err);} 
        //exito
        res.json({ message: 'Podcast deleted' });
    });
};


// //2- Método para obtener todas las podcasts
// const getAllUsers = (req, res) => {
//     // Creamos una consulta
//     const sql = 'SELECT * FROM users';

//     // Utilizamos .query para enviar la consulra a la bbdd
//     // Primer parametro la consulta, segundo una función callback
//     db.query(sql, (err, results) => {
//         //si sucede algun error
//         if (err) {console.log(err);} 
//         //enviamos el resultado en formato json
//         res.json(results);
//     });
// };

// //3- Método para obtener peliculas con consultas parametrizadas
// const getUsersById = (req, res) => {
//     // Tomamos la solicitud y extraemos su id
//     // Esta es una notacion de desestructuración {id}
//     // en la req viaja /movies/1, la expresion {id} estrae el nro 1 de la ruta
//     // y la almacena dentro de la variable id
//     const { users_id } = req.params;

//     // Creamos la consulta con marcador de posición
//     const sql = 'SELECT * FROM users WHERE users_id = ?';

//     // Los marcadores de posición se utilizan para evitar la inyección de SQL, 
//     // ya que los valores se escapan automáticamente.

//     // Interactuamos con la bbdd, pasamos la consulta anterior
//     db.query(sql, [users_id], (err, result) => {
//         //en caso de error
//         if (err) {console.log(err);} 
//         //enviamos en formato json
//         res.json(result);
//     });
// };

// //4- Método para crear una película
// const createUsers = (req, res) => {
//     // Desestructuramos la request
//     const { user_handle, email_address, first_name, last_name } = req.body;
//     // Creamos la consulta con marcadores de posición
//     const sql = 'INSERT INTO users (user_handle, email_address, first_name, last_name) VALUES (?, ?, ?, ?)';
//     // Pasamos la consulta
//     //.query(consulta, array_con_valores, funcion_callback)
//     db.query(sql, [user_handle, email_address, first_name, last_name], (err, result) => {
//         //en caso de error
//         if (err)  {console.log(err);} 
//         //enviamos mensaje de exito con info de la peli
//         res.json({ message: 'user creado', usersId: result.insertUsersId });
//     });
// };

// //5- Método para modificar una película
// const updateUsers = (req, res) => {
//     // Desestructuramos la peticion
//     const { users_id } = req.params;
//     const { user_handle, email_address, first_name, last_name } = req.body;
//     // Consulta con marcadores
//     const sql = 'UPDATE users SET user_handle = ?, email_address = ?, first_name = ?, last_name = ? WHERE users_id = ?';
//     // Pasamos la consulta
//     db.query(sql, [user_handle, email_address, first_name, last_name, users_id], (err, result) => {
//         //en caso de error
//         if (err)  {console.log(err);} 
//         //mensaje de éxito
//         res.json({ message: 'Podcast updated' });
//     });
// };

// //6- Método para borrar una película
// const deleteUsers = (req, res) => {
//     // desestructuracion
//     const { users_id } = req.params;
//     // consulta sql
//     const sql = 'DELETE FROM users WHERE users_id = ?';
//     // Pasamos la consulta
//     db.query(sql, [users_id], (err, result) => {
//         //error
//         if (err)  {console.log(err);} 
//         //exito
//         res.json({ message: 'user deleted' });
//     });
// };


//7- Exportamos los módulos que serán utilizados en moviesRouter.js
module.exports = {
    getAllPodcasts,
    getPodcastsById,
    createPodcasts,
    updatePodcasts,
    deletePodcasts,
    // getAllUsers,
    // getUsersById,
    // createUsers,
    // updateUsers,
    // deleteUsers
};

//8- Pasamos a configurar db.js

