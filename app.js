const express = require('express');
const app = express();
const path = require('node:path');



app.listen( 3002, () => console.log(`Server up on port: http://localhost:3002`) )

app.get('/', (req, res) =>{
    const pathHome = path.join(__dirname, 'app/views/home.html')
    res.sendFile(pathHome);
} )