const Sequelize = require('sequelize');
const db = require('../config/db-config');

const Yacht = db.define('yacht', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defoultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productionYear: {
        type: Sequelize.INTEGER
    }
});

Yacht.sync()
    .then(() => console.log('Yacht model synchronized'))
    .catch(err => console.log('Error: ' + err.message));

module.exports = Yacht;