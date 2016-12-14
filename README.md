# Laughing theme for hexo
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/BoizZ/hexo-theme-laughing)
[![Hexo](https://img.shields.io/badge/hexo-3.2.0-blue.svg)](https://github.com/hexojs/hexo)
[![Build Status](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BoizZ/hexo-theme-laughing/pulls)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BoizZ/hexo-theme-laughing/master/LICENSE)

简单轻量的[hexo](https://hexo.io)主题。

Demo: [lalala.lol](http://lalala.lol)

## 外观

响应式布局，宽松设计，还原最佳阅读体验。

![电脑界面](http://callfiles.ccwebsite.com/hexo-theme-laughing/pc_1200.jpg)

![手机界面](http://callfiles.ccwebsite.com/hexo-theme-laughing/phone_1200.jpg)

## 功能

 - 10分钟快速配置
 - 支持多说评论，自由开启评论，主题定制样式
 - 简易二次开发

## 安装

 1. 安装[hexo-render-pug](https://github.com/maxknee/hexo-render-pug)

 ``` shell
 npm install hexo-renderer-pug --save
 ```

 2. 拷贝主题到`themes`目录

 3. 修改`_config.yml`文件

  ``` yaml
  theme: hexo-theme-laughing
  ```

## 配置文档

主题的配置都放在了 `_config.yml` 文件里面。

### 网站图标

``` yaml
favicon: /favicon.ico
```

### SEO

站点标题、副标题、描述沿用站点的配置。

``` yaml
## 关键字
keywords: Hexo, Gruntjs, Nodejs, Reactjs, Vuejs
```

### 页头

``` yaml
## 页面背景
page_background: /default_images/page_background.jpg

## 文章背景
post_background: /default_images/post_background.jpg

## 标题占位字：无标题类型文章的标题占位字
title_plancehold: '随笔'
```

### 作者信息

作者的名字沿用站点的配置。

``` yaml
## head：作者头像
## signature：作者签名
author:
  head: /default_images/author_head.gif
  signature: Only when you plant the flowers can you really smell their fragrance.
```

### 社交信息

主题内置的社交图标目前有：`facebook`, `twitter`, `weibo`, `wechat`, `github`, `stackoverflow`, `linkin`, `email`, `segmentfault`, `flickr`

如需新增请在Issues里面提出

``` yaml
## name：名称
## icon：图标（请使用配置文件里面给出的图标）
## link：指向当前社交账号的链接
social:
  - name: GitHub
    icon: github
    link: http://github.com/BoizZ
```

### 多说

多说是自由开启的，默认开启，如果不需要则在配置文件里面关闭即可。

``` yaml
## enable：是否开启多说（true：开启，false：关闭）
## siteName：多说账号种填写的网站名称
duoshuo:
  enable: true
  siteName: ueibo
```

### 版权

``` yaml
## record: 备案名称（若无则填写 false）
## hexo: 是否显示“POWER BY HEXO”
## laughing：是否显示“THEME BY LAUGHING”
copyright:
  record: false
  hexo: true
  laughing: true
```

## 二次开发

Laughing主题遵循简易开发模式，以文件层级及命名细分模块，二次开发比较简单。

### 模板引擎

Laughing主题使用`pug`作为模板引擎，在开发前请确保已经安装了[hexo-render-pug](https://github.com/maxknee/hexo-render-pug)插件，如未安装，请在`Hexo`程序根目录运行以下命令进行安装：

```
npm install hexo-renderer-pug --save
```

### 安装Grunt

Laughing主题使用`sass`作为预编译样式语言，使用`grunt`监听文件变化并编译成css。当然，`sass`是基于`ruby`的，需要在电脑上安装`ruby`；

进入主题目录，运行以下命令安装`grunt`以及其他依赖：

```
npm install
```

### 参考

 - [GRUNT](http://gruntjs.com/)
 - [PUG](https://pugjs.org/api/getting-started.html)
 - [SASS](http://sass-lang.com/guide)
 - [RUBY](https://www.ruby-lang.org)
