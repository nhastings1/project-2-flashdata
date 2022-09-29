const router = require('express').Router();
const { Collection } = require('../../models');

const withAuth = require('../../utils/auth');

// getting the post to create a new collection
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
