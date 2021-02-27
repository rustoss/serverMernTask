// Rutas para crear usuarios
const router = require('express').Router()
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator')

const {
    crearUsuario
} = usuarioController

// Crea un usuario
// /api/usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 5 caracteres').isLength({ min: 6 })
    ],
    crearUsuario
)

module.exports = router