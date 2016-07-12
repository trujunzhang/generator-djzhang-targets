# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
|
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cw<%= appname%>.items import <%= appclassname%>
import urlparse


class <%= appclassname%>sDebugSpider(scrapy.Spider):
    name = "<%= appname%>_debug"
    allowed_domains = ["<%= appdomain%>"]
    start_urls = [
        '<%= appstarturl%>',
    ]

    def __init__(self, name=None, **kwargs):
        from cw<%= appname%>.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cw<%= appname%>.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(<%= appclassname%>sDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(<%= appclassname%>sDebugSpider, cls).from_crawler(crawler,
                                                               args,
                                                               host=crawler.settings.get('SQL_HOST'),
                                                               port=crawler.settings.get('SQL_PORT'),
                                                               user=crawler.settings.get('SQL_USER'),
                                                               passwd=crawler.settings.get('SQL_PASSWD'),
                                                               db=crawler.settings.get('SQL_DB'),
                                                               collection_name=crawler.settings.get(
                                                                   'SQL_COLLECTION_NAME')
                                                               )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
