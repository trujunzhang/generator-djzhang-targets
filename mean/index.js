"use strict";

var generators = require('yeoman-generator'),
    mkdirp = require('mkdirp'),
    yosay = require('yosay'),
    chalk = require('chalk');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function () {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        appDir = destRoot,
        templateContext = {
          appname: this.appname,
          appclassname: this.appclassname,
          appmodels: this.appmodels
        };
    var projectName = "/_" + this.appname;

    mkdirp(appDir + projectName);

    // First of all, copy all template files to dest folder.
    // this.fs.copy(this.sourceRoot() + "/**/*", destRoot + projectName);

    var files = {
      "sources": [
        "client/config/itunes.client.menus.js",
        "client/config/itunes.client.routes.js",
        "client/controllers/list-itunes.client.controller.js",
        "client/itunes.client.module.js",
        "client/services/itunes.client.service.js",
        "client/views/list-itunes.client.view.html",
        "client/views/_list-banner.client.view.html",
        "client/views/_list-table.client.view.html",
        "server/config/itunes.server.config.js",
        "server/controllers/itunes.server.controller.js",
        "server/models/itune.server.model.js",
        "server/policies/itunes.server.policy.js",
        "server/routes/itunes.server.routes.js"
      ],
      "dests": [
        "client/config/" + this.appname + "s.client.menus.js",
        "client/config/" + this.appname + "s.client.routes.js",
        "client/controllers/list-" + this.appname + "s.client.controller.js",
        "client/" + this.appname + "s.client.module.js",
        "client/services/" + this.appname + "s.client.service.js",
        "client/views/list-" + this.appname + "s.client.view.html",
        "client/views/_list-banner.client.view.html",
        "client/views/_list-table.client.view.html",
        "server/config/" + this.appname + "s.server.config.js",
        "server/controllers/" + this.appname + "s.server.controller.js",
        "server/models/" + this.appname + ".server.model.js",
        "server/policies/" + this.appname + "s.server.policy.js",
        "server/routes/" + this.appname + "s.server.routes.js"
      ]
    };

    for (var i = 0, len = files.sources.length; i < len; i++) {
      var source = files.sources[i];
      var dest = files.dests[i];
      this.fs.copyTpl(this.sourceRoot() + '/' + source, destRoot + projectName + '/' + dest, templateContext);
    }
  },


  _getPrompts: function () {
    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your module name,like googleplay',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'classname',
        message: 'Your module class name(must upper letter first),like GooglePlay',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'models',
        message: "Your model's fields,format like (title,thumbnail,website,email,address)"
      }
    ];
    return prompts;
  },
  initializing: function () {
    var message = chalk.yellow.bold("Welcome to MEAN.js ") + chalk.yellow('A nean.js module showing crawled items');
    this.log(yosay(message, {maxLength: 19}));
  },
  _saveAnswers: function (answers, callback) {
    this.appname = answers.name;
    this.appclassname = answers.classname;
    this.appmodels = this._makeModelCode(answers.models);
    callback();
  },
  _makeModelCode: function (models) {
    var contents = [];
    models.split(',').forEach(function (item) {
      contents.push((item + ": {type: String,default: ''}"));
    });
    return contents.join(',');
  },
  prompting: function () {
    var done = this.async();
    return this.prompt(this._getPrompts()).then(function (answers) {
      this._saveAnswers(answers, done);
    }.bind(this));
  },
  configuring: function () {
    this.config.save();
  },
  writing: function () {
    this._createProjectFileSystem();
  },
  install: function () {
  }
});


