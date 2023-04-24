## 常用参数设置

### 包名（PACKAGE_NAME）

> 设定了日志保存的名称和gitlab 进行自动化部署(CD)打包的包名，如
>
> ​      PACKAGE_NAME = "rayvision_clarisse"

### DCC软件的ID映射

```python
DCC_ID_MAPPINGS = {
        'maya': 2000,
        '3ds Max': 2001,
        'lightwave': 2002,
        'arnold': 2003,
        'houdini': 2004,
        'cinema4d': 2005,
        'softimage': 2006,
        'blender': 2007,
        'vr_standalone': 2008,
        'mr_standalone': 2009,
        'clarisse': 2013,
        'octane_render': 2014
    }
```

### 请求头(HEADERS)

```python
HEADERS = {
        'accessId': '',
        'channel': '4',
        'platform': '',
        'UTCTimestamp': '',
        'nonce': '',
        'signature': '',
        'version': '1.0.0',
        'Content-Type': 'application/json'
    }
```

### task.json默认参数

```python
TASK_INFO = {
        'task_info': {
            'input_cg_file': '',
            'is_picture': '0',
            'task_id': '',
            'frames_per_task': '1',
            'pre_frames': '000',
            'job_stop_time': '86400',
            'task_stop_time': '259200',
            'time_out': '43200',
            'stop_after_test': '2',
            'project_name': '',
            'project_id': '',
            'channel': '4',
            'cg_id': '',
            'platform': '',
            'tiles_type': 'block',
            'tiles': '1',
            'is_layer_rendering': '1',
            'is_distribute_render': '0',
            'distribute_render_node': '3',
            'input_project_path': '',
            'render_layer_type': '0',
            'user_id': '',
            'os_name': '1',
            'ram': '64'
        },
        'software_config': {},
        'scene_info': {},
        'scene_info_render': {}
    }
```

### 任务结束状态码(TASK_END_STATUS_CODE_LIST)

```python
TASK_END_STATUS_CODE_LIST = ['10', '20', '23', '25', '30', '35', '45']
```

### 任务状态码

| **状态码** | **状态码描述**                               | **备注**            |
| ---------- | -------------------------------------------- | ------------------- |
| 0          | 等待中                                       | WAITING             |
| 5          | 渲染中                                       | RENDERING           |
| 8          | 针对预处理任务，开始的预处理，状态为预处理中 | PRE_RENDERING       |
| 10         | 停止                                         | STOP                |
| 20         | 停止(欠费)                                   | ARREARAGE_STOP      |
| 23         | 超时停止                                     | TIME_OUT_STOP       |
| 25         | 已完成                                       | FINISHED            |
| 30         | 已完成但有失败帧                             | FINISHED_HAS_FAILED |
| 35         | 放弃                                         | ABANDON             |
| 40         | 测试完成                                     | FINISHED_TEST       |
| 45         | 失败                                         | FAILED              |
| 50         | 分析中                                       | ANALYSE             |
| 100        | 状态更新中                                   | UPDATING            |

### 帧状态码

| **状态码** | **状态码描述**       | **备注**          |
| ---------- | -------------------- | ----------------- |
| 1          | 等待执行             | WAITING           |
| 2          | 正在执行             | STARTED           |
| 3          | 停止                 | ABORTED           |
| 4          | 完成                 | DONE              |
| 5          | 错误(失败)           | ERROR             |
| 6          | 等待预处理完成       | PREDONEWAITING    |
| 7          | 等待光子帧渲染完成   | PHOTONDONEWAITING |
| 9          | 等待光子作业渲染完成 | PREDONEJOBWAITING |
| 10         | 等待结算作业渲染完成 | GOPJOBWAITING     |
| 11         | 任务超时             | TIMEOUT           |

