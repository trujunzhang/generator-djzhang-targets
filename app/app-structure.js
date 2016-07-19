'use strict';


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
      "settings.py"
    ]
  },
  {
    "source": "/spider/tests",
    "dest": "/" + projectName + "/tests",
    "value": [
      "test_mysql_db.py"
    ]
  },
  {
    "source": "/spider/database",
    "dest": "/" + projectName + "/database",
    "value": [
      "cache_db.py",
      "history_db.py",
      "item_db.py"
    ]
  },
  {
    "source": "/spider/database/base",
    "dest": "/" + projectName + "/database/base",
    "value": [
      "mongo_db.py",
      "mysql_db.py"
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
module.exports = {
  spiders: spiders,
  files: files
};
