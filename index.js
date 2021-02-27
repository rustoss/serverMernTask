const express = require("express")
const conectarDB = require('./config/db')

// Crear el servidor
const app = express()

// Conectar a la base de datos
conectarDB()

// Habilitar express.json
app.use(express.json({ extended: true }))

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))



// Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola')
})



const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
})