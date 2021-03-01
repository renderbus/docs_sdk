Nuke配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
	"concurrent_tasks": "1",
	"software_config": {
		"cg_version": "12.1",
		"cg_name": "Nuke",
		"plugins": {}
	},
	"task_info": {
		"graphics_cards_num": "2",
		"tiles": "1",
		"project_name": "",
		"concurrent_tasks": "1",
		"edit_name": "test02",
		"frames_per_task": "1",
		"ram": "64",
		"job_stop_time": "259200",
		"stop_after_test": "1",
		"multi_node": "0",
		"project_id": "0",
		"time_out": "86400",
		"cg_id": "2015",
		"input_cg_file": "D:/Myx/nuke_project/test_new_pipeline.nk",
		"pre_frames": "100"
	},
	"scene_info": {
		"write_nodes": [
			{
				"node": "Write3",
				"inputs": "1",
				"out_file": "D:/Myx/nuke_project/output/test_bb.mov",
				"renderable": "1",
				"file_type": "mov",
				"height": "1200",
				"width": "1920",
				"proxy": "",
				"render_mode": "0",
				"option": "0",
				"frames": "1-1[1]",
				"use_proxy": "False"
			}
		]
	}
}
```

**task.json参数解析**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
software_config | object | Y | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config)
task_info | object | Y | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info_render | object | Y | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info_render对象解析](#scene_info_render)

**<span id="software_config">software_config对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
cg_name | string | Y | 软件名称 | "Nuke" 
cg_version | string | Y | 软件版本 | "12.1" 
plugins | object | Y | 插件对象。<br> 为插件名称，value为插件版本 | {}

**<span id="task_info">task_info对象解析</span>**

| 参数               | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                         |
| ------------------ | ------ | -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| graphics_cards_num | string | Y        | 1: 开启单卡渲染 2: 开启双卡渲染                              | "2"      | “2”                                                          |
| cg_id              | string | Y        | 渲染软件id."Nuke": "2015"                                    |          | "2015"                                                       |
| ram                | string | Y        | 内存要求: 64 / 128                                           | “64”     | "64"                                                         |
| concurrent_tasks   | string | Y        |                                                              |          |                                                              |
| input_cg_file      | string | Y        | 渲染场景本地路径                                             |          | "D:/Myx/nuke_project/test_new_pipeline.nk"                   |
| job_stop_time      | string | Y        | 设置帧的超时时间，只会影响当前帧, 单位秒                     | “259200” | "28800"                                                      |
| user_id            | string | N        | 用户ID                                                       |          |                                                              |
| pre_frames         | string | Y        | 优先渲染(优先帧不建议自定义多个单独帧)                       | “000”    | "000:1,3-4[1]" 表示： 优先渲染首帧：否 优先渲染中间帧：否 优先渲染末帧：否 优先渲染自定义帧：1,3-4[1] |
| tiles              | string | Y        | 分块数量，大于1就分块或者分条，等于1 就是单机                | "1"      | "1"                                                          |
| project_id         | string | Y        | 项目id                                                       |          | "0"                                                          |
| project_name       | string | Y        | 项目名称                                                     | " "      | ""                                                           |
| frames_per_task    | string | Y        | 一机渲多帧的帧数量                                           | "1"      | "1"                                                          |
| stop_after_test    | string | Y        | 优先渲染完成后是否暂停任务 "1":优先渲染完成后暂停任务 "2".优先渲染完成后不暂停任务 | "2"      | “2”                                                          |
| task_id            | string | Y        | 任务号                                                       |          |                                                              |
| task_stop_time     | string | Y        | 大任务超时停止 单位秒,"0"表示不限制                          | "0"      | "86400"                                                      |
| time_out           | string | Y        | 超时时间 单位秒                                              | “43200”  | "43200"                                                      |

**<span id="scene_info_render">scene_info_render对象解析</span>**


**参数** | **类型** | **是否必须** | **说明** | **示例** 
---|---|---|---|---
**write_nodes** | **object** | **Y** | **层信息** | **[见scene_info_render.layer对象解析](#scene_info_render.layer)** 

**<span id="scene_info_render.write_nodes">scene_info_render.write_nodes对象解析</span>**


参数 | 类型 |  | 说明 | 示例
---|---|---|---|---
node | string | Y | 节点名称 | "Write3" 
proxy | string | N | 代理输出路径 | "P:/UW/Update_17/Shot_2/Shot_02_####.png" 
frames | string | Y | 是否使用默认相机，默认值为‘1’(使用默认相机) | "1-1[1]" 
out_file | string | N | 输出路径 | "P:/UW/Update_17/Shot_2/Shot_02_####.png" 
inputs | string | N | 当前输出节点是否有输入源 | "0": 无， “1”：有 
file_type | string | N | 输出文件格式 | "mov" 
render_mode | string | Y | 渲染输出模式，默认为0;<br />0 use scene settings；<br />1  render full resolution；<br />2 render using proxies | “0” 
width | string | Y | 输出分辨率宽 | "9348" 
height | string | Y | 输出分辨率高 | "2242" 
use_proxy | string | N | 场景是否开启了代理模式:<br /> "False"：不开启；<br />"True"：开启; | "False" 
renderable | string | Y | 是否渲染:<br />“0”: 否<br />“1”：是 | "1" 
option | string | Y | 渲染类型:<br />"-1":正常渲染，单机单帧渲染;<br />"0":输出视频类型，会单机渲染所有帧; | "0" 

