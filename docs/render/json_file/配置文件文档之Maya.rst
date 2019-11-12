.. _header-n0:

Maya 配置文件文档
=================

   分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json,
   upload.json, tips.json中，以便进一步解析和处理

.. _header-n6:

1.task.json解析
---------------

   说明: 存放场景分析结果、渲染设置等信息

**task.json示例**

.. code:: json

   {
       "scene_info_render": {
           "defaultRenderLayer": {
               "renderable": "1", 
               "env": {}, 
               "is_default_camera": "1", 
               "option": "", 
               "common": {
                   "image_format": "exr", 
                   "end": "10", 
                   "width": "960", 
                   "image_file_prefix": "", 
                   "all_camera": [
                       "stereoCameraRightShape", 
                       "stereoCameraLeftShape", 
                       "stereoCameraCenterCamShape", 
                       "perspShape", 
                       "cameraShape2", 
                       "cameraShape1"
                   ], 
                   "render_camera": [
                       "cameraShape1"
                   ], 
                   "start": "1", 
                   "animation": "False", 
                   "renderer": "mentalRay", 
                   "frames": "1-10[1]", 
                   "height": "540", 
                   "renumber_frames": "False", 
                   "by_frame": "1"
               }
           }, 
           "mut": {
               "renderable": "1", 
               "is_default_camera": "1", 
               "option": "", 
               "common": {
                   "image_format": "exr", 
                   "end": "10", 
                   "width": "960", 
                   "image_file_prefix": "", 
                   "all_camera": [
                       "stereoCameraRightShape", 
                       "stereoCameraLeftShape", 
                       "stereoCameraCenterCamShape", 
                       "perspShape", 
                       "cameraShape2", 
                       "cameraShape1"
                   ], 
                   "render_camera": [
                       "cameraShape1", 
                       "stereoCameraLeftShape"
                   ], 
                   "start": "1", 
                   "animation": "False", 
                   "renderer": "mentalRay", 
                   "frames": "1-10[1]", 
                   "height": "540", 
                   "renumber_frames": "False", 
                   "by_frame": "1"
               }
           }
       }, 
       "task_info": {
           "is_layer_rendering": "1", 
           "cg_id": "2000", 
           "ram": "64", 
           "os_name": "1", 
           "render_layer_type": "0", 
           "is_distribute_render": "0", 
           "input_cg_file": "D:/chensr/scene/maya2016_multi_layers_cameras.ma", 
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
           "task_id": "439800", 
           "task_stop_time": "86400", 
           "time_out": "12"
       }, 
       "software_config": {
           "cg_version": "2016", 
           "cg_name": "Maya", 
           "plugins": {}
       }
   }

**task.json参数解析**

===================== ====== ============================================== ======================================================
参数                  类型   说明                                           示例
===================== ====== ============================================== ======================================================
software_config       object 渲染环境（软件类型、版本和用到的插件等）       `见software_config对象解析 <配置文件文档之Maya.html#header-n339>`_
task_info             object 渲染设置（优先帧、渲染帧数、超时时间等）       `见task_info对象解析 <配置文件文档之Maya.html#header-n338>`_
scene_info_render     object 场景的分析结果（场景中的渲染节点、输出路径等） `见scene_info_render对象解析 <配置文件文档之Maya.html#header-n337>`_
===================== ====== ============================================== ======================================================

.. _header-n339:

**software_config对象解析**

========== ====== ============================================ ======
参数       类型   说明                                         示例
========== ====== ============================================ ======
cg_name    string 软件名称                                     "Maya"
cg_version string 软件版本                                     "2016"
plugins    object 插件对象。key为插件名称，value为插件版本 {}
========== ====== ============================================ ======

.. _header-n338:

**task_info对象解析**

