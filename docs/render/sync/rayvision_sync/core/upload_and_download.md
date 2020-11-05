### 上传

#### 1. Upload文件切割

> 有的upload.json文件可能有多达数十万个资源, 这时候可能就需要对upload文件进行切割。


```
def cutting_upload(upload_path, max_resources_number=None, after_cutting_position=None):
    """Cut upload.json according to the number of custom files.

    Args:
        upload_path (str): upload.json absolute path.
        max_resources_number (int): Maximum number of resources in each upload file.
        after_cutting_position (str): save location of upload file generated after cutting.

    Returns:
        list: Absolute path of all upload files generated after cutting, excluding original upload files.
            e.g.:
                ['D:\\test\\test_upload\\1586250829\\upload_1.json',
                'D:\\test\\test_upload\\1586250829\\upload_2.json']

    """
```
使用样例:
```
from rayvision_sync.utils import cutting_upload
upload_pool = cutting_upload(r"D:\test\test_upload\1586250829\upload.json", max_resources_number=800)
```

#### 2. 多线程上传

> 多个upload可以使用多线程并发上传

```
def multi_thread_upload(self, upload_pool, thread_num=10):
    """muti thread upload resource.

    Args:
        upload_pool (list or tuple): Store a list or ancestor of uploaded files.
        thread_num (int): Number of threads, 10 threads are enabled by default.
    """
```

使用样例：

```
from rayvision_api import RayvisionAPI
from rayvision_sync.upload import RayvisionUpload

api = RayvisionAPI(access_id="xxxxx",
                   access_key="xxxxx",
                   domain="task.renderbus.com",
                   platform="2")

UPLOAD = RayvisionUpload(api)
UPLOAD.multi_thread_upload(upload_pool, thread_num=20)
```

#### 3. 使用线程池控制上传

> 并发上传还可以使用线程池的方式


```
def thread_pool_upload(self, upload_pool, pool_size=10):
    """Thread pool upload.

    Args:
        upload_pool (list or tuple): store a list or ancestor of uploaded files.
        pool_size (int): thread pool size, default is 10 threads.

    """
    pool = ThreadPoolExecutor(pool_size)
    for i in range(len(upload_pool)):
        pool.submit(self.upload_asset, upload_pool[i])
    pool.shutdown(wait=True)
```

使用样例：

```
from rayvision_api import RayvisionAPI
from rayvision_sync.upload import RayvisionUpload

api = RayvisionAPI(access_id="xxxxx",
                   access_key="xxxxx",
                   domain="task.renderbus.com",
                   platform="2")

UPLOAD = RayvisionUpload(api)
UPLOAD.thread_pool_upload(upload_pool, pool_size=20)
```

#### 4. 只上传upload里面资源

> 上传upload资源用户只需要登录即可

```
def upload_asset(self, upload_json_path, max_speed=None, is_db=True):
    """Run the cmd command to upload asset files.

    Args:
        upload_json_path (str): Path to the upload.json file.
        max_speed (str): Maximum transmission speed, default value
            is 1048576 KB/S.
        is_db (bool): Whether to produce local database record upload file.

    Returns:
        bool: True is success, False is failure.

    """
```

使用样例：

```
from rayvision_api import RayvisionAPI
from rayvision_sync.upload import RayvisionUpload

api = RayvisionAPI(access_id="xxxxx",
                   access_key="xxxxx",
                   domain="task.renderbus.com",
                   platform="2")
                   
UPLOAD = RayvisionUpload(api)
UPLOAD.upload_asset(r"D:\test\test_upload\1586250829\upload.json")
```

#### 5. 只上传分析生成的json配置文件

```
def upload_config(self, task_id, config_file_list, max_speed=None):
    """Run the cmd command to upload configuration profiles.

    Args:
        task_id (str): Task id.
        config_file_list (list): Configuration file path list.
        max_speed (str): Maximum transmission speed, default value
            is 1048576 KB/S.

    Returns:
        bool: True is success, False is failure.

    """
```

