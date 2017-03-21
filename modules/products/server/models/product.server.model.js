'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill Product title',
    trim: true
  },
<<<<<<< Updated upstream
  upc: {
    type: String,
    default: '',
    required: 'Please fill Product upc',
=======
  price: {
    type: String,
    default: '',
    required: 'Please provide product price',
    trim: true
  },
  comments: {
    type: String,
    default: '',
    trim: true
  },
  color: {
    type: String,
    default: '',
    required: 'Please use a proper hex code',
>>>>>>> Stashed changes
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  material: {
    type: String,
    default: '',
    required: 'Please provide a material',
    trim: true
  },
  materials: {
    type: [],
    default: [],
    required: 'Please provide a material',
    trim: true
  }


});

mongoose.model('Product', ProductSchema);
