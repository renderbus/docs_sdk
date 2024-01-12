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

#### 2. 使用线程池控制上传

```
def thread_pool_upload(self, upload_pool, pool_size=10, **kwargs)::
    """Thread pool upload.

    Args:
        upload_pool (list or tuple): store a list or ancestor of uploaded files.
        pool_size (int): thread pool size, default is 10 threads.

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
UPLOAD.thread_pool_upload(upload_pool, pool_size=20)
```

#### 3. 只上传upload里面资源

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

#### 4. 只上传分析生成的json配置文件

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

#### 5. 先上传配置文件然后自动根据upload文件上传资源(任务号必须)

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

#### 6. append_to_upload:自定义upload.json文件

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
# custom_info_to_upload = r"D:\houdini\CG file\houdini_file"

# 需要指定一个存在的upload.json路径
append_to_upload(custom_info_to_upload, r"D:\test\upload.json")
UPLOAD.upload_asset(r"D:\test\upload.json")
```

#### 7. 上传文件类型(transmit_type)

> 上传文件由参数"transmit_type"控制, 支持2中传输文件类型: ”upload_list“ 和”upload_json“

- upload_list

  > 这种上传模式指定的“upload_json_path”文件(支持txt和json文件)内容每一行可以是一个文件绝对路径或者文件夹绝对路径，如果是文件夹则会上传文件夹里面所有文件。

  例如:

  ![](https://blog-tao625.oss-cn-shenzhen.aliyuncs.com/izone/blog/20201116160335.png)

- upload_json

  > 这种上传模式指定的“upload_json_path”文件(json文件)内容必须按照固定格式, 且只能上传文件

  例如:

  ```upload.json
  # upload.json
  {
    "asset": [
      {
        "local": "D:/houdini/CG file/local/clarisse_test1.project", 
        "server": "/D/houdini/CG file/local/clarisse_test1.project"
      }
    ]
  }
  ```

### 下载

#### 1. 以单帧为粒度渲染完成了自动下载(任务号必须)

```python
    def auto_download(self, task_id_list=None, max_speed=None,
                      print_log=False, sleep_time=10,
                      download_filename_format="true",
                      local_path=None,
                      engine_type="aspera", server_ip=None, server_port=None,
                      network_mode=0, is_test_stop=False, proxy_ip=None, proxy_port=None,enable_hash=False):
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
            engine_type (str, optional): set engine type, support "aspera" and "raysyncweb", Default "aspera".
            server_ip (str, optional): transmit server host,
                if not set, it is obtained from the default transport profile.
            server_port (str, optional): transmit server port,
                if not set, it is obtained from the default transport profile.
            network_mode (int): network mode： 0: auto selected, default,
                                               1:tcp
                                               2:udp
            is_test_stop(bool): default False, Control test completion status whether to continue downloading
            proxy_ip(str): proxy ip, only supports raysyncproxy engine eg:10.14.88.66.
            proxy_port(str): proxy port, only supports raysyncproxy engine eg:5555.
            enable_hash(bool): Enable hash verification.
        Returns:
            bool: True is success.
        """
```

使用样例

```python
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

```python
    def auto_download_after_task_completed(self, task_id_list=None,
                                  max_speed=None, print_log=True,
                                  sleep_time=10,
                                  download_filename_format="true",
                                  local_path=None,
                                  engine_type="aspera", server_ip=None, server_port=None,
                                  network_mode=0,  is_test_stop=False, proxy_ip=None, proxy_port=None,enable_hash=False):
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
            engine_type (str, optional): set engine type, support "aspera" and "raysyncweb", Default "aspera".
            server_ip (str, optional): transmit server host,
                if not set, it is obtained from the default transport profile.
            server_port (str, optional): transmit server port,
                if not set, it is obtained from the default transport profile.
            network_mode (int): network mode： 0: auto selected, default;
                                               1: tcp;
                                               2: udp;
            is_test_stop(bool): Stop after test frame completes.
            proxy_ip(str): proxy ip, only supports raysyncproxy engine eg:10.14.88.66
            proxy_port(str): proxy port, only supports raysyncproxy engine eg:5555
            enable_hash(bool): Enable hash verification.
        Returns:
            bool: True is success.

        """
```

使用样例

```python
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

```python
    def download(self, task_id_list=None,
                 max_speed=None, print_log=True,
                 download_filename_format="true",
                 local_path=None, server_path=None,
                 engine_type="aspera", server_ip=None, server_port=None,
                 network_mode=0, proxy_ip=None, proxy_port=None):
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
            engine_type (str, optional): set engine type, support "aspera" and "raysyncweb", Default "aspera".
            server_ip (str, optional): transmit server host,
                if not set, it is obtained from the default transport profile.
            server_port (str, optional): transmit server port,
                if not set, it is obtained from the default transport profile.
              network_mode (int): network mode: 0: auto selected, default;
                                               1: tcp;
                                               2: udp;
            proxy_ip(str): proxy ip, only supports raysyncproxy engine eg:10.14.88.66.
            proxy_port(str): proxy port, only supports raysyncproxy engine eg:5555.

        Returns:
            bool: True is success.

        """
```

使用样例:

