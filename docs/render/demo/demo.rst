Maya demo
-----------

 ::

    from rayvision_api.core import RayvisionAPI
    from rayvision_maya.analyze_maya import AnalyzeMaya
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.download import RayvisionDownload
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_task, append_to_upload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "62",
        "access_id": "xxxx",
        "access_key": "xxxx",
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # Step1:Analyze CG File
    analyze_info = {
        "cg_file": r"D:\files\CG FILE\muti_layer_test.ma",
        "workspace": "c:/workspace",
        "software_version": "2019",
        "project_name": "Project1",
        "plugin_config": {
            "mtoa": "3.2.1.1"
        },
        "platform": render_para['platform']
    }
    analyze_obj = AnalyzeMaya(**analyze_info)
    analyze_obj.analyse()


    # Step2: Add some custom parameters, or update the original parameter value
    update_task = {
        "pre_frames": "100",
        "stop_after_test": "1"
    }
    update_task_info(update_task, analyze_obj.task_json)

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, analyze_obj.task_json)

    custom_info_to_upload = []
    append_to_upload(custom_info_to_upload, analyze_obj.upload_json)

    # Step3: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step4:Check json files
    check_obj = RayvisionCheck(api, analyze_obj)
    task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)


    # Step5: Transmission
    """
    There are two ways to upload the transmission:
    Upload_method: 1: upload four json files and upload the resource file according to upload.json;
                   2: json files and resources are uploaded separately;
    """
    CONFIG_PATH = {
        "tips_json_path": analyze_obj.tips_json,
        "task_json_path": analyze_obj.task_json,
        "asset_json_path": analyze_obj.asset_json,
        "upload_json_path": analyze_obj.upload_json,
    }
    upload_obj = RayvisionUpload(api)
    """
    The default of the test demo is to upload json and resource files at the same time,
    and users can choose their own upload method according to the actual situation.
    """
    upload_method = 1
    if upload_method == 1:
        # step4.1:Json files are uploaded in conjunction with CG resources
        upload_obj.upload(str(task_id), **CONFIG_PATH)
    elif upload_method == 2:
        # step4.2:CG resource files and json are uploaded separately
        upload_obj.upload_asset(upload_json_path=CONFIG_PATH["upload_json_path"])
        upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))


    # Step6:Submit Task
    api.submit(int(task_id))


    # Step7:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    # download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(task_id)])


Houdini demo
-------------
 ::

    from rayvision_api.core import RayvisionAPI
    from rayvision_houdini.analyze_houdini import AnalyzeHoudini
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.download import RayvisionDownload
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_task, append_to_upload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "62",
        "access_id": "xxxx",
        "access_key": "xxxx",
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # Step1:Analyze CG File
    analyze_info = {
        "cg_file": r"D:\houdini\CG file\flip_test_slice4.hip",
        "workspace": "c:/workspace",
        "software_version": "17.5",
        "project_name": "Project1",
        "plugin_config": {
            'renderman': '22.6'
        },
        "platform": render_para['platform']
    }
    analyze_obj = AnalyzeHoudini(**analyze_info)
    analyze_obj.analyse()


    # Step2: Add some custom parameters, or update the original parameter value
    update_task = {
        "pre_frames": "100",
        "stop_after_test": "1"
    }
    update_task_info(update_task, analyze_obj.task_json)

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, analyze_obj.task_json)

    custom_info_to_upload = []
    append_to_upload(custom_info_to_upload, analyze_obj.upload_json)

    # Step3: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step4:Check json files
    check_obj = RayvisionCheck(api, analyze_obj)
    task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)


    # Step5: Transmission
    """
    There are two ways to upload the transmission:
    Upload_method: 1: upload four json files and upload the resource file according to upload.json;
                   2: json files and resources are uploaded separately;
    """
    CONFIG_PATH = {
        "tips_json_path": analyze_obj.tips_json,
        "task_json_path": analyze_obj.task_json,
        "asset_json_path": analyze_obj.asset_json,
        "upload_json_path": analyze_obj.upload_json,
    }
    upload_obj = RayvisionUpload(api)
    """
    The default of the test demo is to upload json and resource files at the same time,
    and users can choose their own upload method according to the actual situation.
    """
    upload_method = 1
    if upload_method == 1:
        # step3.1:Json files are uploaded in conjunction with CG resources
        upload_obj.upload(str(task_id), **CONFIG_PATH)
    elif upload_method == 2:
        # step3.2:CG resource files and json are uploaded separately
        upload_obj.upload_asset(upload_json_path=CONFIG_PATH["upload_json_path"])
        upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))


    # Step6:Submit Task
    api.submit(int(task_id))


    # Step7:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    # download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(task_id)])


