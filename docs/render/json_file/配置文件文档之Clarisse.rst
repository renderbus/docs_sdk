.. _header-n0:

Clarisse 配置文件文档
=====================

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
           "image_node": [
               {
                   "frames": "0-50[1]",
                   "renderable": "0",
                   "output": "D:\\temp\\cam02",
                   "format": "exr16",
                   "LUT": "linear",
                   "save_to_disk": "1",
                   "name": "project://scene/cam02",
                   "layers": [
                       {
                           "frames": "0-50[1]",
                           "renderable": "1",
                           "output": "D:\\temp\\cam02_layer02",
                           "format": "exr16",
                           "enable_deep_output": "1",
                           "save_to_disk": "1",
                           "enable_deep_output_path": "D:\\temp\\cam02_layer02_deep",
                           "name": "project://scene/cam02.cam02_layer02"
                       }
                   ]
               }
           ]
       },
       "software_config":{
           "plugins":{},
           "cg_version":"clarisse_ifx_4.0_sp3",
           "cg_name":"Clarisse"
       },
       "task_info":{
           "task_stop_time":"259200",
           "frames_per_task":"1",
           "channel":"4",
           "task_id":"11022523",
           "project_name":"Project1",
           "platform":"2",
           "tiles":"1",
           "is_picture":"0",
           "project_id":"200953",
           "job_stop_time":"86400",
           "distribute_render_node":"3",
           "stop_after_test":"2",
           "clone_original_id":"",
           "ram":"64",
           "render_layer_type":"0",
           "test_frames":"000",
           "graphics_cards_num":"2",
           "edit_name":"",
           "pre_frames":"000",
           "input_project_path":"",
           "is_layer_rendering":"1",
           "is_distribute_render":"0",
           "time_out":"43200",
           "tiles_type":"block",
           "user_id":"100150764",
           "cg_id":"2013",
           "input_cg_file":"E:/copy/DHGB_sc05_zhuta_610-1570_v0102.project",
           "os_name":"1"
       },
       "scene_info":{
           "image_node": [
               {
                   "frames": "0-50[1]",
                   "renderable": "0",
                   "output": "D:\\temp\\cam02",
                   "format": "exr16",
                   "LUT": "linear",
                   "save_to_disk": "1",
                   "name": "project://scene/cam02",
                   "layers": [
                       {
                           "frames": "0-50[1]",
                           "renderable": "1",
                           "output": "D:\\temp\\cam02_layer02",
                           "format": "exr16",
                           "enable_deep_output": "1",
                           "save_to_disk": "1",
                           "enable_deep_output_path": "D:\\temp\\cam02_layer02_deep",
                           "name": "project://scene/cam02.cam02_layer02"
                       }
                   ]
               }
           ]
       }
   }

**task.json参数解析**

===================== ====== ============================================== =================================================================
参数                  类型   说明                                           示例
===================== ====== ============================================== =================================================================
software_config       object 渲染环境（软件类型、版本和用到的插件等）       `见software_config对象解析 <配置文件文档之Clarisse.html#header-n297>`__
task_info             object 渲染设置（优先帧、渲染帧数、超时时间等）       `见task_info对象解析 <配置文件文档之Clarisse.html#header-n296>`__
scene_info_render     object 场景的分析结果（场景中的渲染节点、输出路径等） `见scene_info_render对象解析 <配置文件文档之Clarisse.html#header-n295>`__
===================== ====== ============================================== =================================================================

.. _header-n297:

**software_config对象解析**

========== ====== ============================================ ========================
参数       类型   说明                                         示例
========== ====== ============================================ ========================
cg_name    string 软件名称                                     "Clarisse"
cg_version string 软件版本                                     "clarisse_ifx_4.0_sp3"
plugins    object 插件对象。key为插件名称，value为插件版本         {}
========== ====== ============================================ ========================

.. _header-n296:

**task_info对象部分解析**

========================== ====== ======================================================================================== =================================================================================================================
参数                       类型   说明                                                                                     示例
========================== ====== ======================================================================================== =================================================================================================================
is_layer_rendering         string maya是否开启分层。"0":关闭"1":开启                                                            "1"
cg_id                      string 渲染软件id."2013": Clarisse                                                              "2013"
ram                        string 内存要求。64/128                                                                         "64"
os_name                    string 渲染操作系统, "0":Linux; "1": Windows                                                    "1"
render_layer_type          string 渲染层方式选择。"0"：renderlayer方式"1"：rendersetup方式                                        "0"
is_distribute_render       string 是否开启分布式渲染。"0":关闭"1":开启                                                           "0"
input_cg_file              string 渲染场景本地路径                                                                         "E:/copy/DHGB_sc05_zhuta_610-1570_v0102.project"
job_stop_time              string 小任务超时停止, 单位秒                                                                   "28800"
user_id                    string 用户ID                                                                                  
pre_frames                 string 优先渲染                                                                                 "000:1,3-4[1]" 表示：优先渲染首帧：否 优先渲染中间帧：否 优先渲染末帧：否 优先渲染自定义帧：1,3-4[1]
platform                   string 提交平台                                                                                 "2"
is_picture                 string 是否效果图                                                                               "0"
project_id                 string 项目id                                                                                   "200953"
channel                    string 提交方式。"4":API/SDK提交                                                                "4"
tiles_type                 string "block(分块),strip(分条)"                                                                "block"
tiles                      string 分块数量，大于1就分块或者分条，等于1 就是单机                                            "1"
project_name               string 项目名称                                                                                 "Project1"
distribute_render_node     string 分布式渲染机器数                                                                              "3"
frames_per_task            string 一机渲多帧的帧数量                                                                               "1"
stop_after_test            string 优先渲染完成后是否暂停任务"1":优先渲染完成后暂停任务"2".优先渲染完成后不暂停任务
input_project_path         string 项目路径，如用户未设置传空字符串
task_id                    string 任务号                                                                                  
task_stop_time             string 大任务超时停止 单位秒                                                                          "86400"
time_out                   string 超时时间 单位秒                                                                          "43200"
========================== ====== ======================================================================================== =================================================================================================================

