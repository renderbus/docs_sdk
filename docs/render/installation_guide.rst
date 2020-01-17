.. important::
   使用前请确保本地Python环境和PIP可用。

安装指南
=========

**方法一(推荐):**

.. note::
   中国用户如果访问Python官方地址网络受限，可以从自定义PIP服务器下载安装。

- 从Python官方pypi下载(推荐)

   ``pip install rayvision_maya``

   ``pip install rayvision_clarissa``

   ``pip install rayvision_houdini``

- 从自定义PIP服务器安装

   再使用具体渲染模块之前，比如想使用houdini渲染，请参考以下安装方法依次安装模块
   `rayvision_log`, `rayvision_api` , `rayvision_utils` , `rayvision_sync`,
   然后安装 `rayvision_houdini` 。

   ``pip install rayvision_log -i https://pip.renderbus.com/simple/``

   ``pip install rayvision_api -i https://pip.renderbus.com/simple/``

   ``pip install rayvision_utils -i https://pip.renderbus.com/simple/``

   ``pip install rayvision_sync -i https://pip.renderbus.com/simple/``


**方法二:**

   - 直接从GitHub下载源码:

   ``git clone https://github.com/renderbus/rayvision_log.git``

   ``git clone https://github.com/renderbus/rayvision_api.git``

   ``git clone https://github.com/renderbus/rayvision_utils.git``

   ``git clone https://github.com/renderbus/rayvision_sync.git``


**方法三:**

   - 在IDE中配置PIP源以下地址: ``https://pip.renderbus.com/simple/``
   - 以pycharm为例::
.. image:: ../_static/image/pycharm配置PIP地址.png

.. image:: ../_static/image/pycharm安装自定义包.png