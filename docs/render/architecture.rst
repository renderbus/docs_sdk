架构概览
========
本文档介绍了RenderBus架构及其组件之间的依赖关系。


组件
-----

**rayvision_log** 和 **rayvision_api** 为底层模块被其它模块锁依赖；

**rayvision_utils** 虽然作为通用模块但是集成了CG配置信息的预处理功能；
还是会调用 **rayvision_api** 的服务器接口；
**rayvision_sync** 只提供传输相关的功能，仅依赖api和日志模块；
**rayvision_maya**、**rayvision_houdini** 和 **rayvision_clarisse** 模块
会依赖通用模块( **rayvision_utils** )。



- API(rayvison_api)

底层核心模块，提供了大量的调用服务器的接口

- 通用分析(rayvison_utils)

提供一些其它模块需要的通用功能，集成了CG渲染数据必要的数据预处理和自定义异常管理功能。

- 传输(rayvison_sync)

提供CG配置文件，资源文件的上传功能和渲染结果的下载功能，本身是集成了下载所需的工具。

- Maya(rayvison_maya)

集成了对maya资源文件的分析功能

- Houdini(rayvison_houdini)

集成了读houdini资源文件的分析功能

- Clarisse(rayvison_clarisse)

集成了对clarisse资源文件的分析功能

- 3ds Max(rayvison_max)

集成了对3ds Max资源文件的分析功能

流程图
-------

.. image:: ../_static/image/SDK基本使用流程.png