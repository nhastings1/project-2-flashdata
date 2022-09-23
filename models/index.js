const User = require('./User');
const Card = require('./Card');
const Collection = require('./Collection');

User.hasMany(Card, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Collection, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Card.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Card.hasOne(Collection, {
    foreignKey: 'collectionId',
    onDelete: 'CASCADE'
});

Collection.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCASE'
});

Collection.hasMany(Card, {
    foreignKey: 'collecitonId',
    onDelete: 'CASCADE'
});

module.exports = { User, Card, Collection };
