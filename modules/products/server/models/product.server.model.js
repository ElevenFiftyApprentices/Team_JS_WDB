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
  materials: {
    type: String,
    default: '',
    required: 'Please fill Product materials',
    trim: true
  },
  comments: {
    type: String,
    default: '',
    required: 'Please fill Product comments',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Product', ProductSchema);
