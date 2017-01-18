'use strict';

const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  url: {
    type: String,
    unique: true,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // gps: {
  //   type: String,
  //   required: true,
  // },
}, {
  timestamps: true,
  toJSON: {
    virtuals: false,
    transform: function (doc, ret, options) {
      let userId = (options.user && options.user._id) || false;
      ret.editable = userId && userId.equals(doc._owner);
      return ret;
    },
  },
});

// channelSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
