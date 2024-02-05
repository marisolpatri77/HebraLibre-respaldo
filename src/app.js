const express = require('express');

let rutasProductos = require('./routes/productos');
let rutasUsuarios = require('./routes/usuarios');
let rutasMain = require('./routes/main');
const app = express();
const path = require('node:path');

//app.use(express.static('../public'))

app.use(express.static(path.join(__dirname, '../public') ));

app.set('views', (__dirname, 'src/views'));

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000
app.listen( PORT, () => console.log(`Server up on port: http://localhost:${PORT}`) )

app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios);
app.use('/', rutasMain);










