const router = require('express').Router();
const { Card } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCard = await Card.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
