'use strict';


var spiders = {
  "files": [
    "/utils/crawl_utils.py",
    "/utils/page_content_util.py",
    "/utils/parser_util.py",
    "/utils/selenium_utils.py",
    "/items.py",
    "/main.py",
    "/middlewares.py",
    "/scraped_websites.py",
    "/settings.py",
    "/database/page_db.py",
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





