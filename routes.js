const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.render('index', {titulo : 'Este es el título', dato: 'EJS'}); //Renderizo en archvo ejs que esta en views. No es necesaria la extensión.
});

router.get('/familia', (req, res) => {
    res.render('familia', {personas: dtos}); //Renderizo en archvo ejs que esta en views. No es necesaria la extensión.
});

router.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios : 'Esta es la pagina de Servicios', dato: 'Servicio1'}); //Renderizo en archvo ejs que esta en views. No es necesaria la extensión.
});

router.get('/prueba', (req, res) => {
    res.send('<h1>Esta es una pagina de prueba</h1>'); 
});

module.exports = router;