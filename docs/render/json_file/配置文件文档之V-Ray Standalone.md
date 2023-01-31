**VR Standalone**配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
	"software_config": {
		"plugins": {},
		"cg_version": "standalone_vray5.00.05",
		"cg_name": "VR Standalone"
	},
	"scene_info": {},
	"task_info": {
		"multi_node": "0",
		"tiles": "1",
		"edit_name": "",
		"project_id": "0",
		"job_stop_time": "86400",
		"stop_after_test": "1",
		"concurrent_tasks": "1",
		"frames_per_task": "1",
		"project_name": "",
		"time_out": "43200",
		"cg_id": "2008",
		"input_cg_file": "D:/houdini/cg_file/test2014vr_vraystandaloneaCopy.vrscene",
        "is_distribute_render": "1",
		"distribute_render_node": "3",
        "hardwareConfigId": ""
	}
}
```

**task.json参数解析**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
software_config | object | Y | 渲染环境（软件类型、版本和用到的插件等） | [见software_config对象解析](#software_config) 
task_info | object | Y | 渲染设置（优先帧、渲染帧数、超时时间等） | [见task_info对象解析](#task_info)
scene_info | object | Y | VR Standalone 提交此参数置空字典即可 |  

**<span id="software_config">software_config对象解析</span>**


参数 | 类型 | 是否必须 | 说明 | 示例
---|---|---|---|---
cg_name | string | Y | 软件名称 | "VR Standalone" 
cg_version | string | Y | 软件版本 | "standalone_vray5.00.05" 
plugins | object | N | 插件对象。<br> 为插件名称，value为插件版本 | {}

**<span id="task_info">task_info对象解析</span>**

| 参数                   | 类型   | 是否必须 | 说明                                                         | 默认值   | 示例                                                        |
| ---------------------- | ------ | -------- | ------------------------------------------------------------ | -------- | ----------------------------------------------------------- |
| tiles                  | string | N        | 分块数量，大于1就分块或者分条，等于1 就是单机                | "1"      | "1"                                                         |
| project_id             | string | N        | 项目id                                                       |          | "0"                                                         |
| job_stop_time          | string | N        | 设置帧的超时时间，只会影响当前帧, 单位秒                     | “259200” | "28800"                                                     |
| stop_after_test        | string | N        | 优先渲染完成后是否暂停任务 "1":优先渲染完成后暂停任务 "2".优先渲染完成后不暂停任务 | "2"      | “2”                                                         |
| project_name           | string | N        | 项目名称                                                     | " "      | ""                                                          |
| time_out               | string | N        | 超时时间, 任务变黄 超时提醒，单位秒                          | “43200”  | "43200"                                                     |
| cg_id                  | string | Y        | 渲染软件id."VR Standalone": "2008"                           |          | "2008"                                                      |
| input_cg_file          | string | Y        | 渲染场景本地路径                                             |          | "D:/houdini/cg_file/test2014vr_vraystandaloneaCopy.vrscene" |
| is_distribute_render   | string | N        | 是否开启分布是渲染<br>"1": 开启分布式;<br>"0": 不开启,默认为不开启 | "0"      | "1"                                                         |
| distribute_render_node | string | N        | 分布式渲染节点机数量，请尽量控制在"3"、“6”、“9”。            | “0”      | "3"                                                         |
| user_id                | string | N        | 用户ID                                                       |          |                                                             |
| task_id                | string | N        | 任务号                                                       |          |                                                             |
| ram                    | string | N        | 内存要求: 64 / 128                                           | “64”     | "64"                                                        |

