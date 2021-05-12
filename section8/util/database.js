const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete', 'root', 'QPR4life',
    { dialect: 'mysql', host: 'localhost' }
);

module.exports = sequelize;
