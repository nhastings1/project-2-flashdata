const router = require('express').Router();
const { Card } = require('../../models');

const withAuth = require('../../utils/auth');

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

router.delete('/api/cards/:id', withAuth, async (req, res) => {
  try {
    const deleteCard = await Collection_id.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteCard) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(deleteCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
