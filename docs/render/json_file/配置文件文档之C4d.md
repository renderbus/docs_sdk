C4D 配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json, upload.json, tips.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
  "scene_info_render": {
    "renderer": {
      "octane_renderer_info": {},
      "name": "Physical",
      "Octane_renderer_resave_info": {},
      "physical_sampler_mode": "",
      "physical_sampler": ""
    },
    "common": {
      "all_take_info": [],
      "frames": "0-333[1]",
      "multipass_saveonefile": "0",
      "fps": "25",
      "multipass_save_enabled": "0",
      "frame_rate": "25",
      "multi_pass": {
        "投影": [],
        "高光": []
      },
      "all_take_name": [],
      "saved_version": "MAXON CINEMA 4D Studio (RC - R18) 18.011",
      "regular_image_format": "TIFF",
      "multi_pass_format": "TIFF",
      "regular_image_saveimage_path": "ybt",
      "all_format": [
        "RLA",
        "HDR",
        "PSB",
        "TIFF",
        "TGA",
        "BMP",
        "IFF",
        "JPEG",
        "PICT",
        "PSD",
        "DDS",
        "RPF",
        "B3D",
        "PNG",
        "DPX",
        "EXR"
      ],
      "regular_image_save_enabled": "1",
      "created_version": "MAXON CINEMA 4D Studio 15.057",
      "all_camera": [
        "1"
      ],
      "width": "1920",
      "multipass_save_saveimage": "1",
      "multipass_saveimage_path": "E:/王顺利练习制作/气象局建模/序列/ae3D文件/3D摄像机",
      "height": "1080",
      "c4d_software_version": 22123
    }
  },
  "additional_info": {},
  "task_info": {
    "enable_layered": "0",
    "task_stop_time": "0",
    "concurrent_tasks": "1",
    "channel": "4",
    "frames_per_task": "1",
    "task_id": "54508419",
    "project_name": "Project1",
    "platform": "2",
    "tiles": "1",
    "is_picture": "0",
    "project_id": "469457",
    "job_stop_time": "259200",
    "distribute_render_node": "3",
    "stop_after_test": "1",
    "clone_original_id": "",
    "ram": "64",
    "render_layer_type": "0",
    "test_frames": "100",
    "edit_name": "",
    "pre_frames": "100",
    "input_project_path": "",
    "is_layer_rendering": "1",
    "is_distribute_render": "0",
    "tiles_type": "block",
    "time_out": "43200",
    "multi_node": "0",
    "cg_id": "2005",
    "user_id": "100150764",
    "input_cg_file": "D:/houdini/cg_file/ybt.c4d",
    "os_name": "1",
    "hardwareConfigId": ""
  },
  "software_config": {
    "plugins": {},
    "cg_version": "R22",
    "cg_name": "CINEMA 4D"
  },
  "scene_info": {
    "renderer": {
      "octane_renderer_info": {},
      "name": "Physical",
      "Octane_renderer_resave_info": {},
      "physical_sampler_mode": "",
      "physical_sampler": ""
    },
    "common": {
      "all_take_info": [],
      "frames": "0-333[1]",
      "multipass_saveonefile": "0",
      "fps": "25",
      "multipass_save_enabled": "0",
      "frame_rate": "25",
      "multi_pass": {
        "投影": [],
        "高光": []
      },
      "all_take_name": [],
      "saved_version": "MAXON CINEMA 4D Studio (RC - R18) 18.011",
      "regular_image_format": "TIFF",
      "multi_pass_format": "TIFF",
      "regular_image_saveimage_path": "ybt",
      "all_format": [
        "RLA",
        "HDR",
        "PSB",
        "TIFF",
        "TGA",
        "BMP",
        "IFF",
        "JPEG",
        "PICT",
        "PSD",
        "DDS",
        "RPF",
        "B3D",
        "PNG",
        "DPX",
        "EXR"
      ],
      "regular_image_save_enabled": "1",
      "created_version": "MAXON CINEMA 4D Studio 15.057",
      "all_camera": [
        "1"
      ],
      "width": "1920",
      "multipass_save_saveimage": "1",
      "multipass_saveimage_path": "E:/王顺利练习制作/气象局建模/序列/ae3D文件/3D摄像机",
      "height": "1080",
      "c4d_software_version": 22123
    }
  }
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
cg_name | string | Y | 软件名称 | "CINEMA 4D" 
cg_version | string | Y | 软件版本，例如R13/R14/R15/R16/R17/R18/R19 | "R22" 
plugins | object | Y | 插件对象。<br> 为插件名称，value为插件版本 | {"c4dtoa": "2.2.0", "vray":"1.9"} 

