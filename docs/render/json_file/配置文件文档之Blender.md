Blender 配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json, upload.json, tips.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
    "software_config": {
        "cg_name": "Blender",
        "cg_version": "2.81",
        "plugins": {}
    },
    "scene_info_render": {
        "common": {
            "width": "1024",
            "scene_name": [
                "Scene"
            ],
            "Output_path": "/tmp\\",
            "camera_name": "<bpy_struct, Object(\"Camera\")>",
            "height": "1024",
            "Render_Format": "OPEN_EXR",
            "frames": "1-1[1]"
        }
    },
    "task_info": {
        "os_name": "1",
        "pre_frames": "100",
        "distribute_render_node": "3",
        "time_out": "43200",
        "stop_after_test": "1",
        "frames_per_task": "1",
        "project_id": "14323",
        "tiles": "1",
        "user_id": "10013141",
        "enable_layered": "0",
        "is_layer_rendering": "1",
        "task_stop_time": "0",
        "task_id": "8368517",
        "job_stop_time": "259200",
        "input_project_path": "",
        "platform": "2",
        "input_cg_file": "D:/houdini/cg_file/PRAM RENDER 1.blend",
        "channel": "4",
        "cg_id": "2007",
        "ram": "64",
        "is_picture": "0",
        "render_layer_type": "0",
        "is_distribute_render": "0",
        "hardwareConfigId": "5",
        "project_name": "Project1",
        "tiles_type": "block"
    },
    "scene_info": {
        "common": {
            "width": "1024",
            "scene_name": [
                "Scene"
            ],
            "Output_path": "/tmp\\",
            "camera_name": "<bpy_struct, Object(\"Camera\")>",
            "height": "1024",
            "Render_Format": "OPEN_EXR",
            "frames": "1-1[1]"
        }
    },
    "additional_info": {}
}
```

**task.json参数解析**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
software_config | object | Y | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config)
task_info | object | Y | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info | object | Y | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info对象解析](#scene_info) 
scene_info_render | object | N | 一般同"scene_info" |  




参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
cg_name | string | Y | 软件名称 | "Blender" 
cg_version | string | Y | 软件版本 | "2.81" 
plugins | dict | Y | 插件对象。<br> key为插件名称，value为插件版本 | {} 

**<span id="task_info">task_info对象解析</span>**

| 参数                   | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ---------------------- | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num     | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| enable_layered         | string | Y        | 是否开启分层提交, "0":关闭 "1":开启                          | "0"      | "0"                                                          |
| cg_id                  | string | Y        | 渲染软件id."2007": blender                                   |          | "2007"                                                       |
| ram                    | string | Y        | 内存要求: 64 / 128                                           | “64”     | "64"                                                         |
| os_name                | string | Y        | 渲染操作系统:  "0":Linux; "1": Windows                       | “1”      | "1"                                                          |
| render_layer_type      | string | Y        | 渲染层方式选择:  "0"：renderlayer方式 "1"：rendersetup方式   | “0”      | "0"                                                          |
| is_distribute_render   | string | N        | 是否开启分布式渲染:  "0":关闭 "1":开启                       | “0”      | "0"                                                          |
| input_cg_file          | string | Y        | 渲染场景本地绝对路径                                         |          | "D:/houdini/cg_file/PRAM RENDER 1.blend"                     |
| input_project_path     | string | Y        | 项目路径，如用户未设置传空字符串                             | " "      |                                                              |
| job_stop_time          | string | Y        | 设置帧的超时时间，只会影响当前帧, 单位秒                     | “259200” | "28800"                                                      |
| user_id                | string | N        | 用户ID                                                       |          |                                                              |
| pre_frames             | string | Y        | 优先渲染(优先帧不建议自定义多个单独帧)                       | “000”    | "000:1,3-4[1]" 表示： 优先渲染首帧：否 优先渲染中间帧：否 优先渲染末帧：否 优先渲染自定义帧：1,3-4[1] |
| platform               | string | Y        | 提交平台: "2": "www2", "3": "www3", "6": "www4", "21": "gpu", |          | "2"                                                          |
| is_picture             | string | Y        | “0: 效果图 "1": 动画图                                       | “0”      | "0"                                                          |
| channel                | string | Y        | 1:web本地分析(动画扣费); 2:web云端分析; 3:效果图插件提交； 4：API/SDK提交; 8：动画插件提交 | “4”      | "4"                                                          |
| tiles_type             | string | Y        | "block(分块),strip(分条)"                                    | “block”  | "block"                                                      |
| tiles                  | string | Y        | 分块数量，大于1就分块或者分条，等于1 就是单机                | "1"      | "1"                                                          |
| project_id             | string | N        | 项目id                                                       |          | "200953"                                                     |
| project_name           | string | Y        | 项目名称                                                     | " "      | "Project1"                                                   |
| distribute_render_node | string | N        | 分布式渲染机器数                                             | "3"      | "3"                                                          |
| frames_per_task        | string | Y        | 一机渲多帧的帧数量                                           | "1"      | "1"                                                          |
| stop_after_test        | string | Y        | 优先渲染完成后是否暂停任务 "1":优先渲染完成后暂停任务 "2".优先渲染完成后不暂停任务 | "2"      | “2”                                                          |
| task_id                | string | N        | 任务号                                                       |          | “54508419”                                                   |
| task_stop_time         | string | Y        | 大任务超时停止 单位秒,"0"表示不限制                          | "0"      | "86400"                                                      |
| time_out               | string | Y        | 超时时间 单位秒                                              | “43200”  | "43200"                                                      |

**<span id="scene_info">scene_info对象解析</span>**


**参数** | **类型** | **是否必须** | **说明** | **示例** 
---|---|---|---|---
common | dict | Y | 装载平台普通参数 | **[见scene_info.common对象解析](#scene_info.common)** 

**<span id="scene_info.common">scene_info.common对象解析</span>**


参数 | 类型 | 是否必须(Y/N) | 说明 | 示例
---|---|---|---|---
 frames        | string | Y             | 渲染帧数 | "1-1[1]"                           
 Output_path   | string | N             | 输出路径 | "/tmp\\\\"                         
 width         | string | N             | 宽       | "1024"                             
 height        | string | N             | 高       | "1024"                             
 camera_name   | string | N             | 相机名   | "<bpy_struct, Object(\"Camera\")>" 
 Render_Format | string | N             | 输出格式 | "OPEN_EXR"                         
 scene_name    | list   | N             | 场景名   | ["Scene"]                          


### 2.upload.json解析


> blender不会通过分析自动生成upload.json，需要用户自己构建upload.json上传资源,
>
> 自定义upload.json可参考rayvision_api.utils.append_to_upload

**upload.json示例**

```json
{
	"asset": [
		{
			"local": "D:/houdini/cg_file/blender_test.blend",
			"server": "/D/houdini/cg_file/blender_test.blend"
		}
	]
}
```


**upload.json参数解析**


参数 | 类型 | 说明 | 示例
---|---|---|---
asset | list | 需要上传的资产路径信息 | [见asset对象解析](#asset)

**<span id="asset">asset对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
local | string | 资产本地路径 | "D:/houdini/cg_file/blender_test.blend" 
server | string | 服务器端相对路径，一般与local保持一致 | "/D/houdini/cg_file/blender_test.blend" 


### 3.tips.json解析


> 说明: 存放分析出的错误、警告信息


```json
{"35001":"d:\\abc\\jdf.jpg"}
```

