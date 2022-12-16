#!/usr/bin/env sh
###
 # @Description: 
 # @Version: 
 # @Autor: houyan
 # @Date: 2022-12-16 10:30:00
 # @LastEditors: houyan
 # @LastEditTime: 2022-12-16 10:36:51
### 

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f https://github.com<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:houy910/houy910.github.io.git master