========================== ====== ======================================================================================== =================================================================================================================
参数                       类型   说明                                                                                     示例
========================== ====== ======================================================================================== =================================================================================================================
is_layer_rendering         string maya是否开启分层。"0":关闭, "1":开启                                      "1"
cg_id                      string 渲染软件id."2000": Maya                                                                  "2000"
ram                        string 内存要求。64/128                                                                         "64"
os_name                    string 渲染操作系统, "0":Linux; "1": Windows                                                    "0"
render_layer_type          string 渲染层方式选择。"0"：renderlayer方式"1"：rendersetup方式                       "0"
is_distribute_render       string 是否开启分布式渲染。"0":关闭, "1":开启                                           "0"
input_cg_file              string 渲染场景本地路径
job_stop_time              string 小任务超时停止, 单位秒                                                                   "28800"
user_id                    string 用户ID
pre_frames                 string 优先渲染                                                                                 "000:1,3-4[1]" 表示：优先渲染首帧：否优先渲染中间帧：否优先渲染末帧：否优先渲染自定义帧：1,3-4[1]
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

.. _header-n337:

**scene_info_render对象解析**

===== ====== ====== ==================================================================
参数  类型   说明   示例
===== ====== ====== ==================================================================
layer object 层信息 `见scene_info_render.layer对象解析 <配置文件文档之Maya.html#header-n336>`_
===== ====== ====== ==================================================================

.. _header-n336:

**scene_info_render.layer对象解析**

===================== ====== ============================= ================================================================================
参数                  类型   说明                          示例
===================== ====== ============================= ================================================================================
renderable            string 渲染层开关                    "1"
env                   object                               {}
is_default_camera     string 是否使用默认相机，默认值为‘1’ "1"
option                string 渲染器对应信息                ""
common                object 场景普通信息                  `见scene_info_render.layer.common对象解析 <配置文件文档之Maya.html#header-n335>`_
===================== ====== ============================= ================================================================================

.. _header-n335:

**scene_info_render.layer.common对象解析**

===================== ====== ==================== ==========================================
参数                  类型   说明                 示例
===================== ====== ==================== ==========================================
image_format          string 渲染元素输出文件类型 "jpg"
end                   string 结束帧               "100"
width                 string 分辨率，宽           "1920"
image_file_prefix     string 输出文件名设置，"/"  ""
all_camera            array  所有相机列表         ["stereoCameraRightShape", "cameraShape1"]
render_camera         array  待渲染相机列表       ["stereoCameraRightShape"]
start                 string 起始帧               "1"
animation             string 动画开关             "1"
renderer              string 渲染器名称           “arnold“
frames                string 渲染帧               "1-10[1]"
height                string 分辨率，高           "1080"
renumber_frames       string 帧覆盖               "1"
by_frame              string 帧间隔               "1"
===================== ====== ==================== ==========================================

.. _header-n307:

2.upload.json解析
-----------------

   说明: 存放需要上传的资产路径信息

**upload.json示例**

.. code:: json

   {
     "asset": [
       {
         "local": "D:/chensr/scene/maya2016_multi_layers_cameras.ma", 
         "server": "/D/chensr/scene/maya2016_multi_layers_cameras.ma"
       }
     ]
   }

**upload.json参数解析**

===== ====== ====================== ============================
参数  类型   说明                   示例
===== ====== ====================== ============================
asset object 需要上传的资产路径信息 `见asset对象解析 <配置文件文档之Maya.html#header-n334>`_
===== ====== ====================== ============================

.. _header-n334:

**asset对象解析**

====== ====== ===================================== ====================================================
参数   类型   说明                                  示例
====== ====== ===================================== ====================================================
local  string 资产本地路径                          "D:/chensr/scene/maya2016*multi*_layers_cameras.ma"
server string 服务器端相对路径，一般与local保持一致 "/D/chensr/scene/maya2016*multi*_layers_cameras.ma"
====== ====== ===================================== ====================================================

.. _header-n345:

3.tips.json解析
---------------

   说明: 存放分析出的错误、警告信息

.. code:: json

   {}
