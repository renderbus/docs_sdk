SDK入门教程
============

.. _header-n4:

一、用户传递的配置参数
----------------------

.. code:: python

   render_para = {
           "domain": "task.renderbus.com",  # 用戶不需要修改
           "platform": "2",  # 平台号
           "access_id": "K2lbvJSlPScStv72niHGXZtbQYc5Fp6d",  # 用户自行修改(必填)
           "access_key": "6b4b6eab841772113113b61c79dbe40e",  # 用户自行修改(必填)
           "local_os": 'windows',
           "workspace": "c:/workspace",  # 本地保存根目录自动创建(用户可自行修改,全英文路径)
           "render_software": "Houdini",  # CG软件（Maya, Houdini, Katana, Clarisse）
           "software_version": "17.5.293",  # 注意CG版本的形式
           "project_name": "Project1",
           "plugin_config": {}  # CG插件，无插件则为{}
      }
   cg_file = r"E:\copy\test02.hip"

**参数:**

================ ==== ======== ================================================================================= ====================
参数             类型 是否必须 备注                                                                              样例
================ ==== ======== ================================================================================= ====================
domain           str  是       域名，如：task.renderbus.com，不加http、https                                     task.renderbus.com
platform         str  是       平台ID                                                                            2
access_id        str  是       授权id，用于标识API调用者身份
access_key       str  是       授权密钥，用于加密签名字符串和服务器端验证签名字符串
workspace        str  是       设置SDK工作目录（存放配置文件、日志文件等），默认为SDK程序所在路径的workspace目录 c:/workspace
local_os         str  是       平台名, 只支持 “window” / "linux"                                                 windows
render_software  str  是       软件名，常用的有"Maya", "Clarisse", "Houdini"                                     Houdini
software_version str  是       软件版本                                                                          17.5.293
project_name     str  否       项目名，非必须可以为空                                                            Project1
plugin_config    dict 否       插件名，非必须没有则为空                                                          {"fumefx":"4.0.5"}
cg_file          str  是       需要进行渲染作业的资源文件                                                        E:\\copy\\test02.hip
================ ==== ======== ================================================================================= ====================

--------------

.. _header-n83:

二.登陆
--------

.. code:: python

   api = RayvisionAPI(access_id=render_para['access_id'],
                      access_key=render_para['access_key'],
                      domain=render_para['domain'],
                      platform=render_para['platform'])

**返回：**
RayvisionAPI的对象，可通过此对象调用其他的方法

--------------

.. _header-n87:

三.设置渲染环境（插件配置、所属项目，软件信息校验）
----------------------------------------------------------------

.. code:: python

   task = RayvisionTask(cg_file=cg_file, **render_para)

**返回：**

RayvisionAPI的对象，可通过此对象调用其他的方法

--------------

.. _header-n92:

四.分析与校验
--------------

-  使用SDK自动分析并校验数据

   .. code:: python

      RayvisionAnalyse.execute(task)
      RayvisionCheck(task).execute(task.task_info, task.upload_info)

-  用户使用自己的分析文件并校验数据

   自行分析格式样例请参考 `分析文件详细配置 <para_configration.html>`__

   .. code:: python

      task_info = {} 
      upload_info = {}
      RayvisionCheck(task).execute(task_info, upload_info)

--------------

.. _header-n102:

五.上传
---------

-  实例化传输类

.. code:: python

   transfer_info = {
       'config_bid': api.user_info['config_bid'],
       'input_bid': api.user_info['input_bid'],
       "output_bid": api.user_info["output_bid"],
       "domain": render_para['domain'],
       "platform": render_para['platform'],
       "local_os": render_para['local_os'],
       "user_id": api.user_info['user_id'],
       "local_path": r"C:\workspace",  # 下载资源本地保存路径
   }

   # start transfer(传输)
   trans = RayvisionTransfer(**transfer_info)

传输类参数

========== ==== ==================== ==================================== ==================
参数       类型 是否必须             备注                                 样例
========== ==== ==================== ==================================== ==================
config_bid str  是                   传输配置ID                           30201
input_bid  str  是                   存储ID                               10206
output_bid str  是                   下载传输ID                           20201
domain     str  是                   域名                                 task.renderbus.com
platform   str  是                   平台ID                               2
local_os   str  是                   平台名, 只支持 “window” / "linux"    windows
user_id    str  是                   用户账号ID                           100150764
local_path str  上传可为空，下载必须 下载文件保存路径，如果只上传可以为空 C:\\workspace
========== ==== ==================== ==================================== ==================

-  **开始上传**

.. code:: python

   resource_config_file = {
       "task_json_path": task.task_json_path,
       "tips_json_path": task.tips_json_path,
       "asset_json_path": task.asset_json_path,
       "upload_json_path": task.upload_json_path,
   }

   upload = RayvisionUpload(trans)
   upload.upload(task_id=task.task_id, **resource_config_file)

上传参数

==================== ==== ======== =================== =====================================
参数                 类型 是否必须    备注                   样例
==================== ==== ======== =================== =====================================
    task_id          str  是       任务ID号            10837135
    task_json_path   str  是       task.json绝对路径   C:\\workspace\work\\9458292\\task.json
    tips_json_path   str  是       tips.json绝对路径   C:\\workspace\work\9458292\\tips.json
    asset_json_path  str  是       asset.json绝对路径  C:\\workspace\work\\9458292\\asset.json
    upload_json_path str  是       upload.json绝对路径 C:\\workspace\work\\9458292\\upload.json
==================== ==== ======== =================== =====================================

--------------

.. _header-n206:

六.提交任务
-----------

.. code:: python

   task_id = int(task.task_id)
   result = api.submit(task_id)

--------------

.. _header-n209:

七.下载
--------

.. code:: python

   manage_task = RayvisionManageTask(api.query)

   trans.manage_task = manage_task


   download = RayvisionDownload(trans)

   # SDK提供了2种自动下载的方式

   # 1.只要有任何帧渲染结束，则立即自动下载出图文件到本地，直到作业完成。

   download.auto_download([task_id])

   # 2.所有都完成后，开始自动下载所有出图文件到本地。

   download.auto_download_after_task_completed([task_id])
