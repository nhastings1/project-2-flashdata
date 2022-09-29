const router = require('express').Router();
const { Card } = require('../../models');

const withAuth = require('../../utils/auth');

// getting the post to create a new card
router.post('/', async (req, res) => {
  try {
    const newCard = await Card.create({
      ...req.body,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
