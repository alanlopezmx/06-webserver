var express = require('express');
var app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));

//hbs engines

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hola mundo')

    res.render('home', {
        nombre: 'Fernando',
    });

});
app.get('/about', (req, res) => {
    //res.send('Hola mundo')

    res.render('about');

});
app.get('/data', (req, res) => {
    res.send('Hola Data')

});

app.listen(port, () => {
    console.log(`Esuchando peticiones en el puerto ${port}`);
});