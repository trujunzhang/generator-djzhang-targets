# Installation
## Python == 2.7.11

pip freeze > requirements.txt

pip install -r requirements.txt

# run
scrapy crawl <%= appname%>
scrapy crawl <%= appname%>_browser

# deploy to scrapyd

scrapyd-deploy local -p cw<%= appname%>

curl http://192.168.1.106:6800/schedule.json -d project=cw<%= appname%> -d spider=<%= appname%>

# debug log

item exist  on the cache database

failure,

# Create mysql database

create database <%= appname%>;

grant all on <%= appname%>.* to '<%= appname%>' identified by '<%= appname%>720';

mysql -u <%= appname%> -p '<%= appname%>720' <%= appname%>

# scrape issues

