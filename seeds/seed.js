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

  const cards = await Card.bulkCreate(cardData, {
    individualHooks: true,
    returning: true,
  });
  console.info('Cards Seeded:', cards);

  const collections = await Collection.bulkCreate(collectionData, {
    individualHooks: true,
    returning: true,
  });

  console.info('Collections Seeded:', collections);

  process.exit(0);
};

seedDatabase();
