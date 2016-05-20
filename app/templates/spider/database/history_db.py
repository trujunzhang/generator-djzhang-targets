from cw<%= appname%>.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cw<%= appname%>.utils.crawl_utils import CrawlUtils


class HistoryDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(HistoryDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        item = {
            'url': url,
            'guid': CrawlUtils.get_guid(url),
            'created_at': datetime.utcnow().replace(microsecond=0).isoformat(' '),
        }

        self.db[self.collection_name].insert(item)
        logging.debug("<%= appclassname%>History added to MongoDB database!")
