module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        //created_at: dataTypes.TIMESTAMPS,
        //updated_at: dataTypes.TIMESTAMPS,
        first_name: {
            type: dataTypes.STRING(100)
        },
        last_name: {
            type: dataTypes.STRING(100)
        },
        rating: {
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id: {
            type: dataTypes.BIGINT(10).UNSIGNED
        }
    };
    let config = {
        //tableName: 'actors',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };
    const Actor = sequelize.define(alias, cols, config)

    Actor.associate = (models) =>{
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        });
    }

    return Actor
}