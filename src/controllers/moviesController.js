const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,{
            include: [{association: 'genre'}, {association: 'actors'}]
        })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        db.Genre.findAll()
        .then(genres => {
            return res.render('moviesAdd.ejs', {genres})
        }) 
    },
    create: function (req, res) {
        db.Movie.create({
           title: req.body.title,
           rating: req.body.rating,
           awards: req.body.awards,
           release_date: req.body.release_date,
           length: req.body.length,
           genre_id: req.body.genre_id
        })
        .then(() => {
            return res.redirect('/movies');
        })
        .catch(error => {res.render(error)});
    },
    edit: function(req, res) {
        let movieToEdit = db.Movie.findByPk(req.params.id);
        let genresAll = db.Genre.findAll();

        Promise.all([movieToEdit, genresAll])
            .then(function([Movie, genres]){
                return res.render('moviesEdit.ejs', {Movie, genres});
            });
        
        /* db.Movie.findByPk(req.params.id)
            .then(Movie => {
                return res.render('moviesEdit.ejs', {Movie});
            });  */
    },
    update: function (req, res) {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
         },{
             where: {
                 id: req.params.id
             }
         })
         .then(() => {
             return res.redirect('/movies/detail/' + req.params.id);
         })
         .catch(error => {res.render(error)});
    },
    delete: function (req, res) {
        db.Movie.findByPk(req.params.id)
            .then(Movie => {
                return res.render('moviesDelete.ejs', {Movie});
            }); 
    },
    destroy: function (req, res) {
        db.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() => {
            return res.redirect('/movies');
        })
        .catch(error => {res.render(error)});
    }

}

module.exports = moviesController;