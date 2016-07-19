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

    var appRoot = sourceRoot + '/app';

    // this.fs.copy(sourceRoot + "/.gitignore", destProjectRoot + "/.gitignore");

    // structure.spiders.files.forEach(function (entry) {
    //   var _value = entry.value;
    //   _value.forEach(function (file) {
    //     this.fs.copyTpl(sourceRoot + entry.folder + "/" + file, destProjectRoot + entry.folder + "/" + file, templateContext);
    //   }, this);
    // }, this);

    structure.spiders.files.forEach(function (file) {
      this.fs.copyTpl(appRoot + file, destProjectRoot + file, templateContext);
    }, this);

    // this.fs.copy(sourceRoot + "/app/*/**", destProjectRoot + projectName);

    // spiders.value.forEach(function (file, index) {
    //   var rename = spiders.renames[index];
    //   this.fs.move(destProjectRoot + spiders.dest + "/" + file, destProjectRoot + spiders.dest + "/" + rename);
    // }, this);
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
  }

  ,
  initializing: function () {
    var message = chalk.yellow.bold("Welcome to Scrapy ") + chalk.yellow('A popular spider to crawling with');
    this.log(yosay(message, {maxLength: 17}));
  }
  ,
  _saveAnswers: function (answers, callback) {
    this.appname = answers.name;
    this.appclassname = answers.classname;
    this.appdomain = answers.appdomain;
    this.appstarturl = answers.starturl;
    callback();
  }
  ,
  prompting: function () {
    var done = this.async();
    return this.prompt(this._getPrompts()).then(function (answers) {
      this._saveAnswers(answers, done);
    }.bind(this));
  }
  ,
  configuring: function () {
    this.config.save();
  }
  ,
  writing: function () {
    this._createProjectFileSystem();
  }
  ,
  install: function () {
  }
});


