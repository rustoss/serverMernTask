// Rutas para autenticar usuarios
const router = require('express').Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')


// Autenticar un usuario
// /api/auth
router.post('/', 
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 5 caracteres').isLength({ min: 6 })
    ],
    authController.autenticarUsuario
)

module.exports = router