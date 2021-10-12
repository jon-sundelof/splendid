const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

//              Models
const Ad = require('../../models/Ad');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
////////////////////////////////////////

// @route   POST api/posts
// @desc    Create a ad
// @access  Private

router.get(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('desc', 'Description is required').not().isEmpty(),
      check('price', 'Price is required').not().isEmpty(),
      check('terms', 'Terms are required').not().isEmpty(),
      check('value', 'Value is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newAd = new Ad({
        category: req.body.category,
        title: req.body.title,
        desc: req.body.desc,
        pic: req.body.pic,
        pickup: req.body.pickup,
        adress: req.body.adress,
        delivery: req.body.delivery,
        price: req.body.price,
        terms: req.body.terms,
        value: req.body.value,
        timeperiod: req.body.timeperiod,
        user: req.user.id,
      });

      const ad = await newAd.save();

      res.json(ad);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
