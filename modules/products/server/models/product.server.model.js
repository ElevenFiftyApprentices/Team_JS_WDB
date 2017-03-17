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
    required: 'Please provide product title',
    trim: true
  },
  // materials: {
  //   type: String,
  //   default: '',
  //   required: 'Please fill Product materials',
  //   trim: true
  // },
  price: {
    type: String,
    default: '',
    required: 'Please provide product price',
    trim: true
  },
  comments: {
    type: String,
    default: '',
    required: 'Please fill Product comments',
    trim: true
  },
  color: {
    type: String,
    default: '',
    required: 'Please use a proper hex code',
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
  },
  materials: {
    type: [],
    default: [],
    trim: true
  }


});

mongoose.model('Product', ProductSchema);
