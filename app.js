const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.static('public'))

app.listen( 3002, () => console.log(`Server up on port: http://localhost:3002`) )

app.get('/', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
} )

app.get('/registro', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/register.html')
    res.sendFile(pathHome);
} )

app.get('/carrito', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/carrito.html')
    res.sendFile(pathHome);
} )

app.get('/catalogo', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/catalogo.html')
    res.sendFile(pathHome);
} )

app.get('/contacto', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/contact.html')
    res.sendFile(pathHome);
} )

app.get('/sobre-nosotros', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/about.html')
    res.sendFile(pathHome);
} )

app.get('/producto', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/producto.html')
    res.sendFile(pathHome);
} )

app.get('/iniciar-sesion', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/login.html')
    res.sendFile(pathHome);
} )

app.get('/recuperar-contrasenia', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/recuperarContrasena.html')
    res.sendFile(pathHome);
} )

