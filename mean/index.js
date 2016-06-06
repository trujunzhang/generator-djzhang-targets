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
          appdomain: this.appdomain,
          appstarturl: this.appstarturl
        };
    var projectName = "/cw" + this.appname;

    mkdirp(appDir + projectName);
    mkdirp(appDir + projectName + projectName);

    this.fs.copy(this.sourceRoot() + "/*", destRoot + projectName);
    this.fs.copy(this.sourceRoot() + "/.gitignore", destRoot + projectName + "/.gitignore");
    this.fs.copy(this.sourceRoot() + "/debug/*", destRoot + projectName + "/debug");
    this.fs.copy(this.sourceRoot() + "/spider/**/*", destRoot + projectName + projectName);

    var spiders = {
      "source": "/spider/spiders",
      "dest": "/" + projectName + "/spiders",
      "value": [
        "app_browser_spider.py",
        "app_spider.py",
        "app_browser_debug_spider.py",
        "app_debug_spider.py"
      ],
      "renames": [
        this.appname + "_browser_spider.py",
        this.appname + "_spider.py",
        this.appname + "_browser_debug_spider.py",
        this.appname + "_debug_spider.py"
      ]
    };
    var files = [
      {
        "source": "",
        "dest": "",
        "value": [
          "readme.MD",
          "scrapy.cfg",
          "setup.py"
        ]
      },
      {
        "source": "/spider",
        "dest": "/" + projectName,
        "value": [
          "database_factory.py",
          "items.py",
          "main.py",
          "parser_factory.py",
          "pipelines.py",
          "settings.py"
        ]
      },
      {
        "source": "/spider/database",
        "dest": "/" + projectName + "/database",
        "value": [
          "base_db.py",
          "cache_db.py",
          "history_db.py",
          "item_db.py"
        ]
      },
      {
        "source": "/spider/parser",
        "dest": "/" + projectName + "/parser",
        "value": [
          "base_parser.py",
          "browse_parser.py",
          "response_parser.py"
        ]
      },
      spiders
    ];

    files.forEach(function (entry) {
      var _value = entry.value;
      _value.forEach(function (file) {
        this.fs.copyTpl(this.sourceRoot() + entry.source + "/" + file, destRoot + projectName + entry.dest + "/" + file, templateContext);
      }, this);
    }, this);

    spiders.value.forEach(function (file, index) {
      var rename = spiders.renames[index];
      this.fs.move(destRoot + projectName + spiders.dest + "/" + file, destRoot + projectName + spiders.dest + "/" + rename);
    }, this);
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
    this.appmodels = answers.models;
    console.log("app models: " + answers.models);
    this._makeModelCode(answers.models);
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
    // this._createProjectFileSystem();
  },
  install: function () {
  }
});


