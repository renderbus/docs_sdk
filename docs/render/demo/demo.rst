###  *houdini, clarisse, maya 的使用样例*

Maya demo
-----------

 ::

    from __future__ import print_function
    from rayvision_api.core import RayvisionAPI
    from rayvision_utils.analyse_handle import RayvisionAnalyse
    from rayvision_api.task.handle import RayvisionTask
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_sync.transfer import RayvisionTransfer
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.manage import RayvisionManageTask
    from rayvision_sync.download import RayvisionDownload

    # Set necessary parameters.

    render_para = {
        "domain": "task.renderbus.com",  # 用戶不需要修改
        "platform": "2",
        "access_id": "xxxx",  # 用户自行修改(必填)
        "access_key": "xxxx",  # 用户自行修改(必填)
        "local_os": 'windows',
        "workspace": "c:/workspace",  # 本地保存根目录自动创建(用户可自行修改,全英文路径)
        "render_software": "Maya",  # CG软件（Maya, Houdini, Katana, Clarisse）
        "software_version": "2018",  # 注意CG版本的形式
        "project_name": "Project1",
        "plugin_config": {  # CG插件，无插件则为{}
            "mtoa": "3.1.2.1"
        }
    }

    # CG资源文件绝对路径(必须)
    cg_file = r"E:\copy\muti_layer_test.ma"

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # 打印当前用户信息
    print(api.user.query_user_profile())

    # Rayvision analysis
    task = RayvisionTask(cg_file=cg_file, **render_para)
    RayvisionAnalyse.execute(task)
    task.task_info["pre_frame"] = "100"
    RayvisionCheck(task).execute(task.task_info, task.upload_info)

    # Upload json file
    transfer_info = {
        'config_bid': api.user_info['config_bid'],
        'input_bid': api.user_info['input_bid'],
        "output_bid": api.user_info["output_bid"],
        "domain": render_para['domain'],
        "platform": render_para['platform'],
        "local_os": render_para['local_os'],
        "user_id": api.user_info['user_id'],
        "local_path": r"C:\workspace",  # 下载资源本地保存路径
    }

    resource_config_file = {
        "task_json_path": task.task_json_path,
        "tips_json_path": task.tips_json_path,
        "asset_json_path": task.asset_json_path,
        "upload_json_path": task.upload_json_path,
    }

    # start transfer(传输)
    trans = RayvisionTransfer(**transfer_info)
    upload = RayvisionUpload(trans)
    upload.upload(task_id=task.task_id, **resource_config_file)

    task_id = int(task.task_id)
    result = api.submit(task_id)

    # download(下载)
    manage_task = RayvisionManageTask(api.query)
    trans.manage_task = manage_task
    download = RayvisionDownload(trans)

    # demo提供2种下载方式用户自行选择
    # download.auto_download_after_task_completed([task_id])  # 所有都完成后才自动开始统一下载
    download.auto_download([task_id])  # 轮询下载（每完成每一帧自动下载）


