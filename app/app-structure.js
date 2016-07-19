'use strict';


var spiders = {
  "files": [
    // "/utils/crawl_utils.py",
    // "/utils/page_content_util.py",
    // "/utils/parser_util.py",
    "/utils/selenium_utils.py"
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




