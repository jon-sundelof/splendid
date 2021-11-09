const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

//              Models
const Ad = require('../../models/Ad');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { post } = require('./users');
////////////////////////////////////////

// @route   POST api/ads
// @desc    Create a ad
// @access  Private

router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('desc', 'Description is required').not().isEmpty(),
      check('price', 'Price is required').not().isEmpty(),
      check('terms', 'Terms are required').not().isEmpty(),
      check('productValue', 'Value is required').not().isEmpty(),
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
        productValue: req.body.productValue,
        timeperiod: req.body.timeperiod,
        name: user.firstName,
        avatar: user.avatar,
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

// @route   GET api/ads
// @desc    Get all ads
// @access  Private

router.get('/', async (req, res) => {
  try {
    const ads = await Ad.find().sort({ date: -1 });

    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/ads
// @desc    Get ad by ID
// @access  Private

router.get(
  '/:id',
  /* auth, */ async (req, res) => {
    try {
      const ad = await Ad.findById(req.params.id);

      if (!ad) {
        return res.status(404).json({ msg: 'Ad not found' });
      }

      res.json(ad);
    } catch (err) {
      console.error(err.message);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Ad not found' });
      }

      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/ad:id
// @desc    Delete a Ad
// @access  Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    if (!ad) {
      return res.status(404).json({ msg: 'Ad not found' });
    }

    // Check user
    if (ad.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await ad.remove();

    res.json({ msg: 'Ad removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Ad not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route   POST api/ads/review/:id
// @desc    Review a Ad
// @access  Private

router.post(
  '/review/:id',
  [
    auth,
    [
      check('text', 'Text is required').not().isEmpty(),
      check('rating', 'Rating is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const ad = await Ad.findById(req.params.id);

      // Check if the Ad has already been reviewed
      if (
        ad.review.filter((review) => review.user.toString() === req.user.id)
          .length > 0
      ) {
        return res.status(400).json({ msg: 'Ad already reviewed' });
      }

      const newReview = {
        text: req.body.text,
        rating: req.body.rating,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      ad.review.unshift(newReview);

      await ad.save();

      res.json(ad.review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/ads/review/:id/:review_id
// @desc    Delete a review on ad
// @access  Private

router.delete('/review/:id/:review_id', auth, async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    // Target the review in question
    const review = ad.review.find(
      (review) => review.id === req.params.review_id
    );

    // Check if comment exists
    if (!review) {
      return res.status(404).json({ msg: 'Review does not exist' });
    }

    // Check if correct user
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    review.remove();

    await ad.save();

    res.json(ad.review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
