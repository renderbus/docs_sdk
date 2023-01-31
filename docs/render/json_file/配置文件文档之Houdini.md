Houdini 配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json, upload.json, tips.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
    "scene_info_render": {
        "rop_node": [
            {
                "node": "/out/mantra1", 
                "frames": "1-10[1]", 
                "option": "-1", 
                "render": "1",
                "height": "720",
				"width": "1280"
            }
        ], 
        "geo_node": [],
        "distributedsim_node": [
			{
				"node": "/out/distributedsim",
				"output_driver": "/obj/distribute_flattank/save_slices",
				"render": "0",
				"simControlName": "/obj/flattank_sim/DISTRIBUTE_flattank_CONTROLS",
				"output_file": "/geo/flip_test_slice4.flattank.0.1.bgeo.sc",
				"num_slices": "4",
				"option": "1",
				"frames": "1-240[1]",
				"sliceType": "particle"
			}
        ]
    }, 
    "task_info": {
        "is_layer_rendering": "1", 
        "cg_id": "2004", 
        "ram": "64", 
        "os_name": "1", 
        "render_layer_type": "0", 
        "is_distribute_render": "1", 
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
        "time_out": "12",
        "graphics_cards_num": "2",
        "hardwareConfigId": ""
    },  
    "software_config": {
        "cg_version": "16.5.268", 
        "cg_name": "Houdini", 
        "plugins": {}
    }
}
```


**task.json参数解析**


参数 | 类型 |  | 说明 | 示例
---|---|---|---|---
software_config | object | Y | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config)
task_info | object | Y | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info_render | object | Y | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info_render对象解析](#scene_info_render)

**<span id="software_config">software_config对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
cg_name | string | 软件名称 | "Houdini"
cg_version | string | 软件版本 | "16.5.268"
plugins | object | 插件对象，key为插件名称，value为插件版本 | {}

**<span id="task_info">task_info对象解析</span>**

| 参数                   | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ---------------------- | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num     | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| enable_layered         | string | Y        | 是否开启分层提交, "0":关闭 "1":开启                          | "0"      | "0"                                                          |
| cg_id                  | string | Y        | 渲染软件id."2004": Houdini                                   |          | "2013"                                                       |
| ram                    | string | Y        | 内存要求: 64 / 128                                           | “64”     | "64"                                                         |
| os_name                | string | Y        | 渲染操作系统:  "0":Linux; "1": Windows                       | “1”      | "1"                                                          |
| render_layer_type      | string | N        | 渲染层方式选择(支持maya):  "0"：renderlayer方式 "1"：rendersetup方式 | “0”      | "0"                                                          |
| is_distribute_render   | string | N        | 是否开启分布式渲染:  "0":关闭 "1":开启                       | “0”      | "0"                                                          |
| input_cg_file          | string | Y        | 渲染场景本地路径                                             |          | "E:/copy/DHGB_sc05_zhuta_610-1570_v0102.project"             |
| input_project_path     | string | Y        | 项目路径，如用户未设置传空字符串                             | " "      |                                                              |
| job_stop_time          | string | Y        | 设置帧的超时时间，只会影响当前帧, 单位秒                     | “259200” | "28800"                                                      |
| user_id                | string | Y        | 用户ID                                                       |          |                                                              |
| pre_frames             | string | Y        | 优先渲染(优先帧不建议自定义多个单独帧)                       | “000”    | "000:1,3-4[1]" 表示： 优先渲染首帧：否 优先渲染中间帧：否 优先渲染末帧：否 优先渲染自定义帧：1,3-4[1] |
| platform               | string | Y        | 提交平台: "2": "www2", "3": "www3", "6": "www4", "21": "gpu", |          | "2"                                                          |
| is_picture             | string | Y        | “0: 效果图 "1": 动画图                                       | “0”      | "0"                                                          |
| channel                | string | Y        | 1:web本地分析(动画扣费); 2:web云端分析; 3:效果图插件提交； 4：API/SDK提交; 8：动画插件提交 | “4”      | "4"                                                          |
| tiles_type             | string | Y        | "block(分块),strip(分条)"                                    | “block”  | "block"                                                      |
| tiles                  | string | Y        | 分块数量，大于1就分块或者分条，等于1 就是单机                | "1"      | "1"                                                          |
| project_id             | string | Y        | 项目id                                                       |          | "200953"                                                     |
| project_name           | string | Y        | 项目名称                                                     | " "      | "Project1"                                                   |
| distribute_render_node | string | N        | 分布式渲染机器数                                             | "3"      | "3"                                                          |
| frames_per_task        | string | Y        | 一机渲多帧的帧数量                                           | "1"      | "1"                                                          |
| stop_after_test        | string | Y        | 优先渲染完成后是否暂停任务 "1":优先渲染完成后暂停任务 "2".优先渲染完成后不暂停任务 | "2"      | “2”                                                          |
| task_id                | string | Y        | 任务号                                                       |          |                                                              |
| task_stop_time         | string | Y        | 大任务超时停止 单位秒,"0"表示不限制                          | "0"      | "86400"                                                      |
| time_out               | string | Y        | 超时时间 单位秒                                              | “43200”  | "43200"                                                      |

>  **注意:** 只有在分布式存储参数(distribute_render_node)设置为开启, 分布式渲染机器(distribute_render_node)才会生效。

**<span id="scene_info_render">scene_info_render对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
rop_node | object | 渲染节点 | 
geo_node | object | 解算节点 | 
distributedsim_node | object | 分布式节点 | 

**<span id="scene_info_render.rop_node">scene_info_render.rop_node和geo_node对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
node | string | Y | 节点全路径名 | "/out/mantra1"
frames | string | Y | 帧数范围 | "1-10[1]"
option | string | Y | 任务类型:<br>-1: 渲染;<br>0: 普通解算;<br>1: 分布式解算; | "-1"
render | string | Y | 是否激活渲染:<br>1: 渲染（解算）该节点;<br>0: 该节点不参与渲染（解算） | "1"
height | string | N | 相机的高 | “720” 
width | string | N | 相机的宽 | “1280” 

**<span id="scene_info_render.distributedsim_node">scene_info_render.distributedsim_node对象解析</span>**

| 参数           | 类型   | 是否必须 | 说明                                                         | 示例                                             |
| -------------- | ------ | -------- | ------------------------------------------------------------ | ------------------------------------------------ |
| node           | string | Y        | 节点全路径名                                                 | "/out/distributedsim"                            |
| output_driver  | string | N        | 解算节点路径                                                 | "/obj/distribute_flattank/save_slices"           |
| render         | string | Y        | 是否激活渲染:<br/>1: 渲染（解算）该节点;<br/>0: 该节点不参与渲染（解算） | "0"                                              |
| simControlName | string | N        | 解算节点名                                                   | "/obj/flattank_sim/DISTRIBUTE_flattank_CONTROLS" |
| output_file    | string | N        | 输出文件                                                     | "/geo/flip_test_slice4.flattank.0.1.bgeo.sc"     |
| num_slices     | string | N        | 分块解算总块数 （总数不可超过16）                            | "4"                                              |
| option         | string | Y        | 任务类型:<br/>-1: 渲染;<br/>0: 普通解算;<br/>1: 分布式解算;  | "1"                                              |
| frames         | string | Y        | 解算帧范围                                                   | "1-240[1]"                                       |
| sliceType      | string | N        | 切片类型                                                     | "particle"                                       |

### 2.upload.json解析


> 说明: 存放需要上传的资产路径信息

**upload.json示例**

```json
{
  "asset": [
    {
      "local": "D:/gitlab/renderSDK/scenes/houdini_test/sphere.hip", 
      "server": "/D/gitlab/renderSDK/scenes/houdini_test/sphere.hip"
    }
  ]
}
```


**upload.json参数解析**


参数 | 类型 | 说明 | 示例
---|---|---|---
asset | object | 需要上传的资产路径信息 | [见asset对象解析](#asset)


**<span id="asset">asset对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
local | string | 资产本地路径 | "D:/gitlab/renderSDK/scenes/houdini_test/sphere.hip"
server | string | 服务器端相对路径，一般与local保持一致 | "/D/gitlab/renderSDK/scenes/houdini_test/sphere.hip"

### 3.tips.json解析


> 说明: 存放分析出的错误、警告信息


```json
{
    "50001":[
        "Nodes: /obj/flattank_fluid/compressed_cache/file_mode  File name: $HIP/geo/$HIPNAME.$OS.$F.bgeo.sc  miss file: /geo/flip_test_slice4.compressed_cache.1.bgeo.sc "
    ]
}
```

