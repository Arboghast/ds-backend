const Sequelize = require("sequelize");
const db = require('../Router/database');

const Prompt = db.define('prompts', {

    id:{

        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
        
    },
    prompt:{

        type: Sequelize.STRING,
        allowNull: false,

    }

});

module.exports = Prompt;