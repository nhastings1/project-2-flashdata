const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model {
  // getCollection(name) {
  //return bcrypt.compareSync(loginPw, this.password);
  // }
  // getCollections() {
  //return bcrypt.compareSync(loginPw, this.password);
  // }
}

// creating the elements of the collection model
Collection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'collection',
  }
);

module.exports = Collection;
