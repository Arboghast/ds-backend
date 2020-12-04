const Sequelize = require("sequelize");
const db = require('../Router/database');

const Prompt = db.define('prompts', {

    prompt:{

        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true
    }

});

module.exports = Prompt;