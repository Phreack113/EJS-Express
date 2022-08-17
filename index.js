const express = require('express');
const morgan = require('morgan');
const colors = require('colors');

//Requiriendo rutas
const routes = require(__dirname + '/routes.js'); 
const routesApi = require(__dirname + '/routes-api'); 

const dtos = [{
    nombre: 'Sebastian',
    apellido: 'Talamona',
    edad: 35,
    mail: 's@s.com'
},{
    nombre: 'Florencia',
    apellido: 'Gomez',
    edad: 30,
    mail: 'f@f.com'
},{
    nombre: 'Fredy',
    apellido: 'Talamona',
    edad: 2,
    mail: 'fredy@can.com'
}];

const app = express();

app.listen(3000, () => {
    console.log('Server on port 3000'.yellow);
});

app.use(express.static(__dirname + '/public')); //Configuración de la carpeta public 

//Motor de plantillas EJS con Express
app.set('view engine', 'ejs'); //Indicamos a express que vamos a estar utilizando el motor de plantillas EJS
app.set('views', __dirname + '/views'); //Indicamos en que las vistas se encuentran en la carpeta 'views'

//Middlewares
app.use(morgan('dev'));


//Rutas
app.use(routes); //Usando las rutas que tengo en el archivo de rutas, creo la instancia
app.use('/api', routesApi);

/*
app.get('*', (req, res) => {
    res.end('<h1>Error 404</h1>');
});
*/