使用样例:

```
from rayvision_api import RayvisionAPI
from rayvision_sync.upload import RayvisionUpload

api = RayvisionAPI(access_id="xxxxx",
                   access_key="xxxxx",
                   domain="task.renderbus.com",
                   platform="2")

CONFIG_PATH = [
    r"C:\workspace\work\tips.json",
    r"C:\workspace\work\task.json",
    r"C:\workspace\work\asset.json",
    r"C:\workspace\work\upload.json",
]

UPLOAD = RayvisionUpload(api)
UPLOAD.upload_config("5165465", CONFIG_PATH)
```

#### 6. 先上传配置文件然后自动根据upload文件上传资源(任务号必须)

```
def upload(self, task_id, task_json_path, tips_json_path, asset_json_path,
           upload_json_path, max_speed=None):
    """Run the cmd command to upload the configuration file.

    Args:
        task_id (str, optional): Task id.
        task_json_path (str, optional): task.json file absolute path.
        tips_json_path (str, optional): tips.json file absolute path.
        asset_json_path (str, optional): asset.json file absolute path.
        upload_json_path (str, optional): upload.json file absolute path.
        max_speed (str): Maximum transmission speed, default value
            is 1048576 KB/S.

    Returns:
        bool: True is success, False is failure.

    """
```

使用样例:

```
from rayvision_api import RayvisionAPI
from rayvision_sync.upload import RayvisionUpload

api = RayvisionAPI(access_id="xxxxx",
                   access_key="xxxxx",
                   domain="task.renderbus.com",
                   platform="2")

CONFIG_PATH = [
    r"C:\workspace\work\tips.json",
    r"C:\workspace\work\task.json",
    r"C:\workspace\work\asset.json",
    r"C:\workspace\work\upload.json",
]

upload_obj = RayvisionUpload(api)
upload_obj.upload("5165465", **CONFIG_PATH)
```

#### 7. append_to_upload:自定义upload.json文件

```
from rayvision_api import RayvisionAPI
from rayvision_sync.upload import RayvisionUpload
from rayvision_api.utils import append_to_upload

api = RayvisionAPI(access_id="xxxxx",
                   access_key="xxxxx",
                   domain="task.renderbus.com",
                   platform="2")
UPLOAD = RayvisionUpload(api)

# 1. 可以接受列表，列表可以传入文件夹路径或者文件路径
custom_info_to_upload = [
    r"E:\fang\ass_test\static_ass.ass",
    r"E:\fang",
    r"D:\houdini\CG file\F"
]
# 2.也可以接收单独的一个字符串
# custom_info_to_upload = r"D:\houdini\CG file\katana_file"

# 需要指定一个存在的upload.json路径
append_to_upload(custom_info_to_upload, r"D:\test\upload.json")
UPLOAD.upload_asset(r"D:\test\upload.json")
```

#### 8. 修改上传服务地址

> 上传服务地址一般是不需要修改，如果用户有特殊需要修改上传服务地址，可以按如下操作进行设置:

#####    1. 定位到“rayvision_sync”模块以下位置

rayvision_sync/rayvision_sync/transmission/transports.json

#####    2.根据具体上传平台号，修改“server_ip”和“server_port”(engin_type和server_name可以不需要修改)

```json
"foxrenderfarm_www6": {
        "engine_type":"aspera",
        "server_name":"Europe",
        "server_ip":"18.196.46.13",
        "server_port":"10621"
    },
```

具体路径如下图所示：