Clarisse demo
--------------

 ::

    from rayvision_api.core import RayvisionAPI
    from rayvision_clarisse.analyse_clarisse import AnalyzeClarisse
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.download import RayvisionDownload
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_task, append_to_upload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "62",
        "access_id": "xxxx",
        "access_key": "xxxx",
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # Step1:Analyze CG File
    analyze_info = {
        "cg_file": r"D:\files\CG FILE\clarisse_test1.project",
        "workspace": "c:/workspace",
        "software_version": "clarisse_ifx_4.0_sp3",
        "project_name": "Project1",
        "plugin_config": {},
        "platform": render_para['platform']
    }
    analyze_obj = AnalyzeClarisse(**analyze_info)
    analyze_obj.analyse()


    # Step2:Add some custom parameters, or update the original parameter value
    update_task = {
        "pre_frames": "100",
        "stop_after_test": "1"
    }
    update_task_info(update_task, analyze_obj.task_json)

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, analyze_obj.task_json)

    custom_info_to_upload = []
    append_to_upload(custom_info_to_upload, analyze_obj.upload_json)

    # Step3: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step4:Check json files
    check_obj = RayvisionCheck(api, analyze_obj)
    task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)


    # Step5:Transmission
    """
    There are two ways to upload the transmission:
    Upload_method: 1:upload four json files and upload the resource file according to upload.json;
                   2:json files and resources are uploaded separately;
    """
    CONFIG_PATH = {
        "tips_json_path": analyze_obj.tips_json,
        "task_json_path": analyze_obj.task_json,
        "asset_json_path": analyze_obj.asset_json,
        "upload_json_path": analyze_obj.upload_json,
    }
    upload_obj = RayvisionUpload(api)
    """
    The default of the test demo is to upload json and resource files at the same time,
    and users can choose their own upload method according to the actual situation.
    """
    upload_method = 1
    if upload_method == 1:
        # Step5.1:Json files are uploaded in conjunction with CG resources
        upload_obj.upload(str(task_id), **CONFIG_PATH)
    elif upload_method == 2:
        # Step5.2:CG resource files and json are uploaded separately
        upload_obj.upload_asset(upload_json_path=CONFIG_PATH["upload_json_path"])
        upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))


    # Step6:Submit Task
    api.submit(int(task_id))


    # Step7:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    # download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(task_id)])


3ds Max demo
--------------

 ::

    from rayvision_max.analyse_max import AnalyseMax
    from rayvision_api.core import RayvisionAPI
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_upload, append_to_task
    from rayvision_sync.download import RayvisionDownload
    from rayvision_sync.upload import RayvisionUpload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "62",
        "access_id": "xxxx",
        "access_key": "xxxx",
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    analyze_info = {
        "cg_file": r'D:\houdini\CG file\jh\jh.max',
        "software_version": "2018",
        "project_name": "Project1",
        "workspace": r"C:\workspace\max",
        "plugin_config": {},
        "renderable_camera": ["Camera001"],  # 渲染需要的相机，不指定则默认渲染所有相机
        "platform": render_para['platform']
    }
    analyze_obj = AnalyseMax(**analyze_info)
    analyze_obj.analyse()

    # Step2: Add some custom parameters, or update the original parameter value
    update_task = {
        "pre_frames": "100",
        "stop_after_test": "1"
    }
    update_task_info(update_task, analyze_obj.task_json)

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, analyze_obj.task_json)

    custom_info_to_upload = []
    append_to_upload(custom_info_to_upload, analyze_obj.upload_json)

    # Step3: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step4:Check json files
    check_obj = RayvisionCheck(api, analyze_obj)
    task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)

    # Step5: Transmission
    """
    There are two ways to upload the transmission:
    Upload_method: 1: upload four json files and upload the resource file according to upload.json;
                   2: json files and resources are uploaded separately;
    """
    CONFIG_PATH = {
        "tips_json_path": analyze_obj.tips_json,
        "task_json_path": analyze_obj.task_json,
        "asset_json_path": analyze_obj.asset_json,
        "upload_json_path": analyze_obj.upload_json,
    }
    upload_obj = RayvisionUpload(api)
    """
    The default of the test demo is to upload json and resource files at the same time,
    and users can choose their own upload method according to the actual situation.
    """
    upload_method = 1
    if upload_method == 1:
        # Step5.1:Json files are uploaded in conjunction with CG resources
        upload_obj.upload(str(task_id), **CONFIG_PATH)
    elif upload_method == 2:
        # Step5.2:CG resource files and json are uploaded separately
        upload_obj.upload_asset(upload_json_path=CONFIG_PATH["upload_json_path"])
        upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))

    # Step6:Submit Task
    api.submit(int(task_id))

    # Step7:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    # download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(task_id)])



