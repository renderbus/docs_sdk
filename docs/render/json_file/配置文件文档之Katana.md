Katana 配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json, upload.json, tips.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息

**task.json示例**


```json

  "scene_info_render": {
    "rendernodes": {
      "Render": {
        "renderable": "1",
        "denoise": "0",
        "frames": "1-1[1]",
        "aov": {
          "aaa": "F:/cache/test.exr"
        }
      }
    }
  },
  "additional_info": {},
  "task_info": {
    "enable_layered": "0",
    "task_stop_time": "0",
    "concurrent_tasks": "1",
    "channel": "4",
    "frames_per_task": "1",
    "task_id": 34333653,
    "project_name": "Project1",
    "platform": "2",
    "tiles": "1",
    "is_picture": "0",
    "project_id": "200953",
    "job_stop_time": "259200",
    "distribute_render_node": "3",
    "stop_after_test": "1",
    "clone_original_id": "",
    "ram": "64",
    "render_layer_type": "0",
    "test_frames": "100",
    "graphics_cards_num": "2",
    "edit_name": "",
    "pre_frames": "100",
    "input_project_path": "",
    "is_layer_rendering": "1",
    "is_distribute_render": "0",
    "tiles_type": "block",
    "time_out": "43200",
    "cg_id": "2016",
    "user_id": 100150764,
    "input_cg_file": "F:/cache/arnold_test.katana",
    "os_name": "1"
  },
  "software_config": {
    "plugins": {
      "KtoA": "2.4.0.3"
    },
    "cg_version": "3.2v1",
    "cg_name": "Katana"
  },
  "scene_info": {
    "rendernodes": {
      "Render": {
        "renderable": "1",
        "denoise": "0",
        "frames": "1-1[1]",
        "aov": {
          "aaa": "F:/cache/test.exr"
        }
      }
    }
  }
}
```


**task.json参数解析**


参数 | 类型 | 说明 | 示例
---|---|---|---
software_config | object | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config)
task_info | object | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info_render | object | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info_render对象解析](#scene_info_render)

**<span id="software_config">software_config对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
cg_name | string | 软件名称 | "Katana" 
cg_version | string | 软件版本 | "3.2v1" 
plugins | object | 插件对象: <br>key为插件名称，value为插件版本 | {"KtoA": "2.4.0.3"} 

**<span id="task_info">task_info对象部分解析</span>**

| 参数                   | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ---------------------- | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num     | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| enable_layered         | string | Y        | 是否开启分层提交, "0":关闭 "1":开启                          | "0"      | "0"                                                          |
| cg_id                  | string | Y        | 渲染软件id."2013": Clarisse                                  |          | "2013"                                                       |
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

>  **注意:** Katana暂时不支持分布式渲染(is_distribute_render)和分块渲染(tiles)

**<span id="scene_info_render">scene_info_render对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
rendernodes | dict | 渲染输出的节点 | [见scene_info_render.rendernodes对象解析](#scene_info_render.rendernodes) 

**<span id="scene_info_render.common">scene_info_render.rendernodes对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
 Render | dict | 节点名字,根据场景可能有多个不同节点名 | [见scene_info_render.rendernodes.Render对象解析](#scene_info_render.rendernodes.Render) 

**<span id="scene_info_render.rendernodes.Render">scene_info_render.rendernodes.Render对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
 renderable | string | 是否激活节点，”1“：激活，”0“：不激活                         |                    
 denoise    | string | 降噪，必须要gpu平台渲染才有效，“0”：不开启降噪，“1”：开启降噪 | "denoise": "0"     
 frames     | string | 当前节点帧范围                                               | "frames": "1-1[1]" 
 aov        | dict   | AOV网，key:aov的名字, value:输出的地址                       |                    

### 2.upload.json解析


> 说明: katana自动分析不分析资产文件，但是有upload.json文件，里面只包含场景文件

**upload.json示例**

```json
{
  "scene": [
    {
      "local": "F:/cache/arnold_test.katana",
      "server": "/F/cache/arnold_test.katana",
      "hash": "41985d615b8e6d44ce7e7881c46971de"
    }
  ],
  "asset": [
    {
      "local": "F:/cache/arnold_test.katana",
      "server": "/F/cache/arnold_test.katana"
    },
  ]
}
```


**upload.json参数解析**


参数 | 类型 | 说明 | 示例
---|---|---|---
asset | object | 需要上传的资产路径信息 | [见asset对象解析](#asset)
scene | object | 场景文件信息 | [见scene对象解析](#scene) 

**<span id="asset">asset对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
local | string | 场景本地路径 | "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\assets\\speedtree\\guanmu01\\LeafHD2.png" 
server | string | 服务器端相对路径，一般与local保持一致 | "/E/work/Trex/ep/ani_fly/clarisse/assets/speedtree/guanmu01/LeafHD2.png" 
hash | string | hash值 |  

**<span id="scene">scene对象解析</span>**

| 参数   | 类型   | 说明                                | 示例                                                         |
| ------ | ------ | ----------------------------------- | ------------------------------------------------------------ |
| local  | string | 资产本地路径                        | "E:\\work\\Trex\\ep\\ani_fly\\clarisse\\trex_fly_env_songshu.project" |
| server | string | 资产服务端路径，一把与local保持一致 | "/E/work/Trex/ep/ani_fly/clarisse/trex_fly_env_songshu.project" |

### 3.tips.json解析


> 说明: 存放分析出的错误、警告信息


```json
{
    "50001":[
        "Nodes: /obj/flattank_fluid/compressed_cache/file_mode  File name: $HIP/geo/$HIPNAME.$OS.$F.bgeo.sc  miss file: /geo/flip_test_slice4.compressed_cache.1.bgeo.sc "
    ]
}
```

