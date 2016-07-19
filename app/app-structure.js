'use strict';


var spiders = {
  "source": "/spider/spiders",
  "dest": "/spiders",
  "value": [
    "app_browser_spider.py",
    "app_spider.py",
    "app_browser_debug_spider.py",
    "app_debug_spider.py"
  ],
  "renames": [
    "_browser_spider.py",
    "_spider.py",
    "_browser_debug_spider.py",
    "_debug_spider.py"
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
    "dest": "",
    "value": [
      "database_factory.py",
      "items.py",
      "main.py",
      "settings.py"
    ]
  },
  {
    "source": "/spider/tests",
    "dest": "/tests",
    "value": [
      "test_mysql_db.py"
    ]
  },
  {
    "source": "/spider/database",
    "dest": "/database",
    "value": [
      "cache_db.py",
      "history_db.py",
      "item_db.py"
    ]
  },
  {
    "source": "/spider/database/base",
    "dest": "/database/base",
    "value": [
      "mongo_db.py",
      "mysql_db.py"
    ]
  },
  {
    "source": "/spider/parser",
    "dest": "/parser",
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
