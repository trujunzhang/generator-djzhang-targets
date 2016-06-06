'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
    mongoose = require('mongoose'),
    <%= appclassname%> = mongoose.model('<%= appclassname%>'),
    _ = require('lodash'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));



exports.totalItems = function (req, res) {
    <%= appclassname%>.count(function (err, count) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(count);
        }
    });
};

exports.<%= appname%>sList = function (req, res) {

    if (!req.params.page) {
        var page = 1;
    } else {
        var page = req.params.page;
    }
    var per_page = 50;

    <%= appclassname%>.find().sort('-updatedAt').skip((page - 1) * per_page).limit(per_page).exec(function (err, <%= appname%>s) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(<%= appname%>s);
        }
    });

};


