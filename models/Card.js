const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {
  getCards(collection) {
    //return bcrypt.compareSync(loginPw, this.password);
  }
}

Cards.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    collection_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'card',
  }
);

module.exports = Card;