![](https://blog-tao625.oss-cn-shenzhen.aliyuncs.com/izone/blog/20201105190325.png)

### 下载

#### 1. 以单帧为粒度渲染完成了自动下载(任务号必须)

```
def auto_download(self, task_id_list=None, max_speed=None,
                  print_log=False, sleep_time=10,
                  download_filename_format="true",
                  local_path=None):
    """Automatic download (complete one frame download).

    Wait for all downloads to update undownloaded records.

    Args:
        task_id_list (list of int): List of tasks ids that need to be
            downloaded.
        max_speed (str, optional): Download speed limit,
            The unit of 'max_speed' is KB/S,default value is 1048576 KB/S,
            means 1 GB/S.
        print_log (bool, optional): Print log, True: print, False: not
            print.
        sleep_time (int, optional): Sleep time between download,
            unit is second.
        download_filename_format: File download local save style,
            "true": tape task ID and scene name,
            "false" : download directly without doing processing.
        local_path (str): Download file locally save path,
            default Window system is "USERPROFILE" environment variable address splicing "renderfarm_sdk",
            Linux system is "HOME" environment variable address splicing "renderfarm_sdk".

    Returns:
        bool: True is success.

    """
```

使用样例

```
from rayvision_api import RayvisionAPI
from rayvision_sync.download import RayvisionDownload

api = RayvisionAPI(access_id="xxx",
                   access_key="xxx",
                   domain="task.renderbus.com",
                   platform="2")

download = RayvisionDownload(api)
download.auto_download([18164087], download_filename_format="false")
```

#### 2. 以任务为粒度，当任务中帧全部渲染完成开始下载(任务号必须)

```
def auto_download_after_task_completed(self, task_id_list=None,
                                       max_speed=None, print_log=True,
                                       sleep_time=10,
                                       download_filename_format="true",
                                       local_path=None):
    """Auto download after the tasks render completed.

    Args:
        task_id_list(list of int): List of tasks ids that need to be
            downloaded.
        max_speed(str, optional): Download speed limit,
            The unit of 'max_speed' is KB/S,default value is 1048576 KB/S,
            means 1 GB/S.
        print_log(bool, optional): Print log, True: print, False: not
            print.
        sleep_time(int, optional): Sleep time between download,
            unit is second.
        download_filename_format: File download local save style,
            "true": tape task ID and scene name,
            "false" : download directly without doing processing.
        local_path (str): Download file locally save path,
            default Window system is "USERPROFILE" environment variable address splicing "renderfarm_sdk",
            Linux system is "HOME" environment variable address splicing "renderfarm_sdk".

    Returns:
        bool: True is success.

    """
```

使用样例

```
from rayvision_api import RayvisionAPI
from rayvision_sync.download import RayvisionDownload

api = RayvisionAPI(access_id="xxx",
                   access_key="xxx",
                   domain="task.renderbus.com",
                   platform="2")

download = RayvisionDownload(api)
download.auto_download_after_task_completed([18164087], download_filename_format="false")
```

#### 3. 用户自定义output server目录结构下载(任务号非必须)

```
def download(self, task_id_list=None,
             max_speed=None, print_log=True,
             download_filename_format="true",
             local_path=None, server_path=None):
    """Download and update the undownloaded record.

    Args:
        task_id_list (list of int): List of tasks ids that need to be
            downloaded.
        max_speed (str, optional): Download speed limit,
            The unit of ``max_speed`` is KB/S,default value is 1048576
            KB/S, means 1 GB/S.
        print_log (bool, optional): Print log, True: print, False: not
            print.
        download_filename_format: File download local save style,
            "true": tape task ID and scene name,
            "false" : download directly without doing processing.
        local_path (str): Download file locally save path,
            default Window system is "USERPROFILE" environment variable address splicing "renderfarm_sdk",
            Linux system is "HOME" environment variable address splicing "renderfarm_sdk",
        server_path (str or list): The user customizes the file structure to be downloaded from
            the output server, and all file structures are downloaded by default,
            example: "18164087_test/l_layer".

    Returns:
        bool: True is success.

    """
```

使用样例:

```
from rayvision_api import RayvisionAPI
from rayvision_sync.download import RayvisionDownload

api = RayvisionAPI(access_id="xxx",
                   access_key="xxx",
                   domain="task.renderbus.com",
                   platform="2")

download = RayvisionDownload(api)
download.download(download_filename_format="true", server_path="18164087_muti_layer_test/l_ayer2")
```



