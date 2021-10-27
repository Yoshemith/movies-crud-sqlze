const db = require('../../database/models');
const sequelize = db.sequelize;


const genresAPIController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                let respuesta = {
                    meta: { //metadata
                        status: 200,
                        total: genres.length, //cuantos tiene
                        url: 'api/genres' //meramente informativo
                    },
                    data: genres    //datos
                };
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let respuesta = {
                    meta: { //metadata
                        status: 200,
                        total: genre.length, //cuantos tiene
                        url: 'api/genre/:id' //meramente informativo
                    },
                    data: genre    //datos
                };
                res.json(respuesta);
            });
    },
    'genreMovies': (req, res) => {
        db.Genre.findByPk(req.params.id,{
            include: ['movies']
        })
            .then(genre => {
                let respuesta = {
                    meta: { //metadata
                        status: 200,
                        total: genre.length, //cuantos tiene
                        url: 'api/genre/:id/movies' //meramente informativo
                    },
                    data: genre    //datos
                };
                res.json(respuesta);
            });
    }

}

module.exports = genresAPIController;