"use strict";

var generators = require('yeoman-generator'),
    mkdirp = require('mkdirp'),
    yosay = require('yosay'),
    recursive = require('recursive-readdir'),
    structure = require('./app-structure'),
    chalk = require('chalk');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function () {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        templateContext = {
          appname: this.appname,
          appclassname: this.appclassname,
          appdomain: this.appdomain,
          appstarturl: this.appstarturl
        };
    var projectName = "/cw" + this.appname;

    var destProjectRoot = destRoot + projectName;

    this.fs.copy(sourceRoot + "/.gitignore", destProjectRoot + "/.gitignore");
    this.fs.copy(sourceRoot + "/*", destProjectRoot);
    this.fs.copy(sourceRoot + "/app/__init__.py", destProjectRoot + projectName + "/__init__.py");
    this.fs.copy(sourceRoot + "/app/*/**", destProjectRoot + projectName);

    structure.roots.files.forEach(function (file) {
      this.fs.copyTpl(sourceRoot + file, destProjectRoot + file, templateContext);
    }, this);

    structure.spiders.files.forEach(function (file) {
      this.fs.copyTpl(sourceRoot + '/app' + file, destProjectRoot + projectName + file, templateContext);
    }, this);

  },


  _getPrompts: function () {
    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name,like googleplay',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'classname',
        message: 'Your spider name,like GooglePlay',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'appdomain',
        message: 'Your spider domain'
      },
      {
        type: 'input',
        name: 'starturl',
        message: 'Your spider start url'
      }
    ];
    return prompts;
  },
  initializing: function () {
    var message = chalk.yellow.bold("Welcome to Scrapy ") + chalk.yellow('A popular spider to crawling with');
    this.log(yosay(message, {maxLength: 17}));
  },
  _saveAnswers: function (answers, callback) {
    this.appname = answers.name;
    this.appclassname = answers.classname;
    this.appdomain = answers.appdomain;
    this.appstarturl = answers.starturl;
    callback();
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


