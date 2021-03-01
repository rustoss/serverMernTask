// Rutas para crear proyectos
const router = require('express').Router()
const proyectoController = require('../controllers/proyectoController')

// Crear proyecto
// /api/proyectos
router.post('/', proyectoController.crearProyecto)

module.exports = router