**<span id="task_info">task_info对象解析</span>**

| 参数                   | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ---------------------- | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num     | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| enable_layered         | string | Y        | 是否开启分层提交, "0":关闭 "1":开启                          | "0"      | "0"                                                          |
| cg_id                  | string | Y        | 渲染软件id."2005": C4d                                       |          | "2005"                                                       |
| ram                    | string | Y        | 内存要求: 64 / 128                                           | “64”     | "64"                                                         |
| os_name                | string | Y        | 渲染操作系统:  "0":Linux; "1": Windows                       | “1”      | "1"                                                          |
| render_layer_type      | string | Y        | 渲染层方式选择:  "0"：renderlayer方式 "1"：rendersetup方式   | “0”      | "0"                                                          |
| is_distribute_render   | string | N        | 是否开启分布式渲染:  "0":关闭 "1":开启                       | “0”      | "0"                                                          |
| input_cg_file          | string | Y        | 渲染场景本地绝对路径                                         |          | "D:/houdini/cg_file/ybt.c4d"                                 |
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
common | dict | **Y** | 装载平台普通参数 | **[见scene_info.common对象解析](#scene_info.common)** 
renderer | dict | Y | 渲染器详细参数 |  

**<span id="scene_info.common">scene_info.common对象解析</span>**


参数 | 类型 | 是否必须(Y/N) | 说明 | 示例
---|---|---|---|---
all_take_info | list | Y | 场次 | [] 
frames | string | Y | 起始针，隔针 | "0-333[1]" 
multipass_saveonefile | string | Y | c4d软件场景中的通道是否开启 | "1" 
fps | string | Y | 帧速率 | "25" 
multipass_save_enabled | string | Y | 通道输出开关（开为1，关为0） | "1" 
frame_rate | string | Y | 隔帧 | "25" 
multi_pass | dict | Y | 场景中的通道 | 
all_take_name | list | Y | 场次名称 | [] 
saved_version | string | Y | 保存版本 | "MAXON CINEMA 4D Studio (RC - R18) 18.011" 
regular_image_format | string | Y | 主图输出格式 | "TIFF" 
multi_pass_format | string | Y | 通道输出格式 | "TIFF" 
regular_image_saveimage_path | string | Y | 主图输出名（(默认显示的输出文件名） | "ybt" 
all_format | list | Y | 所有输出格式 | [<br/>				"RLA",<br/>				"HDR",<br/>				"PSB",<br/>				"TIFF",<br/>				"TGA",<br/>				"BMP",<br/>				"IFF",<br/>				"JPEG",<br/>				"PICT",<br/>				"PSD",<br/>				"DDS",<br/>				"RPF",<br/>				"B3D",<br/>				"PNG",<br/>				"DPX",<br/>				"EXR"<br/>			] 
regular_image_save_enabled | string | Y | 主图输出开关（开为1，关为0） | "1" 
created_version | string | Y | 创建版本 | "MAXON CINEMA 4D Studio 15.057" 
all_camera | list | Y | 场景中的所有相机 | ["1"] 
width | string | Y | 宽 | "1920" 
height | string | Y | 高 | "1080" 
multipass_save_saveimage | string | Y | c4d软件场景中的通道保存路径 | "1" 
multipass_saveimage_path | string | Y | 通道输出名 | "E:/王顺利练习制作/气象局建模/序列/ae3D文件/3D摄像机" 
c4d_software_version | int | Y | 软件版本 | 22123 


### 2.upload.json解析


> 说明: 存放需要上传的资产路径信息

**upload.json示例**

```json
{
    "asset": [
        {
            "local": "D:/houdini/cg_file/ybt.c4d", 
            "server": "/D/houdini/cg_file/ybt.c4d"
        }
    ], 
    "scene": {
        "local": "D:\\houdini\\cg_file\\ybt.c4d", 
        "server": "/D/houdini/cg_file/ybt.c4d"
    }
}
```


**upload.json参数解析**


参数 | 类型 | 说明 | 示例
---|---|---|---
asset | list | 需要上传的资产路径信息 | [见asset对象解析](#asset)
scene | dict | 上传的场景文件信息 | 

**<span id="asset">asset对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
local | string | 资产本地路径 | "D:/houdini/cg_file/ybt.c4d" 
server | string | 服务器端相对路径，一般与local保持一致 | "/D/houdini/cg_file/ybt.c4d" 


### 3.tips.json解析


> 说明: 存放分析出的错误、警告信息


```json
{"35001":"d:\\abc\\jdf.jpg"}
```
