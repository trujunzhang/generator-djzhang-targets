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

        from cw<%= appname%>.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cw<%= appname%>.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(<%= appclassname%>sBrowserDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(<%= appclassname%>sBrowserSpider, cls).from_crawler(crawler,
                                                               args,
                                                               host=crawler.settings.get('SQL_HOST'),
                                                               port=crawler.settings.get('SQL_PORT'),
                                                               user=crawler.settings.get('SQL_USER'),
                                                               passwd=crawler.settings.get('SQL_PASSWD'),
                                                               db=crawler.settings.get('SQL_DB'),
                                                               collection_name=crawler.settings.get(
                                                                   'SQL_COLLECTION_NAME')
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

