.. warning::
   请确保本地python环境能够正常使用，并已经安装 `rayvision_api <https://pip.renderbus.com/simple/rayvision-api/>`_ 、`rayvision_utils <https://pip.renderbus.com/simple/rayvision-utils/>`_ 、`rayvision_sync <https://pip.renderbus.com/simple/rayvision-sync/>`_ 模块。

Clarisse介绍和使用
.............................

**rayvision_clarisse** 主要是进行调用Clarisse渲染服务器进行CG渲染的模组，
渲染流程会依赖 `rayvision_api <https://pip.renderbus.com/simple/rayvision-api/>`_ 、`rayvision_utils <https://pip.renderbus.com/simple/rayvision-utils/>`_ 、`rayvision_sync <https://pip.renderbus.com/simple/rayvision-sync/>`_ 模块.


clarisse演示Demo
-----------------

学习的最好方法就是参考例子，`rayvision_clarisse<https://pip.renderbus.com/simple/rayvision-clarisse/>`_ 也不例外，我们也提供了下面的一个使用 **demo** 样例供您把玩学习::

    from __future__ import print_function
    from rayvision_api.core import RayvisionAPI
    from rayvision_utils.analyse_handle import RayvisionAnalyse
    from rayvision_api.task.handle import RayvisionTask
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_sync.transfer import RayvisionTransfer
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.manage import RayvisionManageTask
    from rayvision_sync.download import RayvisionDownload


    # 配置信息
    user_info = {
        "domain_name": "task.renderbus.com",
        "platform": "2",
        "access_id": "xxxxx",
        "access_key": "xxxxx",
        "local_os": 'windows',
        "workspace": "c:/workspace",  # 本地保存根目录，自动创建，用户可自行修改（）
    }

    render_config = {
        "render_software": "Clarisse",  # CG软件（Maya, Houdini, Katana, Clarisse）
        "software_version": "clarisse_ifx_4.0_sp3",  # 注意CG版本的形式
        "project_name": "Project1",
        "plugin_config": {},  # CG插件，无插件则为{}
    }


    # CG资源文件绝对路径(必须)
    # cg_file = "E:/copy/DHGB_sc05_zhuta_610-1570_v0102.project"
    cg_file = r"D:\ziyuan\class01\feichuan.project"


    api = RayvisionAPI(access_id=user_info['access_id'],
                       access_key=user_info['access_key'],
                       domain=user_info['domain_name'],
                       platform=user_info['platform'])

    # 当前用户配置信息
    print(api.user.query_user_profile())

    # 用户想输入自定参数
    pixo_env = {
        "test": 123
    }

    # 开始分析
    task = RayvisionTask(user_info, render_config, cg_file)
    RayvisionAnalyse.execute(task)
    task.task_info['env'] = pixo_env
    RayvisionCheck(task).execute(task.task_info, task.upload_info)

    # 上传分析资源
    transfer_info = {
        'config_bid': api.user_info['config_bid'],
        'input_bid': api.user_info['input_bid'],
        "domain_name": user_info['domain_name'],
        "platform": user_info['platform'],
        "local_os": user_info['local_os'],
        "user_id": api.user_info['user_id']
    }
    config_path = [
        task.task_json_path,
        task.tips_json_path,
        task.asset_json_path,
        task.upload_json_path,
    ]

    TRANS = RayvisionTransfer(transfer_info)
    UPLOAD = RayvisionUpload(TRANS)
    UPLOAD.upload(task.task_id, config_path, task.upload_json_path)

    # 提交到平台开始渲染
    task_id = int(task.task_id)  # int
    result = api.submit(task_id)

    # 下载
    manage_task = RayvisionManageTask(api)
    TRANS.manage_task = manage_task
    TRANS.user_info["output_bid"] = api.user_info["output_bid"]
    TRANS.user_info["local_path"] = r"C:\workspace\test"
    download = RayvisionDownload(TRANS)
    download.auto_download_after_task_completed([task_id])  # 所有帧都完成后才自动开始统一下载
    # download.auto_download([task_id])  # 轮询下载（完成每一帧自动下载）

Demo相关参数
------------

.. list-table:: user_info
   :widths: 15 10 30
   :header-rows: 1

   * - 参数名
     - 参数值
     - 描述
   * - domain_name
     - task.renderbus.com
     - 渲染接口URL
   * - platform
     - 2
     - 平台号ID值
   * - access_id
     - xxxx
     - 用户开发者中心AccessID（非user_id）
   * - access_key
     - xxxx
     - 用户开发者中心AccessKey
   * - local_os
     - windows
     - 用户使用系统（window / linux）
   * - workspace
     - c:/workspace
     - 本地文档保存目录（下载目录可自行设置）


.. list-table:: render_config
   :widths: 15 10 30
   :header-rows: 1

   * - 参数名
     - 参数值
     - 描述
   * - render_software
     - Clarisse
     - CG软件名(注意首字母大写)
   * - software_version
     - clarisse_ifx_4.0_sp3
     - CG软件版本
   * - project_name
     - project1
     - 自定义项目名(可为空)
   * - plugin_config
     - {}
     - CG所用插件(可为空)