C4D demo
------------

  ::

    from rayvision_api.core import RayvisionAPI
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_task, append_to_upload
    from rayvision_c4d.analyze_c4d import AnalyzeC4d
    from rayvision_sync.download import RayvisionDownload
    from rayvision_sync.upload import RayvisionUpload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "62",
        "access_id": "xxxxx",
        "access_key": "xxxxxx",
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # Step1:Analyze CG File
    analyze_info = {
        "cg_file": r"D:\houdini\cg_file\ybt.c4d",
        "workspace": "c:/workspace",
        "software_version": "R22",
        "project_name": "Project1",
        "plugin_config": {}
    }
    analyze_obj = AnalyzeC4d(**analyze_info)
    analyze_obj.analyse(exe_path=r"C:\Program Files\Maxon Cinema 4D R22\Cinema 4D.exe")

    # Step2:Add some custom parameters, or update the original parameter value
    update_task = {
        "pre_frames": "100",
        "stop_after_test": "1"
    }
    update_task_info(update_task, analyze_obj.task_json)

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, analyze_obj.task_json)

    custom_info_to_upload = []
    append_to_upload(custom_info_to_upload, analyze_obj.upload_json)

    # Step3: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step4:Check json files
    check_obj = RayvisionCheck(api, analyze_obj)
    task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)

    # Step5:Transmission
    """
    There are two ways to upload the transmission:
    Upload_method: 1:upload four json files and upload the resource file according to upload.json;
                   2:json files and resources are uploaded separately;
    """
    CONFIG_PATH = {
        "tips_json_path": analyze_obj.tips_json,
        "task_json_path": analyze_obj.task_json,
        "asset_json_path": analyze_obj.asset_json,
        "upload_json_path": analyze_obj.upload_json,
    }
    upload_obj = RayvisionUpload(api, automatic_line=True)
    """
    The default of the test demo is to upload json and resource files at the same time,
    and users can choose their own upload method according to the actual situation.
    """
    upload_method = 1
    if upload_method == 1:
        # Step5.1:Json files are uploaded in conjunction with CG resources
        upload_obj.upload(str(task_id), **CONFIG_PATH)
    elif upload_method == 2:
        # Step5.2:CG resource files and json are uploaded separately
        upload_obj.upload_asset(upload_json_path=CONFIG_PATH["upload_json_path"])
        upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))

    # Step6:Submit Task
    api.submit(int(task_id))

    # Step7:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    # download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(task_id)])