```python
from rayvision_api import RayvisionAPI
from rayvision_sync.download import RayvisionDownload

api = RayvisionAPI(access_id="xxx",
                   access_key="xxx",
                   domain="task.renderbus.com",
                   platform="2")

download = RayvisionDownload(api)
download.download(download_filename_format="true", server_path="18164087_muti_layer_test/l_ayer2")
```

### 自动获取传输线路、指定网络提供商

#### 1.开启自动获取传输线路(默认关闭)， 设置 automatic_line = True， 例如:

- 上传自动获取传输线路:

  `RayvisionUpload(api, automatic_line=True)`

- 下载自动获取传输线路:

  `RayvisionDownload(api, automatic_line=True)`

#### 2.开启自动获取传输线路并选择网络提供商

网络商名称可以通过接口`get_transfer_config`获取)

- 上传自动获取传输线路并自定义网络商

  `RayvisionUpload(api, automatic_line=True, internet_provider="移动")`

- 下载自动获取传输线路并自定义网络商

  `RayvisionDownload(api, automatic_line=True, internet_provider="移动")`

### 选择传输模式:tcp or udp

network_mode: 控制网络传输模式
     0: 自动选择(默认值为0)
     1: tcp 传输
     2：udp 传输

```
# 以下载为例:
download.auto_download([49240085], network_mode=2)
```



### 自定义传输服务地址和传输引擎选择

> 上传服务地址一般是不需要修改，如果线路不佳也支持自定义修改

#####    1. 上传自定义传输地址和自定义传输引擎设置

> 传输引擎支持：aspera 和 raysyncproxy

- upload_asset

  > ```python
  > UPLOAD.upload_asset(r"D:\test\upload.json", engine_type='aspera', server_ip="45.251.92.16", server_port="12121")
  > ```

- upload_config

  ```python
  CONFIG_PATH = [
      r"C:\workspace\work\tips.json",
      r"C:\workspace\work\task.json",
      r"C:\workspace\work\asset.json",
      r"C:\workspace\work\upload.json",
  ]
  UPLOAD.upload_config(task_id="5165465",
                       config_file_list=config_list,
                       server_ip="45.251.92.16",
                       server_port="12121")
  ```

- upload

  ```python
  UPLOAD.upload(task_id="41235091",
                    engine_type='aspera',
                    server_ip="45.251.92.16",
                    server_port="12121",
                    task_json_path=r"C:\workspace\work\task.json",
                    tips_json_path=r"C:\workspace\work\tips.json",
                    asset_json_path=r"C:\workspace\work\asset.json",
                    upload_json_path=r"C:\workspace\work\upload.json")
  ```

##### 2. 下载自定义传输地址和自定义传输引擎设置

- download

  ```
  download.download([49240085], server_ip="45.251.92.16", server_port="12121")
  ```

- auto_download

  ```
  download.auto_download([49240085], server_ip="45.251.92.16", server_port="12121")
  ```

- auto_download_after_task_completed

  ```
  download.auto_download_after_task_completed([49228557], server_ip="45.251.92.16", server_port="12121")
  ```

  
##### 3. 选择raysyncproxy引擎创建传输任务
```python
    def start_transfer(self, server_ip, server_port, local_path, server_path, storage_id, 
                       task_type=None, task_id=None, file_type="normal", 
                       downstorage="output", max_speed=None, max_timeout=18000, network_mode=1,
                       proxy_ip=None, proxy_port=None, enable_hash=False):
        """Download and update on the start.

        Args:
            server_ip (str): IP address of the raysyncweb transmission server.
            server_port (str or int): The transfer service port of the raysyncweb.
            local_path (str): if task_type is 'upload', the type of local_path is the local file path;
                              if task_type is 'download', the type of local_path is the local dir path;
                              if task_type is 'upload-list', the type of local_path is 'upload.json' file path.
            task_type (str): task_type is "download" or "upload" or "upload-list"
            server_path (str): if task_type is 'upload', the type of local_path is the local dir path;
                               if task_type is 'download', the type of local_path is the local file path;
                               if task_type is 'upload-list', the type of local_path is ''.
            task_id (str or int): if file_type="json" task_id is not None; else task_id is None.
                                  if file_type="normal" task_id is default None
            downstorage (str): Select the storage to download; default "output", optional "input" or "output".
            max_speed (int): default is 1GB/S.
            max_timeout(int): Maximum time for querying task status, default is 18000s
            network_mode(int): Transport Protocol Type, default is 1
                                0 is "default";
                                1 is "tcp-only";
                                2 is "udp-only"
           proxy_ip: Proxy ip eg:10.14.88.66
           proxy_port: Proxy port eg:5555
           enable_hash: Enable hash verification.

        Returns (int): 0 or 100,101,102,500.....
              0: sucess
              100,101,102,500.....: failed
        """
```
使用样例:

```python
from rayvision_sync.rayvision_raysync.transfer_raysync import RayvisionTransferRaysync

#Instantiating an object
trans = RayvisionTransferRaysync(task_domain, user_id, user_name, raysync_key, platform, logger)
#Creating a Transport Task
response_code = trans.start_transfer(server_ip, server_port, local_path,
                     server_path, storage_id, task_type="download",
                     )
# 0 is success, else failed

#Querying all Task Status
response = trans.get_task_list_status()

#Querying one Task Status
response = trans.get_task_status(task_id)
```