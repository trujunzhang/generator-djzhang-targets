'use strict';


var spiders = {
  "files": [
    "/items.py",
    "/main.py",
    "/middlewares.py",
    "/scraped_websites.py",
    "/settings.py",
    "/utils/crawl_utils.py",
    "/utils/page_content_util.py",
    "/utils/parser_util.py",
    "/utils/selenium_utils.py",
    "/database/base/mongo_db.py",
    "/database/base/mysql_db.py",
    "/database/cache_db.py",
    "/database/history_db.py",
    "/database/item_db.py",
    "/database/page_db.py",
    "/extensions/rpc/images_downloader.py",
    "/extensions/rpc/the_views_papaer_images_downloader.py",
    "/extensions/rpc/wordpress_xml_rpc_utils.py",
    "/extensions/base_parser.py",
    "/extensions/dailyo_parser.py",
    "/htmls/details_pages.py",
      '/spiders/'

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





