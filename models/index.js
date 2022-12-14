const User = require('./User');
const Card = require('./Card');
const Collection = require('./Collection');

// User.hasMany(Card, {
//   foreignKey: ',
//   onDelete: 'CASCADE',
// });

// bringing in relations to each other
Collection.hasMany(Card, {
  foreignKey: 'collection_id',
  onDelete: 'CASCADE',
});

Card.belongsTo(Collection, {
  foreignKey: 'collection_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Card, Collection };
