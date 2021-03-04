// Rutas para crear proyectos
const router = require('express').Router()
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

// Crear proyecto
// /api/proyectos
router.post('/',    
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
)

module.exports = router