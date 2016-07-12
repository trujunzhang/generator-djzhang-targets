from scrapy import cmdline
import os


class Crawler:
    def execute(self, module):
        para = '--set LOG_FILE={}.log'.format(module)
        # para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())

def main():
    utils = Crawler()

    utils.execute("<%= appname%>")
    # utils.execute("<%= appname%>_debug")
    # utils.execute("<%= appname%>_browser")
    # utils.execute("<%= appname%>_browser_debug")

if __name__ == '__main__':
    main()
