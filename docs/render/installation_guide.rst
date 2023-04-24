.. important::
   使用前请确保本地Python环境和PIP可用,传输功能是独立的,
   完整使用分析、上传、下载自动化流程，除了需要所渲染软件的分析包，还需要安装：
   `rayvision_log`、`rayvision_api`、`rayvision_utils`、`rayvision_sync`。

安装指南
=========

1. 软件分析包
--------------

SDK Maya:
    - rayvision_maya

SDK Houdini:
    - rayvision_houdini

SDK Clarisse:
    - rayvision_clarisse

SDK 3ds Max:
    - rayvision_max

SDK C4D
    - rayvision_c4d

SDK Blender
    - rayvision_blender

2. 其它包
----------
上传下载工具包:
    - rayvision_sync

日志管理工具包：
    - rayvision_log

接口/登陆校验等管理工具包：
    - rayvision_api

公共方法管理工具包:
    - rayvision_utils



3. 安装方法
-----------------

**方法一(推荐):**


- 从Python官方pypi下载(以maya为例)

   ``pip install rayvision_maya``


**方法二:**

   - 直接从GitHub下载源码(以maya为例):

   ``git clone https://github.com/renderbus/rayvision_maya.git``

