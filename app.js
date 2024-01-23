const express = require('express');
const app = express();
const path = require('node:path');



app.listen( 3002, () => console.log(`Server up on port: http://localhost:3002`) )

app.get('/', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/home.html')
    res.sendFile(pathHome);
} )

app.get('/registro', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/register.html')
    res.sendFile(pathHome);
} )

app.get('/carrito', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/carrito.html')
    res.sendFile(pathHome);
} )

app.get('/catalogo', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/catalogo.html')
    res.sendFile(pathHome);
} )

app.get('/contacto', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/contact.html')
    res.sendFile(pathHome);
} )

app.get('/sobre-nosotros', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/about.html')
    res.sendFile(pathHome);
} )

app.get('/producto', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/producto.html')
    res.sendFile(pathHome);
} )


