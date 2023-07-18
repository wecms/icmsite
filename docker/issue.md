# Docker Issue

## Vue2 父子组件响应式传值

docker 启动 MaraiaDB时报错：

```
mariadb /usr/local/bin/docker-entrypoint.sh: line 105: mysqld: command not found
[ERROR] [Entrypoint]: mariadbd failed while attempting to check config
```

### 解决

删除了以下docker-compose代码正常启动了：

`entrypoint: ["bash", "-c", "set -a; . /.env; set +a; /usr/local/bin/docker-entrypoint.sh mysqld;"]`

```yaml
version: '3.5'
services:
  mysql:
    image: mariadb
    restart: always
    container_name: local-mariadb
    hostname: local-mariadb
    networks:
      default:
        ipv4_address: 172.110.0.5
    expose:
      - "3306:3306"
    ports:
      - "13306:3306"
    volumes:
      - /etc/localtime:/etc/localtime
      - ./data/:/var/lib/mysql/
      - ./conf/:/etc/mysql/
      - .env:/.env
    #entrypoint: ["bash", "-c", "set -a; . /.env; set +a; /usr/local/bin/docker-entrypoint.sh mysqld;"]
    environment:
      TIME_ZONE: ${TIME_ZONE}
      MYSQL_USER: "root"
      MARIADB_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}

networks:
  default:
    name: local-go-php
    external: true
```

可能是MaraiaDB Docker镜像更新了？？？

### 参考

1. [mysql镜像的docker-entrypoint浅析_docker-entrypoint-initdb.d_请接受我的情意的博客-CSDN博客](https://blog.csdn.net/mearsedy/article/details/103041286)
2. [mariadb - Official Image | Docker Hub](https://hub.docker.com/_/mariadb)
3. [mysqld failed while attempting to check config解决方法_慢慢√的博客-CSDN博客](https://blog.csdn.net/xywxhzsjhh/article/details/116604238)
4. [Docker ERROR: mysqld failed while attempting to check config_「已注销」的博客-CSDN博客](https://blog.csdn.net/zouguo1211/article/details/84960898)
5. [docker启动mysql因为配置文件报错导致启动失败_hecr_mingong的博客-CSDN博客](https://blog.csdn.net/hecr_mingong/article/details/107622184)
6. [CentOS中Docker的MySQL更改配置后重启不了的两种解决方式_[error] [entrypoint]: mariadbd failed while attemp_全栈开发Dream的博客-CSDN博客](https://blog.csdn.net/DevelopmentStack/article/details/116858555)

