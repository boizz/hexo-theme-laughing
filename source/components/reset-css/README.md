# reset-css
这个样式表写给还在为前端开发中各个浏览器样式不统一问题纠结的同学，但不包含Hack。
大家可以把样式表下载到本地使用，也可以使用CDN调取。

### 文件目录

``` bash
.
├── dist # 1.2.2 版本
├── public # 2.0.0 版本
│   ├── main # 通用重置样式表：包含IE、MacOS Safari 及 手机重置样式表 的所有特性
│   ├── mobile # 手机重置样式表： 使用无衬线字体、去除IOS默认表单样式、去除a及表单点击时的蓝边及灰色背景
│   └── native # 原生应用重置样式表： 禁止长按链接与图片弹出菜单、禁止选中文字，及 手机重置样式表 的所有特性
├── sass # 2.0.0 的 sass 目录
├── .gitignore
├── gruntfile.js
├── package.json
└── README.md
```