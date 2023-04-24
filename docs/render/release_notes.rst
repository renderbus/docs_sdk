发行说明(Release notes)
=======================

0.1.0 (2019-11-10):
--------------------

    - 初版

1.1.0 (2020-04-06):
--------------------

重大更新:
    - rayvision_api 更新了部分传递的参数, 检查功能重构
    - rayvision_clarisse 增加独立的本地分析功能,Clarissa分析支持python2
    - rayvision_maya 增加独立的本地分析功能
    - rayvision_houdini 增加独立的本地分析功能
    - rayvision_sync 支持分别上传json配置和资源文件，下载支持自定义服务器文件路径,支持是否使用本地对比功能

1.2 (2020-05-21):
--------------------
    - 修复部分描述错误
    - 增加上传json文件接口和使用方法说明

1.3 (2020-09-10):
--------------------
   - 优化部分描述
   - 更新API接口为API2.0

1.4 (2020-11-12):
-----------------------
   rayvision_log(tag 1.1.2):
     - 修复部分python2版本日志模块兼容问题

1.5 (2020-11-24):
-----------------------------
   rayvision_sync(tag 2.0):
     - 更新传输aspera引擎
     - 支持raysync引擎传输

1.6 :
---------------------------
   rayvision_api(tag 2.4.5):
     - 增加新的获取项目名接口(get_list);
     - 优化主子账号获取项目名问题;

1.7 :
----------------------------------
   rayvision_houdini (tag 1.3.0)
      - 更新Houdini分析脚本;
      - 移除houdini分析本地sql数据库对比功能;
      - 其它兼容性的优化;

   rayvision_max (tag 1.1.0)
      - 更新3ds Max分析脚本;

   rayvision_maya (tag 1.3.0)
      - 更新Maya分析脚本;

   rayvision_clarisse (tag 1.2.0)
      - 更新Clarissa分析脚本;

   rayvision_sync (tag 2.20)
      - 去除普通多线程上传，保留和修复线程池上传BUG;
      - 其它传输逻辑优化;