.. warning::
   使用前请确保本地Python环境和PIP可用。

log包安装指南
==============

安装rayvision_log
......................

**方法一:**
   - 直接从GitHub下载源码:

   ``git clone git@gitlab.renderbus.com:internal/rayvision_houdini.git``

**方法二:**
   - 渲染的模块都保存在 `PIP服务器 <https://pip.renderbus.com/simple/>`_ ,使用以下命令直接安装:

   ``pip install rayvision_log -i https://pip.renderbus.com/simple/``

**方法三:**
   - 在IDE中配置PIP源: ``https://pip.renderbus.com/simple/``
   - IDE配置方法(pycharm为例)
        1. 添加 PIP服务器源::

        File --> Settings --> Project --> Project Interpreter --> "+" -->
        Manage Repositories --> "+" --> 添加 ``https://pip.renderbus.com/simple/`` --> OK

        2. 搜索rayvision_log 模块并安装。