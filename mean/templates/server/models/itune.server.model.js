'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * <%= appclassname%> Schema
 */
var <%= appclassname%>Schema = new Schema({
<%= appmodels%>
});

mongoose.model('<%= appclassname%>', <%= appclassname%>Schema);
