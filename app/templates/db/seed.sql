CREATE TABLE <%= appname%>s_cache (
  `id`            INT(11) NOT NULL AUTO_INCREMENT,
  `url`           TEXT,
  `thumbnail_url` TEXT,
  `url_from`      TEXT,
  `created_at`    DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE <%= appname%>s_history (
  `id`         INT(11) NOT NULL AUTO_INCREMENT,
  `url`        TEXT,
  `created_at` DATETIME,
  PRIMARY KEY (`id`)
)
  DEFAULT CHARSET = utf8mb4;

  CREATE TABLE <%= appname%>s_page (
    `id`         INT(11) NOT NULL AUTO_INCREMENT,
    `url_from`   TEXT,
    `page_index` INT(11),
    `created_at` DATETIME,
    PRIMARY KEY (`id`)
  )
    DEFAULT CHARSET = utf8mb4;
