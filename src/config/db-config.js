const Sequelize = require('sequelize');
const { dbCredentials } = require('./keys');

module.exports = new Sequelize(dbCredentials.dbname, dbCredentials.user, dbCredentials.password, {
    host: dbCredentials.host,
    // port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        ssl: 'Amazon RDS'
    }
}); 