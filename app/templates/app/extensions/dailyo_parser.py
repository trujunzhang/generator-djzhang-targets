from cw<%= appname%>.extensions.base_parser import BaseParser
from cw<%= appname%>.items import WDPost


class DailyoParser(BaseParser):
    page_selector_dict = {
        "title": '//*[@id="header-story"]/*[@class="header-inner"]/h1/text()',
        "image": '//*[@id="header-story"]/@style',
        "content": '//*[@class="mediumcontent"]',
        "tags": '//*[@id="taglist"]/a/text()',
    }

    def __init__(self):
        from cw<%= appname%>.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.dailyo.value
        super(DailyoParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        self.save_block_for_pagination(url, hxs, cache_db, history_db, '//*[@class="storyimg"]', self.url_from)

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.extract_by_query(hxs, self.page_selector_dict['title'])
        image_src = self.get_image_src_from_style(self.extract_by_query(hxs, self.page_selector_dict['image']))
        content = self.get_paragraphs(hxs, self.page_selector_dict['content'])
        tags = hxs.xpath(self.page_selector_dict['tags']).extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item
