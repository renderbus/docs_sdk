Max 配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json, upload.json, tips.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
    "scene_info": {
        "common": {
            "CurrentProjectFolder": "C:/Users/dingyutao/Documents/3dsMax",
            "Faces": "3784",
            "Peak_Memory": "702.758",
            "Vertices": "1914",
            "all_camera": [
                "Camera001",
                "Camera002",
                "Camera003",
                "Camera004",
                "Camera005"
            ],
            "all_element_type": [
                ".tga",
                ".tif",
                ".jpg",
                ".png",
                ".exr",
                ".rla",
                ".rpf"
            ],
            "all_output_file_type": [
                ".tga",
                ".tif",
                ".jpg",
                ".png",
                ".exr",
                ".rla",
                ".rpf"
            ],
            "animation_range": "0-100",
            "cgv": "2018",
            "element_active": "1",
            "element_list": [
				"MultiMatteElement",
				"VRayAlpha",
				"VRayAtmosphere",
				"VRayBackground",
				"MultiMatteElement",
				"VRayAlpha",
				"VRayAtmosphere"
			],
			"element_path_list": [
				"jh_out_MultiMatteElement.rla",
				"jh_out_VRayAlpha.rla",
				"jh_out_VRayAtmosphere.rla",
				"jh_out_VRayBackground.rla",
				"jh_out_MultiMatteElement1.rla",
				"jh_out_VRayAlpha2.rla",
				"jh_out_VRayAtmosphere.rla"
			],
            "element_type": ".rla",
            "frames": "0",
            "gamma": "1",
            "gamma_val": "2.2",
            "global_proxy": "false",
            "height": "480",
            "in_gamma": "2.2",
            "is_picture": "0",
            "net_render": "0",
            "out_gamma": "2.2",
            "output_file": "E:/3D_Scene/Max/jh/output/1/jh_out.rla",
            "output_file_basename": "jh_out",
            "output_file_type": ".rla",
            "rend_save_file": "true",
            "rend_timeType": "1",
            "renderable_camera": [],
            "taskdurationlimit": "86400",
            "width": "640"
        },
        "renderer": {
            "name": "scanline",
            "renderer": "scanline",
            "renderer_orign": "Default_Scanline_Renderer"
        }
    },
    "scene_info_render": {
        "common": {
            "CurrentProjectFolder": "C:/Users/dingyutao/Documents/3dsMax",
            "Faces": "3784",
            "Peak_Memory": "702.758",
            "Vertices": "1914",
            "all_camera": [
                "Camera001",
                "Camera002",
                "Camera003",
                "Camera004",
                "Camera005"
            ],
            "all_element_type": [
                ".tga",
                ".tif",
                ".jpg",
                ".png",
                ".exr",
                ".rla",
                ".rpf"
            ],
            "all_output_file_type": [
                ".tga",
                ".tif",
                ".jpg",
                ".png",
                ".exr",
                ".rla",
                ".rpf"
            ],
            "animation_range": "0-100",
            "cgv": "2018",
            "element_active": "1",
            "element_list": [
                "Missing_Render_Element_Plug_in",
                "Missing_Render_Element_Plug_in",
                "Missing_Render_Element_Plug_in",
                "Missing_Render_Element_Plug_in",
                "Missing_Render_Element_Plug_in",
                "Missing_Render_Element_Plug_in",
                "Missing_Render_Element_Plug_in"
            ],
            "element_path_list": [],
            "element_type": ".rla",
            "frames": "0",
            "gamma": "1",
            "gamma_val": "2.2",
            "global_proxy": "false",
            "height": "480",
            "in_gamma": "2.2",
            "is_picture": "0",
            "net_render": "0",
            "out_gamma": "2.2",
            "output_file": "E:/3D_Scene/Max/jh/output/1/jh_out.rla",
            "output_file_basename": "jh_out",
            "output_file_type": ".rla",
            "rend_save_file": "true",
            "rend_timeType": "1",
            "renderable_camera": [
                "Camera001"
            ],
            "width": "640"
        },
        "renderer": {
            "name": "scanline",
            "renderer": "scanline",
            "renderer_orign": "Default_Scanline_Renderer"
        }
    },
    "software_config": {
        "cg_name": "3ds Max",
        "cg_version": "2018",
        "plugins": {}
    },
    "task_info": {
        "cg_id": "2001",
        "channel": "4",
        "distribute_render_node": "3",
        "enable_layered": "0",
        "frames_per_task": "1",
        "input_cg_file": "D:/houdini/CG file/jh/jh.max",
        "input_project_path": "",
        "is_distribute_render": "0",
        "is_layer_rendering": "1",
        "is_picture": "0",
        "job_stop_time": "259200",
        "os_name": "1",
        "platform": "2",
        "pre_frames": "100",
        "project_id": "200953",
        "project_name": "Project1",
        "ram": "64",
        "render_layer_type": "0",
        "stop_after_test": "1",
        "task_id": 28474141,
        "task_stop_time": "0",
        "tiles": "1",
        "tiles_type": "block",
        "time_out": "43200",
        "user_id": 100150764,
        "hardwareConfigId": ""
    },
    "additional_info": {}
}
```


**task.json参数解析**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
software_config | dict | Y | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config)
task_info | dict | Y | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info_render | dict | Y | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info_render对象解析](#scene_info_render)
scene_info | dict | N | 同scene_info_render | 
additional_info | dict | N | 用户自定义参数存放位置(需要使用自定义参数，需要同公司业务人员沟通确认) |  

**<span id="software_config">software_config对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
cg_name | string | Y | 软件名称 | "3ds Max" 
cg_version | string | Y | 软件版本 | "2018"
plugins | object | Y | 插件对象。<br> 为插件名称，value为插件版本 | {}

**<span id="task_info">task_info对象解析</span>**

| 参数                   | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ---------------------- | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num     | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| enable_layered         | string | Y        | 是否开启分层提交, "0":关闭 "1":开启                          | "0"      | "0"                                                          |
| cg_id                  | string | Y        | 渲染软件id."2001": 3ds Max                                   |          | "2001"                                                       |
| ram                    | string | Y        | 内存要求: 64 / 128                                           | “64”     | "64"                                                         |
| os_name                | string | Y        | 渲染操作系统:  "0":Linux; "1": Windows                       | “1”      | "1"                                                          |
| render_layer_type      | string | Y        | 渲染层方式选择:  "0"：renderlayer方式 "1"：rendersetup方式   | “0”      | "0"                                                          |
| is_distribute_render   | string | N        | 是否开启分布式渲染:  "0":关闭 "1":开启                       | “0”      | "0"                                                          |
| input_cg_file          | string | Y        | 渲染场景本地路径                                             |          | "D:/houdini/CG file/jh/jh.max"                               |
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

> **注意**:
>
> - 启动GI设置才可以使用分块渲染，分块渲染模式(tiles_type)和一机多帧渲染模式(frames_per_task)互斥关系，只能同时使用一种模式
> - Max暂时不支持分布式渲染(is_distribute_render)。
> - Max无分层渲染(enable_layered)

**<span id="scene_info_render.layer">scene_info_render对象解析</span>**


参数 | 类型 |  | 说明 | 示例
---|---|---|---|---
renderer | dict | Y | 渲染器 | [见scene_info_render.renderer对象解析](#scene_info_render.renderer) 
common | dict | Y | 场景普通信息 | [见scene_info_render.common对象解析](#scene_info_render.common) 

**<span id="scene_info_render.common">scene_info_render.common对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
CurrentProjectFolder | string | Y | 场景的项目路径 | "C:/Users/dingyutao/Documents/3dsMax" 
Faces | string | N | 场景中的面数 | "3784" 
Peak_Memory | string | Y | 峰值内存 | "702.758" 
Vertices | string | Y | 顶点 | "1914" 
all_camera | list | Y | 所有相机列表 | ["Camera001", "Camera002"，“Camera003”] 
all_element_type | list | Y | 所有支持的渲染元素类型 | [<br/>                ".tga",<br/>                ".tif",<br/>                ".jpg",<br/>                ".png",<br/>                ".exr",<br/>                ".rla",<br/>                ".rpf"<br/>            ] 
all_output_file_type | list | Y | 所有支持的输出文件类型 | [<br/>                ".tga",<br/>                ".tif",<br/>                ".jpg",<br/>                ".png",<br/>                ".exr",<br/>                ".rla",<br/>                ".rpf"<br/>            ] 
animation_range | string | N | 动画帧范围                                       | "0-100" 
cgv | string | Y | Max软件版本 | “2018“ 
element_active | string | Y | 是否输出渲染元素<br>"1":输出；“0”:不输出 | "1" 
element_list | list | Y | 渲染元素列表 | [<br/>				"MultiMatteElement",<br/>				"VRayAlpha",<br/>				"VRayAtmosphere",<br/>				"VRayBackground",<br/>				"MultiMatteElement",<br/>				"VRayAlpha",<br/>				"VRayAtmosphere"<br/>			] 
element_path_list | list | N | 元素路径列表 | [<br/>				"jh_out_MultiMatteElement.rla",				"jh_out_VRayAlpha.rla",<br/>				"jh_out_VRayAtmosphere.rla",<br/>				"jh_out_VRayBackground.rla",<br/>				"jh_out_MultiMatteElement1.rla",<br/>				"jh_out_VRayAlpha2.rla",<br/>				"jh_out_VRayAtmosphere.rla"<br/>			] 
element_type | string | Y | 输出元素类型 | ".rla" 
frames | string | Y | 当前渲染帧 | “0” 
gamma | string | Y | 场景中是否启用了伽玛<br>"1":启用；<br>"0":未启用 | “1” 
gamma_val | string | Y | 伽玛值 | “2.2” 
global_proxy | string | Y | 是否开启全球代理 | “false” 
height | string | Y | 分辨率，高 | "480" 
width | string | Y | 分辨率，宽 | "640" 
in_gamma | string | Y | fileingamma | "2.2" 
is_picture | string | Y | “0: 效果图 "1": 动画图 | "0" 
net_render | string | N | 是否网络渲染<br>"1":开启；<br>"0":未开启 | "0" 
out_gamma | string | Y | fileoutgamma | "2.2" 
output_file | string | Y | 场景中主图输出路径 | "E:/3D_Scene/Max/jh/output/1/jh_out.rla" 
rend_save_file | string |  | 是否保存输出文件 | “true” 
rend_timeType | string |  | rendTimeType | “1” 
renderable_camera | list |  | 需要提交渲染的相机 | ["Camera001"] 

**<span id="scene_info_render.renderer">scene_info_render.renderer对象解析</span>**

| 参数           | 类型   | 是否必须 | 说明                         | 示例                        |
| -------------- | ------ | -------- | ---------------------------- | --------------------------- |
| name           | string | Y        | renderers.production         | "scanline"                  |
| renderer       | string | Y        | classof renderers.production | "scanline"                  |
| renderer_orign | string | Y        | renderer orign               | "Default_Scanline_Renderer" |

### 2.upload.json解析


> 说明: 存放需要上传的资产路径信息


**upload.json示例**
```json
{
    "asset": [
        {
            "server": "/C/3D_Scene/Max/jh/3d66Model-545019-files-1.JPG",
            "local": "D:/houdini/CG file/jh/3d66Model-545019-files-1.JPG"
        },
        {
            "server": "/C/3D_Scene/Max/jh/3d66Model-545019-files-3.jpg",
            "local": "D:/houdini/CG file/jh/3d66Model-545019-files-3.jpg"
        },
        {
            "server": "/C/3D_Scene/Max/jh/3d66Model-545019-files-4.jpg",
            "local": "D:/houdini/CG file/jh/3d66Model-545019-files-4.jpg"
        },
        {
            "server": "/C/3D_Scene/Max/jh/3d66Model-545019-files-6.JPG",
            "local": "D:/houdini/CG file/jh/3d66Model-545019-files-6.JPG"
        },
        {
            "server": "/C/3D_Scene/Max/jh/3d66Model-545019-files-8.jpg",
            "local": "D:/houdini/CG file/jh/3d66Model-545019-files-8.jpg"
        },
        {
            "server": "/C/Program Files/Autodesk/3ds Max 2018/maps/uvwunwrap/UV_Checker.png",
            "local": "C:/Program Files/Autodesk/3ds Max 2018/maps/uvwunwrap/UV_Checker.png"
        },
        {
            "server": "/D/houdini/CG file/jh/jh.max.7z",
            "local": "C:/workspace/max/1593418445/jh.max.7z"
        }
    ],
    "scene": {
        "hash": "8a0d163994a2361808b6f5390967a614",
        "server": "/D/houdini/CG file/jh/jh.max.7z",
        "local": "C:/workspace/max/1593418445/jh.max.7z"
    },
    "vrlmap": [],
    "vrmap": []
}
```


**upload.json参数解析**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
asset | list | Y | 需要上传的资产路径信息 | [见asset对象解析](#asset)
scene | dict | Y | 需要上传的场景压缩文件信息 | 
vrlmap | list | N | 需要上传的灯光缓存信息 | 
vrmap | list | N | 需要上传的发光贴图缓存信息 | 

**<span id="asset">asset对象解析</span>**


参数 | 类型 | 说明 | 示例
---|---|---|---
local | string | 资产本地路径 | "D:/chensr/scene/maya2016_multi_layers_cameras.ma"
server | string | 服务器端相对路径，一般与local保持一致 | "/D/chensr/scene/maya2016_multi_layers_cameras.ma"


### 3.tips.json解析


> 说明: 存放分析出的错误、警告信息


```json
{
    "10035": [
        "not activation camera"
    ],
    "15031": [
        "Missing_Render_Element_Plug_in",
        "Missing_Render_Element_Plug_in",
        "Missing_Render_Element_Plug_in",
        "Missing_Render_Element_Plug_in",
        "Missing_Render_Element_Plug_in",
        "Missing_Render_Element_Plug_in",
        "Missing_Render_Element_Plug_in"
    ]
}
```

