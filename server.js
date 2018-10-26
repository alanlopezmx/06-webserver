var express = require('express');
var app = express();
const hbs = require('hbs');


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hola mundo')

    res.render('home', {
        nombre: 'Fernando',
        anio: new Date().getFullYear(),
    });

});
app.get('/about', (req, res) => {
    //res.send('Hola mundo')

    res.render('about', {
        anio: new Date().getFullYear(),
    });

});
app.get('/data', (req, res) => {
    res.send('Hola Data')

});

app.listen(3000, () => {
    console.log('Esuchando peticiones en el puerto 3000');
});