from cw<%= appname%>.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cw<%= appname%>.utils.crawl_utils import CrawlUtils

class CacheDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(CacheDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def save_cache(self, item, index=1):
        guid = CrawlUtils.get_guid(url)

        self.db[self.collection_name].update_one({'guid': guid}, {'$set': dict(item)}, True)
        logging.debug("<%= appclassname%>Cache added to MongoDB database!")
