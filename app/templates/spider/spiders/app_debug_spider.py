# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
from cw<%= appname%>.items import <%= appclassname%>
import urlparse


class <%= appclassname%>sDebugSpider(scrapy.Spider):
    name = "<%= appname%>_debug"
    allowed_domains = ["<%= appdomain%>"]
    start_urls = [
        '<%= appstarturl%>',
    ]

    def __init__(self, name=None, **kwargs):
        from cw<%= appname%>.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cw<%= appname%>.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(<%= appclassname%>sDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(<%= appclassname%>sDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
