const router = require('express').Router();
const { User, Card, Collection } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Change this to where you app should go
    // console.log(req.session.logged_in);
    const cardData = await Card.findAll({
      order: [['id', 'ASC']],
    });
    const cards = cardData.map((project) => project.get({ plain: true }));
    console.log('cards:', cards);
    res.render('homepage', {
      cards,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
  console.log('i am here in cards');
  try {
    // console.log('***req***', req.params.id);
    // const cardData = await Card.findAll({
    //   order: [['id', 'ASC']],
    // });
    // const cards = cardData.map((project) => project.get({ plain: true }));
    // console.log('cards:', cards);
    // res.render('homepage', {
    //   cards,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-card', withAuth, (req, res) => {
  res.render('new-card', {
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
