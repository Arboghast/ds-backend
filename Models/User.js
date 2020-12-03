const Sequelize = require("sequelize");
const db = require('../Router/database');

const User = db.define('users', {

    Username:{

        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true

    }

});

module.exports = User;