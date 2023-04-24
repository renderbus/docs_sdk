.. _header-n0:

初窥SDK
========

.. _header-n2:

概览
----

.. code:: 

   我们开放一个简单的Python渲染SDK来更方便地使用我们的云渲染服务；
   这个官方渲染SDK由 RENDERBUS 的 RD和TD 团队一起维护开发；
   这个渲染SDK在 python2.7 and python3.6 下测试通过;

.. _header-n5:

为什么要使用渲染SDK
-------------------

.. code:: 

   1. 自动化。SDK将使用云渲染服务的流程（分析场景、上传资产、渲染、下载）全部自动化。且可嵌入到客户自身的调度中（如DeadLine、Qube等）
   2. 开源。用户可自定义开发或提交开发建议
   3. 跨版本，支持python2和python3
   4. 跨平台，支持windows和linux(其中rayvision_sync只支持Windows和centos7及以上)
   5. 安全性高。使用动态签名算法认证（HmacSHA256 + Base64 + UTC时间戳限时认证 + 随机数防止重放攻击），更安全
   6. 提供多种使用方式。支持本地分析和不本地分析
   7. 独立性好。将API与业务逻辑独立开来，易扩展
   8. 有详细文档

.. _header-n8:

支持的软件
----------

支持独立的分析:

-  Maya

-  Houdini

-  Clarisse

-  3ds Max

- C4D

- Blender


无独立的分析:

- V-Ray Standalone

- Arnorld Standalone


.. note::
   如果客户自行分析场景，理论上可以支所有瑞云平台客户端和网页端支持的渲染软件。

.. _header-n19:

准备工作
--------

1. 您需要一个 `RENDERBUS <https://task.renderbus.com>`__ 账号

2. 您还需要在 `RENDERBUS
   开发者中心 <https://task.renderbus.com/user/developer>`__
   申请使用渲染SDK，并获取AccessID和AccessKey

.. _header-n26:

安装相应模块
------------

详细的安装方法参考 `安装指南 <installation_guide.html>`_

.. _header-n29:

开始使用
--------
    参考 `SDK入门教程 <SDK_tutorial.html>`_

.. _header-n33:

参数设置请参考
--------------

-  `详细参数配置 <para_configration.html>`_

.. _header-n37:

更多
----

-  `常见全流程样例 <demo/index.html>`_
