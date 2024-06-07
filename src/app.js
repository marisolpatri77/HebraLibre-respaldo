const express = require('express');
const cors = require('cors');

let rutasProductos = require('./routes/productos');
let routesApiProduct = require('./routes/APIs/productsAPI');
let rutasUsuarios = require('./routes/usuarios');
let rutasApiUsuarios = require('./routes/APIs/usuariosAPI');
let rutasMain = require('./routes/main');
let methodOverride = require('method-override');
let session = require('express-session');
let cookies = require('cookie-parser');
let userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();
const path = require('path');


//app.use(express.static('../public'))

app.use(express.static(path.join(__dirname, '../public') ));
app.use(methodOverride('_method'));
app.use(cors());

app.use(session({
    secret: 'nombre del sitio',
    resave: false,
    saveUninitialized: true,
}));
app.use(cookies());
app.use(userLoggedMiddleware );


//Configuracion de vistas
app.set('view engine', 'ejs')
app.set('views', (__dirname, 'src/views'));
 

app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios);
 app.use('/api/products', routesApiProduct);
// app.use('/api/usuarios', rutasApiUsuarios); 
app.use('/', rutasMain);
app.use('/api/user', rutasApiUsuarios);



const PORT = process.env.PORT || 3000
app.listen( PORT, () => console.log(`Server up on port: http://localhost:${PORT}`) )














