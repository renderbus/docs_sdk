.. warning::
   请确保本地python环境能够正常使用，并已经安装`rayvision_api`、`rayvision_utils`、`rayvision_sync`模块。

Utils包介绍和使用
....................

**rayvision_utils** 是一个通用方法的模组，主要是CG在渲染中其它模组都会使用的一些通用功能，
比如“自定义异常处理”， “分析的数据预处理”和“cmd”接口等，
虽然是最为一个通用模组存在，但是本身还是会依赖 被作为底层模块的**rayvision_api**，
从而进行一些通用的服务器接口调用，


演示demo
-------------

学习的最好方法就是参考例子，`rayvision_utils` 也不例外，
下面的是根据用户传递maya资源信息调用utils分析预处理模块进行相关数据提取的demo,仅供您参考::

    from rayvision_api.task.handle import RayvisionTask
    from rayvision_utils.analyse_handle import RayvisionAnalyse


    user_info = {
        "domain_name": "task.renderbus.com",  # 用戶不需要修改
        "platform": "2",
        "access_id": "xxxx",  # 用户自行修改(必填)
        "access_key": "xxxx",  # 用户自行修改(必填)
        "local_os": 'windows',
        "workspace": "c:/workspace",  # 本地保存根目录自动创建(用户可自行修改,全英文路径)
    }

    render_config = {
        "render_software": "Maya",  # CG软件（Maya, Houdini, Katana, Clarisse）
        "software_version": "2018",  # 注意CG版本的形式
        "project_name": "Project1",
        "plugin_config": {  # CG插件，无插件则为{}
                            "mtoa": "3.1.2.1"
                         }
      }

    # CG资源文件绝对路径(必须)
    cg_file = r"E:\copy\muti_layer_test.ma"

    task = RayvisionTask(user_info, render_config, cg_file)
    # 根据CG资源信息自动进行相应的分析预处理
    RayvisionAnalyse.execute(task)


Demo相关参数
-----------

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
     - K2lbvJSlPScStv72niHGXZtbQYc5F687
     - 用户开发者中心ID（非user_id）
   * - access_key
     - 6b4b6eab841772113113b61c79db6899
     - 用户开发者中心key
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
     - Maya
     - CG软件名(注意首字母大写)
   * - software_version
     - 2018
     - CG软件版本
   * - project_name
     - project1
     - 自定义项目名(可为空)
   * - plugin_config
     - {"mtoa": "3.1.2.1"}
     - CG所用插件(可为空)