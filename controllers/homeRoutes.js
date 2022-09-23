const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Change this to where you app should go
    // console.log(req.session.logged_in);
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, (req, res) => {
  res.render('dashboard', {
    logged_in: req.session.logged_in,
  });
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
