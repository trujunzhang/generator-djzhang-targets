	
scrapy crawl <%= appname%>
scrapy crawl <%= appname%>_browser

scrapyd-deploy local -p cw<%= appname%>

curl http://192.168.1.106:6800/schedule.json -d project=cw<%= appname%> -d spider=<%= appname%>