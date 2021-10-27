const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
//API
const apiMoviesRouter = require('./routes/api/movies')
const apiGenresRouter = require('./routes/api/genres');
const apiActorsRouter = require('./routes/api/actors')

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

//API routes
app.use('/api/movies',apiMoviesRouter);
app.use('/api/actors',apiActorsRouter);
app.use('/api/genres',apiGenresRouter);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
