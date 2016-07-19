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
    "/htmls/detail_pages.py",
    "/tests/test_base_parser.py",
    "/tests/test_dispatch.py",
    "/tests/test_images_downloader.py",
    "/tests/test_mysql_db.py",
    "/tests/test_offline_parser.py",
    "/tests/test_paragraphs_parser.py",
    "/tests/test_spider_env.py",
    "/tests/test_wd_xml_rpc.py",
    "/tests/test_whole_pages_dispatch.py",
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





