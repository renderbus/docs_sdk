.. warning::
   使用前请确保本地Python环境和PIP可用。

安装指南
=========

.. important::
   再使用具体渲染模块之前，比如想使用houdini渲染，请参考以下安装方法依次安装模块
   `rayvision_log`, `rayvision_api` , `rayvision_utils` , `rayvision_sync`,
   然后安装 `rayvision_houdini` 。

   ````pip install rayvision_houdini -i https://pip.renderbus.com/simple/````


安装方法：

**方法一(推荐):**
   - 渲染的模块都保存在 `PIP服务器 <https://pip.renderbus.com/simple/>`_ ,使用以下命令直接安装:

   ``pip install rayvision_log -i https://pip.renderbus.com/simple/``
   ``pip install rayvision_api -i https://pip.renderbus.com/simple/``
   ``pip install rayvision_utils -i https://pip.renderbus.com/simple/``
   ``pip install rayvision_sync -i https://pip.renderbus.com/simple/``

*其它模块安装类似次安装方法*

**方法二:**
   - 直接从GitHub下载源码:

   ``git clone https://github.com/renderbus/rayvision_log.git``
   ``git clone https://github.com/renderbus/rayvision_api.git``
   ``git clone https://github.com/renderbus/rayvision_utils.git``
   ``git clone https://github.com/renderbus/rayvision_sync.git``

*其它模块安装类似次安装方法*

**方法三:**
   - 在IDE中配置PIP源以下地址: ``https://pip.renderbus.com/simple/``
   - 以pycharm为例::
.. image:: ../_static/image/pycharm配置PIP地址.png
.. image:: ../_static/image/pycharm安装自定义包.png