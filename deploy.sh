#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run docs:build
npx vuepress build .

# 进入生成的文件夹
#cd docs/.vuepress/dist
cd .vuepress/dist
# 如果是发布到自定义域名
echo 'dev.prodev.cn' > CNAME

#我加的命令
eval `ssh-agent`
ssh-add ~/.ssh/id_rsa_github


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wecms/icmsite.git master:gh-pages

cd -