const mongoose = require('mongoose');

const Ratings = mongoose.model(
  'Ratings',
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
    },
    facility: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
    },
    value: {
      type: Integer,
      enum: [1, 2, 3, 4, 5],       
    },    
  }),
);

module.exports = Ratings;


