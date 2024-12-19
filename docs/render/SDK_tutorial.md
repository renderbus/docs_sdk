# SDK 入门教程

### 一. 登陆认证

```
render_para = {
    "domain": "task.renderbus.com",
    "platform": "62",
    "access_id": "xxxx",
    "access_key": "xxxx",
}

api = RayvisionAPI(
        access_id=render_para['access_id'],
        access_key=render_para['access_key'],
        domain=render_para['domain'],
        platform=render_para['platform']
    )
```

RayvisionAPI 参数说明:

| 参数       | 类型   | 是否必须 | 默认值                | 说明                                                 |
| ---------- | ------ | -------- |--------------------|----------------------------------------------------|
| domain     | string | 否       | task.renderbus.com | 国内用户：task.renderbus.com，国外用户:jop.foxrenderfarm.com |
| platform   | string | 否       | 62                 | 平台ID，例如: W3:"62",  GPU一区:"21"           |
| access_id  | string | 是       |                    | 授权id，用于标识API调用者身份                                  |
| access_key | string | 是       |                    | 授权密钥，用于加密签名字符串和服务器端验证签名字符串                         |



### 二. 分析场景

> 分析是独立(Maya / Houdini / Clarisse)


以分析Houdini为例
```
from rayvision_houdini.analyze_houdini import AnalyzeHoudini

analyze_info = {
    "cg_file": r"D:\files\CG FILE\flip_test_slice4.hip",
    "workspace": "c:/workspace",
    "software_version": "17.5",
    "project_name": "Project1",
    "plugin_config": {
        'renderman': '22.6'
    },
    "platform": "21"
}
analyze_obj = AnalyzeHoudini(**analyze_info)
analyze_obj.analyse()
```

说明：

- "workspace"用来控制生成json文件位置,如果不设置workspace,默认生成位置:
  
   ```
   windows : os.environ["USERPROFILE"] + "renderfarm_sdk"  
   Linux：os.environ["HOME"] + “renderfarm_sdk”
   ```
   
- 分析生成的task.json中“task_id”、“user_id”、"project_id"为空，用户可以选择自己写   入这三个参数 ,或者在check的时候自动写入此3个参数。


AnalyzeHoudini 参数说明:

| 参数             | 类型   | 是否必须 | 默认值 | 说明                                                     |
| ---------------- | ------ | -------- | ------ | -------------------------------------------------------- |
| cg_file          | string | 是       |        | 需要分析的场景文件                                       |
| software_version | string | 是       |        | 场景使用的软件版本                                       |
| project_name     | string | 否       |        | 项目名                                                   |
| plugin_config    | dict   | 否       |        | 插件配置，如 {'renderman': '22.6'}                       |
| workspace        | string | 否       | None   | 分析生成json文件位置(避免重复会自动添加一个时间戳文件夹) |



### 三. 添加特殊字段和更新json文件接口
> 只支持对task.json和upload.json文件参数的更新和修改.

##### 1. 修改task.json

`update_task_info(update_info, task_path)`