Houdini demo
-------------
 ::

    from __future__ import print_function
    from rayvision_api.core import RayvisionAPI
    from rayvision_utils.analyse_handle import RayvisionAnalyse
    from rayvision_api.task.handle import RayvisionTask
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_sync.transfer import RayvisionTransfer
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.manage import RayvisionManageTask
    from rayvision_sync.download import RayvisionDownload

    # Set necessary parameters

    render_para = {
        "domain": "task.renderbus.com",  # 用戶不需要修改
        "platform": "2",  # 平台号
        "access_id": "xxxxxx",  # 用户自行修改(必填)
        "access_key": "xxxxx",  # 用户自行修改(必填)
        "local_os": 'windows',
        "workspace": "c:/workspace",  # 本地保存根目录自动创建(用户可自行修改,全英文路径)
        "render_software": "Houdini",  # CG软件（Maya, Houdini, Katana, Clarisse）
        "software_version": "17.5.293",  # 注意CG版本的形式
        "project_name": "Project1",
        "plugin_config": {}  # CG插件，无插件则为{}
    }

    # CG资源文件绝对路径(必须)
    cg_file = r"E:\copy\test02.hip"

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # 打印当前用户信息
    print(api.user.query_user_profile())

    # Rayvision analysis
    task = RayvisionTask(cg_file=cg_file, **render_para)
    RayvisionAnalyse.execute(task)
    task.task_info['pre_frames'] = "100"
    RayvisionCheck(task).execute(task.task_info, task.upload_info)

    # Upload json file
    transfer_info = {
        'config_bid': api.user_info['config_bid'],
        'input_bid': api.user_info['input_bid'],
        "output_bid": api.user_info["output_bid"],
        "domain": render_para['domain'],
        "platform": render_para['platform'],
        "local_os": render_para['local_os'],
        "user_id": api.user_info['user_id'],
        "local_path": r"C:\workspace",  # 下载资源本地保存路径
    }

    resource_config_file = {
        "task_json_path": task.task_json_path,
        "tips_json_path": task.tips_json_path,
        "asset_json_path": task.asset_json_path,
        "upload_json_path": task.upload_json_path,
    }

    # start transfer(传输)
    trans = RayvisionTransfer(**transfer_info)
    upload = RayvisionUpload(trans)
    upload.upload(task_id=task.task_id, **resource_config_file)

    task_id = int(task.task_id)
    result = api.submit(task_id)

    # download(下载)
    manage_task = RayvisionManageTask(api.query)
    trans.manage_task = manage_task
    download = RayvisionDownload(trans)

    # demo提供2种下载方式用户自行选择
    # download.auto_download_after_task_completed([task_id])  # 所有都完成后才自动开始统一下载
    download.auto_download([task_id])  # 轮询下载（每完成每一帧自动下载）


Clarisse demo
--------------

 ::

    from __future__ import print_function

    from rayvision_api.core import RayvisionAPI
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.task.handle import RayvisionTask
    from rayvision_sync.download import RayvisionDownload
    from rayvision_sync.manage import RayvisionManageTask
    from rayvision_sync.transfer import RayvisionTransfer
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_utils.analyse_handle import RayvisionAnalyse

    # 配置信息
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "2",
        "access_id": "xxxxx",
        "access_key": "xxxxxx",
        "local_os": 'windows',
        "workspace": "c:/workspace",  # 本地保存根目录，自动创建，用户可自行修改（）
        "render_software": "Clarisse",  # CG软件（Maya, Houdini, Katana, Clarisse）
        "software_version": "clarisse_ifx_4.0_sp3",  # 注意CG版本的形式
        "project_name": "Project1",
        "plugin_config": {},  # CG插件，无插件则为{}
    }

    # CG资源文件绝对路径(必须)
    # cg_file = "E:/copy/DHGB_sc05_zhuta_610-1570_v0102.project"
    cg_file = r"D:\ziyuan\class01\feichuan.project"

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # 当前用户配置信息
    print(api.user.query_user_profile())

    # 用户想输入自定参数
    pixo_env = {
        "test": 123
    }

    # 开始分析
    task = RayvisionTask(cg_file=cg_file, **render_para)
    RayvisionAnalyse.execute(task)
    task.task_info['env'] = pixo_env
    RayvisionCheck(task).execute(task.task_info, task.upload_info)

    # 上传分析资源
    transfer_info = {
        'config_bid': api.user_info['config_bid'],
        'input_bid': api.user_info['input_bid'],
        "output_bid": api.user_info["output_bid"],
        "domain": render_para['domain'],
        "platform": render_para['platform'],
        "local_os": render_para['local_os'],
        "user_id": api.user_info['user_id'],
        "local_path": r"C:\workspace",  # 下载资源本地保存路径
    }

    resource_config_file = {
        "task_json_path": task.task_json_path,
        "tips_json_path": task.tips_json_path,
        "asset_json_path": task.asset_json_path,
        "upload_json_path": task.upload_json_path,
    }

    # start transfer(传输)
    trans = RayvisionTransfer(**transfer_info)
    upload = RayvisionUpload(trans)
    upload.upload(task_id=task.task_id, **resource_config_file)

    task_id = int(task.task_id)
    result = api.submit(task_id)

    # download(下载)
    manage_task = RayvisionManageTask(api.query)
    trans.manage_task = manage_task
    download = RayvisionDownload(trans)

    # demo提供2种下载方式用户自行选择
    # download.auto_download_after_task_completed([task_id])  # 所有都完成后才自动开始统一下载
    download.auto_download([task_id])  # 轮询下载（每完成每一帧自动下载）


