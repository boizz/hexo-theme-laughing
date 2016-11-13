# Laughing theme for hexo

简单轻量的[hexo](https://hexo.io)主题。

## 外观

响应式布局，宽松设计，还原最佳阅读体验。

![电脑界面](http://callfiles.ccwebsite.com/hexo-theme-laughing/pc.jpg)

![手机界面](http://callfiles.ccwebsite.com/hexo-theme-laughing/phone.jpg)

## 功能

 - 10分钟快速配置
 - 支持多说评论，自由开启评论，主题定制样式
 - 简易二次开发

## 配置文档

主题的配置都放在了 `_config.yml` 文件里面。

### 页面和文章背景

``` yaml
## 页面背景
page_background: /default_images/page_background.jpg

## 文章背景
post_background: /default_images/post_background.jpg
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