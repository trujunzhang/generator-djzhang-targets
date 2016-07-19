import logging
import urllib2

from cw<%= appname%>.extensions.rpc.images_downloader import ImagesDownload

USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 '' \
''(KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'


class TheViewsPaperImagesDownloader(ImagesDownload):
    # Override
    def _download_photo(self, item, image_link, image_location):
        access_denied_cookie = item['access_denied_cookie']
        if access_denied_cookie:
            self._download_image_with_cookie(image_link, image_location, cookie=access_denied_cookie)
        else:
            logging.debug("Not found the access_denied_cookie to download the blocked image!")

    def _download_image_with_cookie(self, image_link, path, referer=None, cookie=None):
        req = urllib2.Request(image_link)
        if referer:
            req.add_header("Referer", referer)
        if cookie:
            req.add_header("Cookie", cookie)
        req.add_header("User-Agent", USER_AGENT)
        u = urllib2.urlopen(req)
        f = open(path, 'wb')
        meta = u.info()
        file_size = int(meta.getheaders("Content-Length")[0])
        # print u"Downloading: %s Bytes: %s" % (path, file_size)

        file_size_dl = 0
        block_sz = 8192
        while True:
            _buffer = u.read(block_sz)
            if not _buffer:
                break

            file_size_dl += len(_buffer)
            f.write(_buffer)
            status = r"%10d  [%3.2f%%]" % (file_size_dl, file_size_dl * 100. / file_size)
            status += chr(8) * (len(status) + 1)
            # print status,

        f.close()