.. _header-n295:

**scene_info_render对象解析**

========== ====== ============ ======================================================================================
参数        类型      说明         示例
========== ====== ============ ======================================================================================
image_node object 场景普通信息   `见scene_info_render.image_node对象解析 <#scene_info_render.image_node对象解析>`__
========== ====== ============ ======================================================================================

**scene_info_render.image_node对象解析**

================ ====== ============================================================================================== ============================================================================================
参数             类型   说明                                                                                           示例
================ ====== ============================================================================================== ============================================================================================
renderable       string "0", 不开启渲染，“1”:开启渲染（这个不是场景中的值，平台默认是不开的，平台不建议直接渲染image）             "0"
output           string 当前image的输出路径                                                                            "D:\temp\cam02"
format           string 当前image的输出格式                                                                            "exr16"
LUT              string 当前image的输出颜色管理                                                                        "linear"
save_to_disk     string 当前image的是否要开启保存输出                                                                           "1"
name             string 当前image的名字，也是在场景中的路径                                                            "project://scene/cam02"
layers           string 当前image的中的3dlayer，值是list，list的值是dict,当前image中有多少layer,就有几个layer的dict    见`scene_info_render.image_node.layers对象解析 <配置文件文档之Clarisse.html#header-n298>`__
frames           string 帧范围                                                                                         "0-50[1]"
================ ====== ============================================================================================== ============================================================================================

.. _header-n298:

**scene_info_render.image_node.layers对象解析**

=========================== ====== =================================== =====================================
参数                        类型   说明                                示例
=========================== ====== =================================== =====================================
frames                      string 起始帧结束帧                        "0-50[1]"
renderable                  string "0", 不开启渲染 “1”:开启渲染        "1"
output                      string 当前layer的输出路径                 "D:\\temp\\cam02_layer02"
format                      string 当前layer的输出格式                 "exr16"
enable_deep_output          string 当前layer的是否要开启deep保存输出   "1"
save_to_disk                string                                     "3"
enable_deep_output_path     string 当前layer的deep输出路径             "D:\\temp\\cam02_layer02_deep"
name                        string 当前layer的名字，也是在场景中的路径 "project://scene/cam02.cam02_layer02"
=========================== ====== =================================== =====================================

.. _header-n299:

2.upload.json解析
-----------------

   说明: 存放需要上传的资产路径信息

**upload.json示例**

.. code:: json

   {

       "scene": [

           {

               "local": "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\trex_fly_env_songshu.project",

               "server": "/E/work/Trex/ep/ani_fly/clarisse/trex_fly_env_songshu.project"

           }

       ],

       "asset": [

           {

               "local": "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\assets\\speedtree\\guanmu01\\LeafHD2.png",

               "server": "/E/work/Trex/ep/ani_fly/clarisse/assets/speedtree/guanmu01/LeafHD2.png"

           },

           {

               "local": "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\assets\\speedtree\\tree_far\\tree_far08\\HuangshanPineBark_Normal.png",

               "server": "/E/work/Trex/ep/ani_fly/clarisse/assets/speedtree/tree_far/tree_far08/HuangshanPineBark_Normal.png"

           }

       ]

   }

**upload.json参数解析**

===== ====== ====================== ============================
参数  类型   说明                   示例
===== ====== ====================== ============================
asset object 需要上传的资产路径信息  `asset对象解析 <配置文件文档之Clarisse.html#header-n340>`__
scene object 场景文件信息           `scene对象解析 <配置文件文档之Clarisse.html#header-n341>`__
===== ====== ====================== ============================

.. _header-n340:

**asset对象解析**

====== ====== ===================================== =================================================================================
参数   类型   说明                                  示例
====== ====== ===================================== =================================================================================
local  string 场景本地路径                          "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\assets\\speedtree\\guanmu01\\LeafHD2.png"
server string 服务器端相对路径，一般与local保持一致 "/E/work/Trex/ep/ani_fly/clarisse/assets/speedtree/guanmu01/LeafHD2.png"
====== ====== ===================================== =================================================================================

.. _header-n341:

**scene对象解析**

====== ====== =================================== =============================================================================
参数   类型   说明                                示例
====== ====== =================================== =============================================================================
local  string 资产本地路径                        "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\trex_fly_env_songshu.project"
server string 资产服务端路径，一把与local保持一致 "/E/work/Trex/ep/ani*fly/clarisse/trex_fly_env_songshu.project"
====== ====== =================================== =============================================================================

.. _header-n350:

3.tips.json解析
---------------

   说明: 存放分析出的错误、警告信息

.. code:: json

   {}
