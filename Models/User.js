const Sequelize = require("sequelize");
const db = require('../Router/database');

const User = db.define('users', {

    id:{

        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true

    },
    username:{

        type: Sequelize.STRING,
        allowNull: false,

    }

});

module.exports = User;