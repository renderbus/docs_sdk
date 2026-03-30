Unreal Engine 配置文件文档
======

> 分析：我们将场景中需要的信息分析出来并保存到task.json, asset.json, upload.json, tips.json中，以便进一步解析和处理


### 1.task.json解析


> 说明: 存放场景分析结果、渲染设置等信息


**task.json示例**


```json
{
    "scene_info_render": {
      "all_game_map": [
        "/Game/Levels/MH_Ragdoll/MH_Ragdoll",
        "/Game/Levels/MH_Ragdoll/MH_Ragdoll_AI",
      ],
      "all_movie_pipline_queue": [
        {
          "renderable": "1",
          "render_job": [
            {
              "origin_height": "1080", 
              "frames": "0-1[1]",
              "origin_width": "1920",
              "is_enable": "1",
              "file_name_format": "{sequence_name}.{frame_number}",
              "job_sequence": "/Game/Sequencer/MetaHumanSample_Sequence",
              "start_frame": "0",
              "job_map": "/Game/Levels/MetaHumanSample",
              "custom_end_frame": "0",
              "format_type": [
                "JPG"
              ],
              "job_num": "0",
              "job_name": "MetaHumanSample_Sequence",
              "end_frame": "1562",
              "width": "1920",
              "custom_start_frame": "0",
              "job_valid": "1",
              "flush_disk_writes_per_shot": false,
              "height": "1080"
            },
            {
              "origin_height": "1080",
              "frames": "0-1[1]",
              "origin_width": "1920",
              "is_enable": "1",
              "file_name_format": "{sequence_name}.{frame_number}",
              "job_sequence": "/Game/Sequencer/MetaHumanSample_Sequence",
              "start_frame": "0",
              "job_map": "/Game/Levels/MetaHumanSample",
              "custom_end_frame": "0",
              "format_type": [
                "JPG"
              ],
              "job_num": "1",
              "job_name": "MetaHumanSample_Sequence",
              "end_frame": "1562",
              "width": "1920",
              "custom_start_frame": "0",
              "job_valid": "1",
              "flush_disk_writes_per_shot": false,
              "height": "1080"
            }
          ],
          "name": "/Game/JOB/EditorMoviePipelineQueue",
          "all_format_type": [
            "PNG",
            "EXR",
            "TIFF",
            "jpg"
          ]
        }
      ],
      "render_mod": "mrq",
      "all_level_sequence": [
        "/Game/Sequencer/MetaHumanSample_Sequence"
      ]
    }, 
    "task_info": {
        "is_layer_rendering": "1", 
        "cg_id": "2020", 
        "ram": "64", 
        "os_name": "1", 
        "render_layer_type": "0", 
        "is_distribute_render": "0", 
        "input_cg_file": "D:/files/CG file/test.uproject", 
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
        "cg_version": "5.4.4", 
        "cg_name": "Unreal Engine", 
        "plugins": {},
        "cg_inst_dir": "C:/Program Files/Epic Games/UE_5.4"
    }
}
```


**task.json参数解析**


