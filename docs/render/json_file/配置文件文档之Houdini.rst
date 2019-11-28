.. _header-n0:

Houdini 配置文件文档
====================

   分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json,
   upload.json, tips.json中，以便进一步解析和处理

.. _header-n6:

1.task.json解析
---------------

   说明: 存放场景分析结果、渲染设置等信息

**task.json样例**

.. code:: json

   {
       "scene_info_render": {
           "rop_node": [
               {
                   "node": "/out/mantra1", 
                   "frames": "1-10[1]", 
                   "option": "-1", 
                   "render": "1"
               }
           ], 
           "geo_node": []
       }, 
       "task_info": {
           "is_layer_rendering": "1", 
           "cg_id": "2004", 
           "ram": "64", 
           "os_name": "1", 
           "render_layer_type": "0", 
           "is_distribute_render": "0", 
           "input_cg_file": "D:/gitlab/renderSDK/scenes/houdini_test/sphere.hip", 
           "job_stop_time": "28800", 
           "user_id": "10000031", 
           "pre_frames": "000", 
           "platform": "2", 
           "is_picture": "0", 
           "project_id": "3316", 
           "channel": "4", 
           "tiles_type": "block", 
           "tiles": "1", 
           "project_name": "dasdd", 
           "distribute_render_node": "3", 
           "frames_per_task": "1", 
           "stop_after_test": "2", 
           "input_project_path": "", 
           "task_id": "440149", 
           "task_stop_time": "86400", 
           "time_out": "12"
       },  
       "software_config": {
           "cg_version": "16.5.268", 
           "cg_name": "Houdini", 
           "plugins": {}
       }
   }

**task.json参数解析**

===================== ====== ============================================== ======================================================
参数                  类型   说明                                           样例
===================== ====== ============================================== ======================================================
software_config       object 渲染环境（软件类型、版本和用到的插件等）       `见software_config对象解析 <配置文件文档之Houdini.html#header-n341>`__
task_info             object 渲染设置（优先帧、渲染帧数、超时时间等）       `见task_info对象解析 <配置文件文档之Houdini.html#header-n340>`__
scene_info_render     object 场景的分析结果（场景中的渲染节点、输出路径等） `见scene_info_render对象解析 <配置文件文档之Houdini.html#header-n339>`__
===================== ====== ============================================== ======================================================

.. _header-n341:

**software_config对象解析**

========== ====== ============================================ ==========
参数       类型   说明                                         样例
========== ====== ============================================ ==========
cg_name    string 软件名称                                     "Houdini"
cg_version string 软件版本                                     "16.5.268"
plugins    object 插件对象。<br>key为插件名称，value为插件版本 {}
========== ====== ============================================ ==========

.. _header-n340:

**task_info对象解析**

========================== ====== ======================================================================================== =================================================================================================================
参数                       类型   说明                                                                                     样例
========================== ====== ======================================================================================== =================================================================================================================
is_layer_rendering         string maya是否开启分层。"0":关闭, "1":开启                                    "1"
cg_id                      string 渲染软件id."2004": Houdini                                                               "2004"
ram                        string 内存要求。64/128                                                                         "64"
os_name                    string 渲染操作系统, "0":Linux; "1": Windows                                                    "0"
render_layer_type          string 渲染层方式选择。"0"：renderlayer方式, "1"：rendersetup方式                       "0"
is_distribute_render       string 是否开启分布式渲染。"0":关闭, "1":开启                                           "0"
input_cg_file              string 渲染场景本地路径
job_stop_time              string 小任务超时停止, 单位秒                                                                   "28800"
user_id                    string 用户ID                                                                                  
pre_frames                 string 优先渲染                                                                                 "000:1,3-4[1]" 表示：<br>优先渲染首帧：否<br>优先渲染中间帧：否<br>优先渲染末帧：否<br>优先渲染自定义帧：1,3-4[1]
platform                   string 提交平台                                                                                 "2"
is_picture                 string 是否效果图                                                                               "0"
project_id                 string 项目id                                                                                  
channel                    string 提交方式。"4":API/SDK提交                                                                "4"
tiles_type                 string "block(分块),strip(分条)"                                                                "block"
tiles                      string 分块数量，大于1就分块或者分条，等于1 就是单机                                            "1"
project_name               string 项目名称                                                                                 "test"
distribute_render_node     string 分布式渲染机器数                                                                         "3"
frames_per_task            string 一机渲多帧的帧数量                                                                       "1"
stop_after_test            string 优先渲染完成后是否暂停任务. "1":优先渲染完成后暂停任务, "2".优先渲染完成后不暂停任务
input_project_path         string 项目路径，如用户未设置传空字符串
task_id                    string 任务号                                                                                  
task_stop_time             string 大任务超时停止 单位秒                                                                    "86400"
time_out                   string 超时时间 单位秒                                                                          "43200"
========================== ====== ======================================================================================== =================================================================================================================

.. _header-n339:

**scene_info_render对象解析**

======== ====== ======== ====
参数     类型   说明     样例
======== ====== ======== ====
rop_node object 渲染节点
geo_node object 解算节点
======== ====== ======== ====

**scene_info_render.rop_node和geo_node对象解析**

====== ====== ======================================================================== ==============
参数   类型   说明                                                                     样例
====== ====== ======================================================================== ==============
node   string rop / geo 节点全路径名                                                   "/out/mantra1"
frames string rop / 帧数范围                                                           "1-10[1]"
option string rop / 渲染/解算标识。-1为渲染，其余数值为结算的机器数量                  "-1"
render string rop / 是否激活渲染，1 为渲染（解算）该节点，0 则该节点不参与渲染（解算） "1"
====== ====== ======================================================================== ==============

.. _header-n234:

2.upload.json解析
-----------------

   说明: 存放需要上传的资产路径信息

**upload.json样例**

.. code:: json

   {
     "asset": [
       {
         "local": "D:/gitlab/renderSDK/scenes/houdini_test/sphere.hip", 
         "server": "/D/gitlab/renderSDK/scenes/houdini_test/sphere.hip"
       }
     ]
   }

**upload.json参数解析**

===== ====== ====================== ============================
参数  类型   说明                   样例
===== ====== ====================== ============================
asset object 需要上传的资产路径信息 `见asset对象解析 <配置文件文档之Houdini.html#header-n338>`__
===== ====== ====================== ============================

.. _header-n338:

**asset对象解析**

====== ====== ===================================== ====================================================
参数   类型   说明                                  样例
====== ====== ===================================== ====================================================
local  string 资产本地路径                          "D:\\gitlab\\renderSDK\\scenes\\houdini_test\\sphere.hip"
server string 服务器端相对路径，一般与local保持一致 "/D/gitlab/renderSDK/scenes/houdini_test/sphere.hip"
====== ====== ===================================== ====================================================

.. _header-n272:

3.tips.json解析
---------------

说明: 存放分析出的错误、警告信息

.. code:: json

   {}
