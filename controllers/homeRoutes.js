const router = require('express').Router();
const { Card, Collection } = require('../models');
const withAuth = require('../utils/auth');
var _ = require('lodash');

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  console.log('i am here');
  try {
    const collectionsData = await Collection.findAll({
      order: [['name', 'ASC']],
    });
    const collections = collectionsData.map((project) =>
      project.get({ plain: true })
    );
    console.log('hello', collections);
    res.render('dashboard', {
      collections,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cards/:id', withAuth, async (req, res) => {
  try {
    const cardData = await Card.findAll({
      order: [['id', 'ASC']],
      where: { collection_id: req.params.id },
    });
    let cards = cardData.map((project) => project.get({ plain: true }));
    cards = _.shuffle(cards);
    res.render('flashcards', {
      cards,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-card', withAuth, async (req, res) => {
  try {
    const collectionsData = await Collection.findAll({
      order: [['name', 'ASC']],
    });
    const collections = collectionsData.map((project) =>
      project.get({ plain: true })
    );
    res.render('new-card', {
      collections,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-collection', withAuth, (req, res) => {
  res.render('new-collection', {
    logged_in: req.session.logged_in,
  });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});
module.exports = router;
