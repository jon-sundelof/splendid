const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  pic: {
    data: Buffer,
    type: String,
    required: false,
  },
  pickup: {
    type: Boolean,
    required: false,
  },
  adress: {
    type: String,
    required: false,
  },
  delivery: {
    type: Boolean,
    required: false,
  },
  price: [{ type: String, required: false }],
  terms: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  timeperiod: {
    type: String,
    required: false,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  review: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Ad = mongoose.model('ads', AdSchema);
