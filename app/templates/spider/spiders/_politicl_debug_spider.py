# -*- coding: utf-8 -*-

import scrapy

from cwpoliticl.htmls.detail_pages import scraped_detail_pages
from cwpoliticl.scraped_websites import WebsiteTypes, websites_allowed_domains, websites_parses, is_pagination, \
    get_crawler_name


class PoliticlDebugSpider(scrapy.Spider):
    url_from = get_crawler_name()['url_from']
    name = "politicl_debug"

    def __init__(self, name=None, **kwargs):
        self.allowed_domains = [websites_allowed_domains.get(self.url_from)]

        if is_pagination:
            self.start_urls = [WebsiteTypes.get_pagination_url(self.url_from)]
        else:
            self.start_urls = scraped_detail_pages[self.url_from]

        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
        self.wd_rpc = WDXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        self._parser = websites_parses.get(self.url_from)

        super(PoliticlDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlDebugSpider, cls).from_crawler(crawler,
                                                            args,
                                                            host=crawler.settings.get('SQL_HOST'),
                                                            port=crawler.settings.get('SQL_PORT'),
                                                            user=crawler.settings.get('SQL_USER'),
                                                            passwd=crawler.settings.get('SQL_PASSWD'),
                                                            db=crawler.settings.get('SQL_DB'),
                                                            collection_name=crawler.settings.get(
                                                                'SQL_COLLECTION_NAME'),
                                                            wd_host=crawler.settings.get('WD_HOST'),
                                                            wd_user=crawler.settings.get('WD_USER'),
                                                            wd_passwd=crawler.settings.get('WD_PASSWD')
                                                            )

    def parse(self, response):
        if is_pagination:
            self._parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        else:
            access_denied_cookie = None
            if 'Set-Cookie' in response.headers:
                access_denied_cookie = response.headers.get('Set-Cookie').split(';', 1)[0]
            item = self._parser.parse(response.url, response, self.wd_rpc, thumbnail_url='',
                                      access_denied_cookie=access_denied_cookie)
