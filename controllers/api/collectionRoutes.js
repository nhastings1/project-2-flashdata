const router = require('express').Router();
const { Collection } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newCollection = await Collection.create({
      ...req.body,
    });

    res.status(200).json(newCollection);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