| 参数                | 类型     | 说明                      | 示例                                       |
| ----------------- | ------ | ----------------------- | ---------------------------------------- |
| software_config   | object | 渲染环境（软件类型、版本和用到的插件等）    | [见software_config对象解析](#software_config) |
| task_info         | object | 渲染设置（优先帧、渲染帧数、超时时间等）    | [见task_info对象解析](#task_info)             |
| scene_info_render | object | 场景的分析结果（场景中的渲染节点、输出路径等） | [见scene_info_render对象解析](#scene_info_render) |


**<span id="software_config">software_config对象解析</span>**


| 参数                   | 类型     | 说明                           | 示例                                   |
| -------------------- | ------ | ---------------------------- | ------------------------------------ |
| cg_name              | string | 软件名称                         | "Unreal Engine                       |
| cg_version           | string | 软件版本                         | "5.4.4"                              |
| plugins              | object | 插件对象。<br>key为插件名称，value为插件版本 | {}                                   |
| cg_inst_dir | string | 本地UE安装目录                     | "C:/Program Files/Epic Games/UE_5.4" |


**<span id="task_info">task_info对象解析</span>**


| 参数                     | 类型     | 说明                                       | 示例                                       |
| ---------------------- | ------ | ---------------------------------------- | ---------------------------------------- |
| is_layer_rendering     | string | 是否开启分层。<br/>"0":关闭<br/>"1":开启<br/>       | "1"                                      |
| cg_id                  | string | 渲染软件id."2020": Ue                        | "2020"                                   |
| ram                    | string | 内存要求。64/128                              | "64"                                     |
| os_name                | string | 渲染操作系统, "0":Linux; "1": Windows<br/>( 仅支持Windows ) | "0"                                      |
| render_layer_type      | string | 渲染层方式选择。<br/>"0"：renderlayer方式<br/>"1"：rendersetup方式 | "0"                                      |
| is_distribute_render   | string | 是否开启分布式渲染。<br/>"0":关闭<br/>"1":开启         | "0"                                      |
| input_cg_file          | string | 渲染场景本地路径                                 |                                          |
| job_stop_time          | string | 小任务超时停止, 单位秒                             | "28800"                                  |
| user_id                | string | 用户ID                                     |                                          |
| pre_frames             | string | 优先渲染                                     | "000:1,3-4[1]" 表示：<br>优先渲染首帧：否<br>优先渲染中间帧：否<br>优先渲染末帧：否<br>优先渲染自定义帧：1,3-4[1] |
| platform               | string | 提交平台                                     | "2"                                      |
| is_picture             | string | 是否效果图                                    | "0"                                      |
| project_id             | string | 项目id                                     |                                          |
| channel                | string | 提交方式。"4":API/SDK提交                       | "4"                                      |
| tiles_type             | string | "block(分块),strip(分条)"                    | "block"                                  |
| tiles                  | string | 分块数量，大于1就分块或者分条，等于1 就是单机                 | "1"                                      |
| project_name           | string | 项目名称                                     | "test"                                   |
| distribute_render_node | string | 分布式渲染机器数                                 | "3"                                      |
| frames_per_task        | string | 一机渲多帧的帧数量                                | "1"                                      |
| stop_after_test        | string | 优先渲染完成后是否暂停任务<br>"1":优先渲染完成后暂停任务<br>"2".优先渲染完成后不暂停任务 |                                          |
| input_project_path     | string | 项目路径，如用户未设置传空字符串                         |                                          |
| task_id                | string | 任务号                                      |                                          |
| task_stop_time         | string | 大任务超时停止 单位秒                              | "86400"                                  |
| time_out               | string | 超时时间 单位小时                                | "12"                                     |


**<span id="scene_info_render">scene_info_render对象解析</span>**


| 参数                      | 类型            | 说明             | 示例                                       |
| ----------------------- | ------------- | -------------- | ---------------------------------------- |
| all_game_map            | array<string> | 工程中所有地图(关卡)    | ["/Game/Levels/MH_Ragdoll/MH_Ragdoll", "/Game/Levels/MH_Ragdoll/MH_Ragdoll_AI"] |
| all_movie_pipline_queue | object        | 工程中所有渲染队列(MRQ) | [见scene_info_render.all_movie_pipline_queue对象解析](#scene_info_render.all_movie_pipline_queue) |
| render_mod              | string        | 渲染模式(MRQ//MSC) | "mrq"                                    |
| all_level_sequence      | array<string> | 工程中所有序列        | ["/Game/Sequencer/MetaHumanSample_Sequence"] |


**<span id="scene_info_render.all_movie_pipline_queue">scene_info_render.all_movie_pipline_queue对象解析</span>**


| 参数              | 类型            | 说明       | 示例                                       |
| --------------- | ------------- | -------- | ---------------------------------------- |
| renderable      | string        | 渲染层开关    | "1"                                      |
| render_job      | object        | 渲染任务     | [见scene_info_render.all_movie_pipline_queue.render_job对象解析](#scene_info_render.all_movie_pipline_queue.render_job) |
| name            | string        | 渲染队列名    | "/Game/JOB/EditorMoviePipelineQueue"     |
| all_format_type | array<string> | 渲染输出格式列表 | ["PNG", "EXR", "TIFF", "jpg"]            |


**<span id="scene_info_render.all_movie_pipline_queue.render_job">scene_info_render.all_movie_pipline_queue.render_job对象解析</span>**

| 参数                         | 类型            | 说明                    | 示例                                  |
| -------------------------- | ------------- | --------------------- | ----------------------------------- |
| origin_width               | string        | 场景设置分辨率(宽)            | "1920"                              |
| origin_height              | string        | 场景设置分辨率(高)            | "1080"                              |
| width                      | string        | 渲染输出分辨率(宽)            | "1920"                              |
| height                     | string        | 渲染输出分辨率(高)            | "1080"                              |
| is_enable                  | string        | job的可渲染开关(MRQ设置)      | "1"                                 |
| custom_start_frame         | string        | 序列开始帧(分析脚本解析数据)       | "0"                                 |
| custom_end_frame           | string        | 序列结束帧(分析脚本解析数据)       | "150"                               |
| start_frame                | string        | 渲染任务开始帧               | "0"                                 |
| end_frame                  | string        | 渲染任务结束帧               | "1"                                 |
| frames                     | string        | 渲染帧范围描述字符             | "1-10[1]"                           |
| file_name_format           | string        | 输出文件命名模板(MRQ设置)       | "{sequence_name}.{frame_number}"    |
| job_sequence               | string        | 任务关联序列                | "/Game/Sequences/Sun/Seq_MasterSun" |
| job_map                    | string        | 任务关联地图(关卡)            | "/Game/Main"                        |
| format_type                | array<string> | 输出图片格式列表              | ["JPG"]                             |
| job_num                    | string        | 任务序号（MRQ 队列中的索引）      | "0"                                 |
| job_name                   | string        | 任务名称                  | "Seq_MasterSun"                     |
| job_valid                  | string        | 任务是否有效（1=有效，0=无效）     | "1"                                 |
| flush_disk_writes_per_shot | bool          | 每个 Shot 渲染完成后是否立即刷写磁盘 | false                               |

### 2.upload.json解析


> 说明: 存放需要上传的资产路径信息


**upload.json示例**
```json
{
  "asset": [
    {
      "local": "D:/files/CG file/test.uproject",
      "server": "/D/files/CG file/test.uproject"
    }
  ]
}
```


**upload.json参数解析**


| 参数    | 类型     | 说明          | 示例                   |
| ----- | ------ | ----------- | -------------------- |
| asset | object | 需要上传的资产路径信息 | [见asset对象解析](#asset) |


**<span id="asset">asset对象解析</span>**


| 参数     | 类型     | 说明                    | 示例                               |
| ------ | ------ | --------------------- | -------------------------------- |
| local  | string | 资产本地路径                | "D:/files/CG file/test.uproject" |
| server | string | 服务器端相对路径，一般与local保持一致 | "/D/files/CG file/test.uproject" |


### 3.tips.json解析


> 说明: 存放分析出的错误、警告信息


```json
{}
```

