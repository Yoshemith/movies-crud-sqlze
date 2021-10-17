module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'actors',
        timestamps: false
    };
    const Actor = sequelize.define(alias, cols, config)

    Actor.associate = (models) =>{
        Actor.hasMany(models.Movie, {
            as: 'Movies',
            through: 'actor_movie',
            foreignKey: 'genre_id',
            otherKey: 'movie_id',
            timestamps: false
        });
    }

    return Actor
}