![task_info](https://blog-tao625.oss-cn-shenzhen.aliyuncs.com/izone/blog/20200402094336.png)

```
from rayvision_api.utils import update_task_info, append_to_task, append_to_upload
update_task = {
    "pre_frames": "100",  # 设置优先渲染首帧
    "stop_after_test": "1"  # 渲染完优先帧后停止渲染
}
update_task_info(update_task, analyze_obj.task_json)
```

##### 2. task.json添加自定义参数

> 添加的自定义参数将会集成到key为"additional_info"的字典中  
 【注意】：自定义参数不会立即生效，如果有这种需求的客户请联系公司客服。

![additional_info](https://blog-tao625.oss-cn-shenzhen.aliyuncs.com/izone/blog/20200402094058.png)

```
custom_info_to_task = {
    "env": "houdini_env"
}
append_to_task(custom_info_to_task, analyze_obj.task_json)
```

##### 3. 自定义upload.json
> 支持自定义添加文件路径到upload.json，会自动去重
`append_to_upload(files_paths, upload_path)`

![upload](https://blog-tao625.oss-cn-shenzhen.aliyuncs.com/izone/blog/20200402094235.png)

```
custom_info_to_upload = [
    r"D:\houdini\CG file\Cam003\cam.abc",
]
append_to_upload(custom_info_to_upload, analyze_obj.upload_json)
```

### 四. 设置硬件配置和校验json文件

硬件配置由参数"hardwareConfigId"控制, 可以通过api接口获取("API接口使用方法" --> "获取平台硬件配置信息")

通过设置hardware_config的 `model`, `ram`, `gpuNum` 来指定硬件配置
```
hardware_config = {
    "model": "Default",  # CPU平台: 填Default , GPU平台: 填 1080Ti 或 2080Ti
    "ram": "64GB",  # 内存: 64GB or 128GB
    "gpuNum": None  # GPU平台需要输入参数 例："2*GPU", CPU平台则填写 None
}
```

校验的时候会根据传入的hardware_config设置硬件配置, 还会检查task.json中是 否有`user_id`,`project_id`,`task_id`,
如果没有则会调用接口从服务器获取相关参数并写入task.json

```
check_obj = RayvisionCheck(api, analyze_obj)
task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)
```

### 五. 上传
> 现在提供2种方式:

##### 1.先上传json文件再根据“upload.json”上传资源文件:

先上传四个json文件，然后传输引擎自动根据upload.json文件开始上传场景、资源等文件

`upload(self,task_id,task_json_path,tips_json_path,asset_json_path,upload_json_path, max_speed=None)`

```
CONFIG_PATH = [
    r"C:\workspace\work\tips.json",
    r"C:\workspace\work\task.json",
    r"C:\workspace\work\asset.json",
    r"C:\workspace\work\upload.json",
]
upload_obj = RayvisionUpload(api)
upload_obj.upload(str(task_id), *CONFIG_PATH)
```

##### 2.上传json文件和用户资源完全独立:

上传资源：`upload_asset(self, upload_json_path, max_speed=None, is_db=True)`

上传json文件: `upload_config(self, task_id, config_file_list, max_speed=None)`

```
CONFIG_PATH = [
    r"C:\workspace\work\tips.json",
    r"C:\workspace\work\task.json",
    r"C:\workspace\work\asset.json",
]
UPLOAD = RayvisionUpload(api)
UPLOAD.upload_asset(r"C:\workspace\work\upload.json", is_db=False)
UPLOAD.upload_config("5165465", CONFIG_PATH)
```
【注意】:上传json文件的时候需要任务ID，上传资源文件则不需要任务ID;  
`upload_asset`中`is_db`参数用来控制是否需要使用本地数据库，默认使用本地数据库;

### 六. 提交任务

```
api.submit(int(task_id))
```


### 七. 下载
> 下载现在提供3种方式:

##### 1. 支持自定义下载每个渲染任务底下的层级目录结构

`download(self, task_id_list=None, max_speed=None, 
                print_log=True, download_filename_format="true",
                local_path=None, server_path=None,
                engine_type="aspera", server_ip=None, server_port=None,
                network_mode=0, proxy_ip=None, proxy_port=None)`

```
download = RayvisionDownload(api)
download.download(download_filename_format="true", server_path="18164087_muti_layer_test/l_ayer2")
```
注意：此方法在“server_path”不为空的时候则需要提供任务ID，有自定义“server_path”的时候任务ID不生效

##### 2. 实时下载，即任务渲染完成一帧即开始下载

`auto_download(self, task_id_list=None, max_speed=None,
                      print_log=False, sleep_time=10,
                      download_filename_format="true",
                      local_path=None,engine_type="aspera", 
                      server_ip=None, server_port=None,
                     network_mode=0, is_test_stop=False, proxy_ip=None, proxy_port=None,enable_hash=False)`


```
download = RayvisionDownload(api)
download.auto_download([18164087], download_filename_format="false")
```
说明：此方法任务ID不能为空

##### 3. 任务所有帧渲染完成才开始下载

`auto_download_after_task_completed(self, task_id_list=None,
                                           max_speed=None, print_log=True,
                                           sleep_time=10,
                                           download_filename_format="true",
                                           local_path=None,
                                           engine_type="aspera", server_ip=None, server_port=None,
                                           network_mode=0,  is_test_stop=False, proxy_ip=None, proxy_port=None,enable_hash=False):`

```
download = RayvisionDownload(api)
download.auto_download_after_task_completed([18164087], download_filename_format="false")
```
说明: 此方法任务ID不能为空

### 八. 附加: 传输配置文件


**1. 传输配置设置包括:**

选择数据库类型，数据库文件路径设置，传输日志路径设置

**2. 默认使用的传输配置文件：db_config.ini， 如下图**

   ![db_config.ini](https://blog-tao625.oss-cn-shenzhen.aliyuncs.com/izone/blog/20200415114705.png)

   

db_config.ini 样例:

```ini
[TRANSFER_LOG_PATH]
transfer_log_path =

[DATABASE_CONFIG]
on = true
type = sqlite
db_path =D:\test\upload

[REDIS]
host = 127.0.0.1
port = 6379
password =
table_index = 0
timeout = 5000

[SQLITE]
temporary = false
```

用户也可根据默认配置为模板修改配置并指定数据库配置文件位置,指定自定义配置文件方法如下

```
from rayvision_sync.upload import RayvisionUpload

UPLOAD = RayvisionUpload(api, db_config_path=r"D:\test\upload\db_config.ini")
```

**3. db_config.ini 参数说明:**

| 参数              | 说明                                                         | 默认值    |
| ----------------- | ------------------------------------------------------------ | --------- |
| transfer_log_path | 传输引擎日志文件路径                                         | 无        |
| on                | 是否使用本地数据库, true / false: 是 / 否                    | true      |
| type              | 选择数据库, 目前仅支持"redis" 和 "sqlite"                    | sqlite    |
| db_path           | 数据库文件保存路径                                           | 无        |
| host              | redis数据库host                                              | 127.0.0.1 |
| port              | redis数据库port                                              | 6379      |
| password          | redis数据库password                                          | 无        |
| table_index       | redis数据库保存文件的仓库名，选择redis数据库则不能为空       | 无        |
| timeout           | redis客户端连接超时时间,客户端在这段时间内没有发出任何指令，那么关闭该连接,单位ms | 5000      |
| temporary         | 使用sqlite数据库时，上传的记录数据是否在完成上传后删除, 默认"false"不删除 | false     |


**4. transfer_log_path 和 db_path 取值的优先级规则如下：**

- db_config.ini有设置自定义路径则优先使用自定义路径；

- 无自定义路径则如下:

  transfer_log_path

  > - 优先使用环境变量'RAYVISION_LOG'
  >
  > - 次之使用:  
  >
  >     window: 环境变量"USERPROFILE"位置/<renderfarm_sdk>  
  >     Linux：环境变量"HOME"位置/<renderfarm_sdk>  

  db_path

  > - 优先使用环境变量'RAYVISION_LOG'
  >
  > - 次之使用:  
  >
  >     window: 环境变量"USERPROFILE"位置/<renderfarm_sdk>  
  >     Linux：环境变量"HOME"位置/<renderfarm_sdk> 

