# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from selenium import webdriver
import time

from cw<%= appname%>.items import <%= appclassname%>
import urlparse


class <%= appclassname%>sBrowserSpider(scrapy.Spider):
    name = "<%= appname%>_browser"
    allowed_domains = ["<%= appdomain%>"]
    start_urls = [
        '<%= appstarturl%>',
    ]

    def __init__(self, name=None, **kwargs):
        self.driver = webdriver.Firefox()

        from cw<%= appname%>.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cw<%= appname%>.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(<%= appclassname%>sBrowserDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(<%= appclassname%>sBrowserSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def spider_closed(self, spider):
        self.driver.close()

    def parse(self, response):
        # def parsexxx(self, response):
        hxs = HtmlXPathSelector(response)
        links = hxs.select('//a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(response.url, link.strip())
            count += 1

            yield scrapy.Request(appLink, self.parse_detail)