Blender demo
----------------

 ::

    from rayvision_api.core import RayvisionAPI
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_task, append_to_upload
    from rayvision_blender.analyze_blender import AnalyzeBlender
    from rayvision_sync.download import RayvisionDownload
    from rayvision_sync.upload import RayvisionUpload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",
        "platform": "62",
        "access_id": "xxxx",
        "access_key": "xxxx",
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])

    # Step1:Analyze CG File
    analyze_info = {
        "cg_file": r"D:\houdini\cg_file\PRAM RENDER 1.blend",
        "workspace": "c:/workspace",
        "software_version": "2.81",
        "project_name": "Project1",
        "plugin_config": {},
        "platform": render_para['platform']
    }
    analyze_obj = AnalyzeBlender(**analyze_info)
    analyze_obj.analyse(exe_path=r"C:\Program Files (x86)\Blender Foundation\Blender\blender.exe")

    # Step2:Add some custom parameters, or update the original parameter value
    update_task = {
        "pre_frames": "100",
        "stop_after_test": "1"
    }
    update_task_info(update_task, analyze_obj.task_json)

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, analyze_obj.task_json)

    # User-defined UPLOAD.JSON file path
    upload_json_path = r"D:\blender\upload.json"

    custom_info_to_upload = [
        r"D:\houdini\cg_file\PRAM RENDER 1.blend"
    ]

    append_to_upload(custom_info_to_upload, upload_json_path)

    # Step3: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step4:Check json files
    check_obj = RayvisionCheck(api, analyze_obj)
    task_id = check_obj.execute(hardware_config, analyze_obj.task_json, analyze_obj.upload_json)

    # Step5:Transmission
    """
    There are two ways to upload the transmission:
    Upload_method: 1:upload four json files and upload the resource file according to upload.json;
                   2:json files and resources are uploaded separately;
    """
    CONFIG_PATH = {
        "tips_json_path": analyze_obj.tips_json,
        "task_json_path": analyze_obj.task_json,
        "asset_json_path": analyze_obj.asset_json,
    }
    upload_obj = RayvisionUpload(api, automatic_line=True)
    """
    The default of the test demo is to upload json and resource files at the same time,
    and users can choose their own upload method according to the actual situation.
    """
    upload_obj.upload_asset(upload_json_path=upload_json_path)
    upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))

    # Step6:Submit Task
    api.submit(int(task_id))

    # Step7:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    # download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(task_id)])


Arnorld Standalone demo
-------------------------

.. warning::
   Arnold Standalone没有自动资产分析功能，并要求客户自行分析资产文件。

---------------

 ::

    from rayvision_api.core import RayvisionAPI
    from rayvision_sync.upload import RayvisionUpload
    from rayvision_sync.download import RayvisionDownload
    from rayvision_api.task.check import RayvisionCheck
    from rayvision_api.utils import update_task_info, append_to_task, append_to_upload

    # API Parameter
    render_para = {
        "domain": "task.renderbus.com",  # If it doesn't work, you can use "task.foxrenderfarm.com"
        "platform": "62",
        "access_id": "xxxxx",
        "access_key": "xxxxx",
    }

    CONFIG_PATH = {
        "task_json_path": r"D:\test\task.json",
        "upload_json_path": r"D:\test\upload.json"
    }

    api = RayvisionAPI(access_id=render_para['access_id'],
                       access_key=render_para['access_key'],
                       domain=render_para['domain'],
                       platform=render_para['platform'])


    # Step1: Add some custom parameters, or update the original parameter value
    # Step1 can also be set without setting
    update_task = {
        "pre_frames": "000:2,4,6-10[1]",
        "stop_after_test": "1"
    }
    update_task_info(update_task, CONFIG_PATH['task_json_path'])

    custom_info_to_task = {}
    append_to_task(custom_info_to_task, CONFIG_PATH['task_json_path'])

    custom_info_to_upload = [
        r"E:\fang\ass_test\static_ass.ass",
        r"E:\fang\ass_test\animation_ass.0060.ass"
    ]
    append_to_upload(custom_info_to_upload, CONFIG_PATH['upload_json_path'])

    # Step2: Set platform hardware configuration information
    hardware_config = {
        "model": "28C",  # Platform CPU: 28C or Platform GPU: 1080Ti or 2080Ti
        "ram": "128GB",  # memory: 64GB or 128GB
        "gpuNum": None  # GPU platform requires input like 2*GPU, if CPU platform it is None
    }

    # Step3:Check json files
    check_obj = RayvisionCheck(api)
    task_id = check_obj.execute(hardware_config, CONFIG_PATH['task_json_path'])


    # Step4: Transmission
    """
    task.json files and resources are uploaded separately
    """
    upload_obj = RayvisionUpload(api)

    # Step4.1: Upload resource file(upload.json)
    upload_obj.upload_asset(upload_json_path=CONFIG_PATH["upload_json_path"])
    # Step4.2: Upload task.json
    upload_obj.upload_config(str(task_id), list(CONFIG_PATH.values()))


    # Step5:Submit Task
    api.submit(int(task_id))

    # Step6:Download
    download = RayvisionDownload(api)
    # All complete before the automatic start of uniform download.
    download.auto_download_after_task_completed([task_id])
    # Poll download (automatic download for each completed frame)
    download.auto_download([int(1484947)], local_path=r"E:\test", download_filename_format="false")