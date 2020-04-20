# SDK 入门教程

### 一. 登陆认证

```
render_para = {
    "domain": "task.renderbus.com",
    "platform": "2",
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

| 参数       | 类型   | 是否必须 | 默认值             | 说明                                                         |
| ---------- | ------ | -------- | ------------------ | ------------------------------------------------------------ |
| domain     | string | 否       | task.renderbus.com | 国内用户：task.renderbus.com，国外用户：task.foxrenderbus.com |
| platform   | string | 否       | 4                  | 平台ID，例如: W2:"2", W6/青云:"6", GPU一区:"21"              |
| access_id  | string | 是       |                    | 授权id，用于标识API调用者身份                                |
| access_key | string | 是       |                    | 授权密钥，用于加密签名字符串和服务器端验证签名字符串         |
| local_os   | string | 否       | windows            | 平台名, 默认"windows", 可选择: "windows"、"linux"            |



### 二. 分析场景

> 分析是独立(Maya / Houdini / Clarisse)


以分析Houdini为例
```
from rayvision_houdini.analyze_houdini import AnalyzeHoudini

analyze_info = {
    "cg_file": r"D:\files\CG FILE\flip_test_slice4.hip",
    "workspace": "c:/workspace",
    "software_version": "17.5.293",
    "project_name": "Project1",
    "plugin_config": {
        'renderman': '22.6'
    }
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
| project_name     | string | 否       | None   | 项目名                                                   |
| plugin_config    | dict   | 否       | None   | 插件配置，如 {'renderman': '22.6'}                       |
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


### 四. 上传
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


### 五. 下载
> 下载现在提供3种方式:

##### 1. 支持自定义下载每个渲染任务底下的层级目录结构

`download(self, task_id_list=None, max_speed=None, print_log=True, download_filename_format="true",local_path=None, server_path=None)`


```
download = RayvisionDownload(api)
download.download(download_filename_format="true", server_path="18164087_muti_layer_test/l_ayer2")
```
注意：此方法在“server_path”不为空的时候则需要提供任务ID，有自定义“server_path”的时候任务ID不生效

##### 2. 实时下载，即任务渲染完成一帧即开始下载

`auto_download(self, task_id_list=None, max_speed=None,
                      print_log=False, sleep_time=10,
                      download_filename_format="true",
                      local_path=None)`


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
                                           local_path=None):`

```
download = RayvisionDownload(api)
download.auto_download_after_task_completed([18164087], download_filename_format="false")
```
说明: 此方法任务ID不能为空



