const Sequelize = require("sequelize");
const db = require('../Router/database2');

const Prompt = db.define('prompts', {

    Username:{

        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true

    }

});

module.exports = Prompt;