const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Users', 'root', '12345', {
    host: '35.224.12.41',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    define: {

        timestamps: false

    },
});