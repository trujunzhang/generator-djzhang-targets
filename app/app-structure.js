'use strict';


var spiders = {
  "source": "/spider/spiders",
  "dest": "/spiders",
  "value": [
    "app_browser_spider.py",
    "app_spider.py",
    "app_browser_debug_spider.py",
    "app_debug_spider.py"
  ]
};
var files = [
  {
    "folder": "",
    "value": [
      "readme.MD",
      "scrapy.cfg",
      "setup.py"
    ]
  },
  {
    "folder": "/db",
    "value": [
      "seed.sql"
    ]
  }
];
module.exports = {
  spiders: spiders,
  files: files
};
