const sequelize = require('../config/connection');
const { User, Card, Collection } = require('../models');

const userData = require('./userData.json');
const cardData = require('./cardData.json');
const collectionData = require('./collectionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.info('Users Seeded:', users);

  const collections = await Collection.bulkCreate(collectionData, {
    // returning: true,
  });

  console.info('Collections Seeded:', collections);

  const cards = await Card.bulkCreate(cardData, {
    // returning: true,
  });
  console.info('Cards Seeded:', cards);

  process.exit(0);
};

seedDatabase();
