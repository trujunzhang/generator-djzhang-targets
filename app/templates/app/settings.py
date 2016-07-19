# -*- coding: utf-8 -*-

# Scrapy settings for cw<%= appname%> project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'cw<%= appname%>'

SPIDER_MODULES = ['cw<%= appname%>.spiders']
NEWSPIDER_MODULE = 'cw<%= appname%>.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'cw<%= appname%> (+http://www.yourdomain.com)'

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 4

# Configure a delay for requests for the same website (default: 0)
# See http://scrapy.readthedocs.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 2
# The download delay setting will honor only one of:
# CONCURRENT_REQUESTS_PER_DOMAIN=8
# CONCURRENT_REQUESTS_PER_IP=8

# Disable cookies (enabled by default)
COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
# TELNETCONSOLE_ENABLED=False

# Override the default request headers:
# DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
# }

# Enable or disable spider middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html
# SPIDER_MIDDLEWARES = {
#    'cw<%= appname%>.middlewares.MyCustomSpiderMiddleware': 543,
# }

# Enable and configure the AutoThrottle extension (disabled by default)
# See http://doc.scrapy.org/en/latest/topics/autothrottle.html
# NOTE: AutoThrottle will honour the standard settings for concurrency and delay
AUTOTHROTTLE_ENABLED = True
# The initial download delay
AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
AUTOTHROTTLE_MAX_DELAY = 60
# Enable showing throttling stats for every response received:
AUTOTHROTTLE_DEBUG = True

# Enable and configure HTTP caching (disabled by default)
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
# HTTPCACHE_ENABLED=True
# HTTPCACHE_EXPIRATION_SECS=0
# HTTPCACHE_DIR='httpcache'
# HTTPCACHE_IGNORE_HTTP_CODES=[]
# HTTPCACHE_STORAGE='scrapy.extensions.httpcache.FilesystemCacheStorage'

DOWNLOADER_MIDDLEWARES = {
    'cw<%= appname%>.middlewares.RandomUserAgentMiddleware': 200,
    'cw<%= appname%>.middlewares.CustomDownloaderMiddleware': 543,
}

# SQL DATABASE SETTING
SQL_HOST = 'localhost'
# SQL_HOST = '104.236.77.182'
# SQL_HOST = '192.168.1.106'
SQL_PORT = 3306
SQL_USER = 'cw<%= appname%>'
SQL_PASSWD = 'cw<%= appname%>720'
# database_name
SQL_DB = '<%= appname%>'
# table_name
SQL_COLLECTION_NAME = '<%= appname%>s'

# python-wordpress-xmlrpc
WD_HOST = 'http://localhost:8888/<%= appname%>'
# WD_HOST = 'http://localhost:8888'
# WD_HOST = 'http://192.168.1.106:8888'
# WD_HOST = 'http://104.236.77.182:8888'
WD_USER = 'trujunzhang'
WD_PASSWD = 'wanghao720'