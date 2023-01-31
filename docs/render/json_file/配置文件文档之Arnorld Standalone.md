Arnold 配置文件文档
======

> arnold 没有自动分析功能，用户根据文档自定义构建需要的配置文件


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
    "software_config": {
        "plugins": {},
        "cg_version": "6.0.3.0",
        "cg_name": "Arnold Standalone"
    },
    "task_info": {
        "tiles": "1",
        "graphics_cards_num": "2",
        "edit_name": "arnord1111",
        "job_stop_time": "86400",
        "stop_after_test": "1",
        "frames_per_task": "1",
        "ram": "64",
        "time_out": "43600",
        "pre_frames": "100",
        "task_id": "38226011",
        "user_id": "100150764",
        "project_name": "ff",
        "project_id": "426731",
        "input_cg_file": "E:/fang/ass_test/static_ass.ass",
        "task_stop_time": "86400",
        "cg_id": "2003",
        "hardwareConfigId": ""
    },
    "additional_info": {},
    "scene_info_render": {
        "common": {
            "frames": "1-10[1]"
        }
    }
}
```


**task.json参数解析**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
software_config | dict | Y | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config)
task_info | dict | Y | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info_render | dict | Y | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info_render对象解析](#scene_info_render)

**<span id="software_config">software_config对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
cg_name | string | Y | 软件名称 | "Arnold Standalone" 
cg_version | string | Y | 软件版本 | "6.0.3.0" 
plugins | dict | N | 插件对象。<br> 为插件名称，value为插件版本 | {}

**<span id="task_info">task_info对象解析</span>**

| 参数               | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ------------------ | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| cg_id              | string | Y        | 渲染软件id."2000": Maya                                      |          | "2003"                                                       |
| ram                | string | Y        | 内存要求: 64 / 128                                           | “64”     | "64"                                                         |
| input_cg_file      | string | Y        | 渲染场景本地路径                                             |          | "E:/fang/ass_test/static_ass.ass"                            |
| job_stop_time      | string | Y        | 设置帧的超时时间，只会影响当前帧, 单位秒                     | “259200” | "28800"                                                      |
| user_id            | string | N        | 用户ID                                                       |          |                                                              |
| pre_frames         | string | Y        | 优先渲染(优先帧不建议自定义多个单独帧)                       | “000”    | "000:1,3-4[1]" 表示： 优先渲染首帧：否 优先渲染中间帧：否 优先渲染末帧：否 优先渲染自定义帧：1,3-4[1] |
| tiles              | string | N        | 分块数量，大于1就分块或者分条，等于1 就是单机                | "1"      | "1"                                                          |
| project_id         | string | N        | 项目id                                                       |          | "200953"                                                     |
| project_name       | string | N        | 项目名称                                                     | " "      | "Project1"                                                   |
| stop_after_test    | string | Y        | 优先渲染完成后是否暂停任务 "1":优先渲染完成后暂停任务 "2".优先渲染完成后不暂停任务 | "2"      | “2”                                                          |
| task_id            | string | N        | 任务号                                                       |          |                                                              |
| task_stop_time     | string | Y        | 大任务超时停止 单位秒,"0"表示不限制                          | "0"      | "86400"                                                      |
| time_out           | string | Y        | 超时时间 单位秒                                              | “43200”  | "43200"                                                      |

**<span id="scene_info_render">scene_info_render对象解析</span>**


**参数** | **类型** | **是否必须** | **说明** | **示例** 
---|---|---|---|---
common | dict | **Y** | 渲染的公共参数 | [见scene_info_render.common对象解析](#scene_info_render.common) 

**<span id="scene_info_render.common">scene_info_render.common对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
frames | string | Y | 渲染帧范围，帧间隔 | "1-10[1]" 


### 2.upload.json解析


> 说明: 存放需要上传的资产路径信息
>
> 注意:
>
> - 文件名和路径上不要使用非英文符，不要使用除_之外的特殊符号;
>
> - 不支持 A B C D 四个盘符，不支持网络共享目录（\share\project）和IP路径（\192.168.0.22）;
>
> - 上传文件目录层级，请和本地保持一致
>
> - 根目录不要超过22个文件夹;


**upload.json示例**
```json
{
  "asset": [
    {
      "local": "D:/chensr/scene/maya2016_multi_layers_cameras.ma", 
      "server": "/D/chensr/scene/maya2016_multi_layers_cameras.ma"
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
local | string | 资产本地路径 | "D:/chensr/scene/maya2016_multi_layers_cameras.ma"
server | string | 服务器端相对路径，一般与local保持一致 | "/D/chensr/scene/maya2016_multi_layers_cameras.ma"
