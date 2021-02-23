# TELYNET API REST
## _Angular Technical Test_

CRUD application developed with Angular version 9, this application has a REST API developed in NodeJs and MySQL database.

###### Installation

Create an environment variables file on root (.env)
```
DB_HOST = localhost
DB_USER = root
DB_PWD = root
DB_NAME = dev.test
DB_PORT = 4306
```

NPM install and start
```
npm i
npm run dev
```

for production:
```
npm run start
```

MySQL table
```
DROP TABLE IF EXISTS `addresses`;
CREATE TABLE `addresses` (
  `code` char(12) NOT NULL,
  `name` char(200) DEFAULT NULL,
  `address` char(200) DEFAULT NULL,
  `population` char(100) DEFAULT NULL,
  `cp` char(50) DEFAULT NULL,
  `city` char(100) DEFAULT NULL,
  `telephone` char(20) DEFAULT NULL,
  `email` char(100) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

APP Link: [here](https://telynet.herokuapp.com/)
GIT HUB repo: [here](https://github.com/alexanderanhe/telynet)