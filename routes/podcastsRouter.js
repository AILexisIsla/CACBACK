// src/routes/movieRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio movieController (a realizarlo a futuro)
const podcastsController = require('../controllers/podcastsController');

// 4- En movieController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al movieController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', podcastsController.getAllPodcasts);
//Ruta para la consulta de peliculas por id
router.get('/:id', podcastsController.getPodcastsById);
//Ruta para crear una pelicula
router.post('/', podcastsController.createPodcasts);
//Ruta para actualizar una pelicula
router.put('/:id', podcastsController.updatePodcasts);
//Ruta para borrar una pelicula
router.delete('/:id', podcastsController.deletePodcasts);

// router.get('/users/', podcastsController.getAllUsers);
// //Ruta para la consulta de peliculas por id
// router.get('/users/:id', podcastsController.getUsersById);
// //Ruta para crear una pelicula
// router.post('/users/', podcastsController.createUsers);
// //Ruta para actualizar una pelicula
// router.put('/users/:id', podcastsController.updateUsers);
// //Ruta para borrar una pelicula
// router.delete('/users/:id', podcastsController.deleteUsers);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar movieController.js

